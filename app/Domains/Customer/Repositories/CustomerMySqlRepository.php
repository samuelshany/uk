<?php

namespace App\Domains\Customer\Repositories;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\Account\Services\AccountService;
use App\Domains\Customer\Interfaces\CustomerRepositoryInterface;
use App\Domains\Vendor\Models\Address;
use App\Domains\Customer\Models\Customer;
use Illuminate\Support\Facades\Storage;

class CustomerMySqlRepository implements CustomerRepositoryInterface
{

    public function __construct(private Customer $customer)
    {
    }

    public function findById(string $id): Customer
    {
        $customer = $this->customer::findOrFail($id);
        $customer->load('creator');

        return $customer;
    }

    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $result = $this->customer::when(request()->search, function ($q) {
            $searchTerm = '%' . request()->search . '%';
            $q->where(function ($query) use ($searchTerm) {
                $query->where('name', 'like', $searchTerm);
                $query->orWhere('code', 'like', $searchTerm);
            });
        })->when(request()->transaction_from, function ($q) {
            $q->whereHas('purchase', function ($query) {
                $query->whereDate('date', '>=', request()->transaction_from);
            });
        })->when(request()->transaction_to, function ($q) {
            $q->whereHas('purchase', function ($query) {
                $query->whereDate('date', '<=', request()->transaction_to);
            });
        })->when(request()->from, function ($q) {
            $q->whereDate('created_at', '>=', request()->from);
        })->when(request()->to, function ($q) {
            $q->whereDate('created_at', '<=', request()->to);
        })->when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);
        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['name', 'created_at', 'code', 'contact', 'email'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->with(['address', 'account', 'currency'])->withSum('purchase', 'total')->orderBy('code', 'asc');
            if ($limit === 'all') {
                return $result->get();
            } else {
                return $result->paginate($limit);
            }
    }

    public function store($request): bool
    {
        $address = Address::create([
            'address' => $request->address,
            'phone' => $request->address_phone,
            'name' => $request->address_name,
            'zip_code' => $request->zip_code,
            'state_id' => $request->state_id,
            'city_id' => $request->city_id,
            'country_id' => $request->country_id,
        ]);
        if (!$request->is_same_shipping_address) {
            $billingAddress = Address::create([
                'address' => $request->billing_address,
                'phone' => $request->billing_address_phone,
                'name' => $request->billing_address_name,
                'zip_code' => $request->billing_zip_code,
                'state_id' => $request->billing_state_id,
                'city_id' => $request->billing_city_id,
                'country_id' => $request->billing_country_id,
            ]);
        }
        // $account = app(AccountService::class)->findById($request->parent_account_id);
        // $customerMaxId = $this->customer::max('id') ?? 0;
        
        $data = app(AccountMySqlRepository::class)->storeFromCustomer($request->parent_account_id, $request->name, $request->opening_balance??0);

        $customer = $this->customer::create([
            // 'code' => $account->code . ($customerMaxId + 1),
            'code' => $data['account_code'],
            'customer_number' => $data['customer_number'],
            'name' => $request->name,
            'discount' => $request->discount,
            'contact' => $request->contact,
            'email' => $request->email,
            /* 'currency_id' => $request->currency_id, */
            'credit_limit' => $request->credit_limit??0,

            'parent_account_id' => $request->parent_account_id,
            'assign_user_id' => $request->user_id??null,
            'account_id' => $data['account_id'],

            'address_id' => $address->id,
            'billing_address_id' => $billingAddress->id ?? $address->id,
            'creator_id' => auth()->user()->id,
        ]);
        if ($request->has('files')) {
            $customer->addMultipleMediaFromRequest(['files']) ->each(function ($file) {
            
                $file->storingConversionsOnDisk('upload_customer')->toMediaCollection('customer_attachments','upload_customer');
            });
        }

        if($request->has('currencies')&&$request['currencies']) {
            $customer->currencies()->attach($request->currencies);
        }
        if($request->has('payment_types')&&$request['payment_types']) {
            $customer->account()->paymentTypes()->attach($request->payment_types);
        }
        return true;
    }
    
    public function update(string $id, $request): bool
    {
        $customer = $this->customer::findOrFail($id);

        Address::find($customer->address_id)->update([
            'address' => $request->address,
            'phone' => $request->address_phone,
            'name' => $request->address_name,
            'zip_code' => $request->zip_code,
            'state_id' => $request->state_id,
            'city_id' => $request->city_id,
            'country_id' => $request->country_id,
        ]);
        if (!$request->is_same_shipping_address && $customer->billing_address_id == $customer->address_id) {
            $billingAddress = Address::create([
                'address' => $request->billing_address,
                'phone' => $request->billing_address_phone,
                'name' => $request->billing_address_name,
                'zip_code' => $request->billing_zip_code,
                'state_id' => $request->billing_state_id,
                'city_id' => $request->billing_city_id,
                'country_id' => $request->billing_country_id,
            ]);
        } else if (!$request->is_same_shipping_address && $customer->billing_address_id != $customer->address_id) {
            $billingAddress = Address::find($customer->billing_address_id);
            $billingAddress->update([
                'address' => $request->billing_address,
                'phone' => $request->billing_address_phone,
                'name' => $request->billing_address_name,
                'zip_code' => $request->billing_zip_code,
                'state_id' => $request->billing_state_id,
                'city_id' => $request->billing_city_id,
                'country_id' => $request->billing_country_id,
            ]);
        }
        $account = Account::findOrFail($customer->account_id);
        $account->update([
            'name'=>$request->name,
            'opening_balance' => $request->opening_balance ?$request->opening_balance:$account->opening_balance,
        ]);
        
        $customer->update([
            // 'code' => $account->code . ($customerMaxId + 1),
            'name' => $request->name,
            'contact' => $request->contact,
            'email' => $request->email,
            /* 'currency_id' => $request->currency_id, */
            'discount' => $request->discount??$customer->discount,
            'credit_limit' => $request->credit_limit??0,
            'billing_address_id' => $request->is_same_shipping_address ? $customer->address_id : $billingAddress->id,
            'creator_id' => auth()->user()->id,
            'assign_user_id' => $request->user_id??null,
        ]);

        
        
        if($request->has('currencies')&&$request['currencies']) {
            $customer->currencies()->sync($request->currencies);
        }

        if($request->has('payment_types')&&$request['payment_types']) {
            $customer->account->paymentTypes()->sync($request->payment_types);
        }

        if ($request->has('files')) {
            if($customer->getMedia('customer_attachments')){
                $customer->clearMediaCollection('customer_attachments');
            }
            $customer->addMultipleMediaFromRequest(['files']) ->each(function ($file) {
            
                $file->storingConversionsOnDisk('upload_customer')->toMediaCollection('customer_attachments','upload_customer');
            });
        }

        return true;
    }

    public function delete(string $id): bool
    {
        $this->customer::findOrFail($id)?->delete();

        return true;
    }

    public function salesReport()
    {
        $customers = $this->customer::withSum('purchase', 'total')->get();

        return $customers;
    }

    public function assignUser(string $id,$request):bool
    {
        $customer = $this->customer::findOrFail($id);

        $customer->update(['assign_user_id' => $request->user_id]);

        return true;

    }

    public function addAttachments(string $id,$request):bool
    {
        $customer = $this->customer::findOrFail($id);

        if ($request->has('files')) {
            if($customer->getMedia('customer_attachments')){
                $customer->clearMediaCollection('customer_attachments');
            }
            $customer->addMultipleMediaFromRequest(['files']) ->each(function ($file) {
            
                $file->storingConversionsOnDisk('upload_customer')->toMediaCollection('customer_attachments','upload_customer');
            });
        }

        return true;

    }
}
