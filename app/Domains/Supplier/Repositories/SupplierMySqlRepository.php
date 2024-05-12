<?php

namespace App\Domains\Supplier\Repositories;

use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use App\Domains\Supplier\Interfaces\SupplierRepositoryInterface;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\Vendor\Models\Address;
use Illuminate\Database\Eloquent\Collection;
use App\Domains\Account\Models\Account;

class SupplierMySqlRepository implements SupplierRepositoryInterface
{
    public function __construct(private Supplier $supplier)
    {
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $result = $this->supplier::when(request()->search, function ($q) {
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
        })->with(['account', 'currency'])->withSum('purchase', 'total')->orderBy('code', 'asc');

            if ($limit === 'all') {
                return $result->get();
            } else {
                return $result->paginate($limit);
            }

    }

    public function findById(string $id): Supplier
    {
        $supplier = $this->supplier::findOrFail($id);

        return $supplier;
    }

    public function store($request): bool
    {
        //$address = Address::create([
        //    'address' => $request->address,
        //    'phone' => $request->address_phone,
        //    'name' => $request->address_name,
        //    'zip_code' => $request->zip_code,
        //    'state_id' => $request->state_id,
        //    'city_id' => $request->city_id,
        //    'country_id' => $request->country_id,
        //]);

        // $accountCode = Account::find($request->parent_account_id);
        // $spplierMaxId = $this->supplier::max('id') ?? 0;

        $address = Address::create([
            'address' => $request->address,
            'phone' => $request->address_phone,
            'name' => $request->address_name,
            'zip_code' => $request->zip_code,
            'state_id' => $request->state_id,
            'city_id' => $request->city_id,
            'country_id' => $request->country_id,
        ]);
        /* if (!$request->is_same_shipping_address) {
            $billingAddress = Address::create([
                'address' => $request->billing_address,
                'phone' => $request->billing_address_phone,
                'name' => $request->billing_address_name,
                'zip_code' => $request->billing_zip_code,
                'state_id' => $request->billing_state_id,
                'city_id' => $request->billing_city_id,
                'country_id' => $request->billing_country_id,
            ]);
        } */

        $data = app(AccountMySqlRepository::class)->storeFromSupplier($request->parent_account_id, $request->name, false);

        $data = [
            //'code' => $accountCode->code . ($spplierMaxId + 1),
            'code' => $data['account_code'],
            'name' => $request->name,
            'email' => $request->email,
            'contact' => $request->contact,
            'address_id' => $address->id,
            'billing_address_id' => $address->id,
           /*  'billing_address_id' => $billingAddress->id ?? $address->id, */
            'parent_account_id' => $request->parent_account_id,
            'account_id' => $data['account_id'],
            'currency_id' => $request->currency_id,
            'prefix' => $request->prefix,
            'tax_id' => $request->tax_id ?? null,
            'shipping_method' => $request->shipping_method ?? null,
        ];
        $supplier = Supplier::create($data);
        if ($request->has('files')) {
            $supplier->addMultipleMediaFromRequest(['files'])->each(function ($file) {

                $file->storingConversionsOnDisk('upload_supplier')->toMediaCollection('supplier_attachments', 'upload_supplier');
            });
        }
        return true;
    }

    public function update(string $id, $request): bool
    {
        $supplier = $this->supplier::find($id);
        if (!$supplier) {
            return false;
        }
        $address = Address::find($supplier->address_id);
        if(!$address) {
            $address = Address::create([
                'address' => $request->address,
                'phone' => $request->address_phone,
                'name' => $request->address_name,
                'zip_code' => $request->zip_code,
                'state_id' => $request->state_id,
                'city_id' => $request->city_id,
                'country_id' => $request->country_id,
            ]);
            $supplier->address_id = $address->id;

            /* if($request->is_same_shipping_address){ */
                $supplier->billing_address_id = $address->id;
           /*  }else{
                $billingAddress = Address::create([
                    'address' => $request->billing_address,
                    'phone' => $request->billing_address_phone,
                    'name' => $request->billing_address_name,
                    'zip_code' => $request->billing_zip_code,
                    'state_id' => $request->billing_state_id,
                    'city_id' => $request->billing_city_id,
                    'country_id' => $request->billing_country_id,
                ]);
                $supplier->billing_address_id = $billingAddress->id;

            } */
        }else

        //$accountCode = Account::find($request->parent_account_id);

        if ($supplier->address_id) {
            Address::find($supplier->address_id)->update([
                'address' => $request->address,
                'phone' => $request->address_phone,
                'name' => $request->address_name,
                'zip_code' => $request->zip_code,
                'state_id' => $request->state_id,
                'city_id' => $request->city_id,
                'country_id' => $request->country_id,
            ]);

           /*  if (!$request->is_same_shipping_address && $supplier->billing_address_id == $supplier->address_id) {
                $billingAddress = Address::create([
                    'address' => $request->billing_address,
                    'phone' => $request->billing_address_phone,
                    'name' => $request->billing_address_name,
                    'zip_code' => $request->billing_zip_code,
                    'state_id' => $request->billing_state_id,
                    'city_id' => $request->billing_city_id,
                    'country_id' => $request->billing_country_id,
                ]);
                $supplier->billing_address_id  = $billingAddress->id;
            } else if (!$request->is_same_shipping_address && $supplier->billing_address_id != $supplier->address_id) {
                $billingAddress = Address::find($supplier->billing_address_id);
                $billingAddress->update([
                    'address' => $request->billing_address,
                    'phone' => $request->billing_address_phone,
                    'name' => $request->billing_address_name,
                    'zip_code' => $request->billing_zip_code,
                    'state_id' => $request->billing_state_id,
                    'city_id' => $request->billing_city_id,
                    'country_id' => $request->billing_country_id,
                ]);
                $supplier->billing_address_id  = $billingAddress->id;
            }else if($request->is_same_shipping_address&&$supplier->billing_address_id==null){
                $billingAddress = Address::create([
                    'address' => $request->billing_address,
                    'phone' => $request->billing_address_phone,
                    'name' => $request->billing_address_name,
                    'zip_code' => $request->billing_zip_code,
                    'state_id' => $request->billing_state_id,
                    'city_id' => $request->billing_city_id,
                    'country_id' => $request->billing_country_id,
                ]);
            } else if ($request->is_same_shipping_address ) {
                $billingAddress = Address::find($supplier->billing_address_id);
                $billingAddress->update([
                    'address' => $request->billing_address,
                    'phone' => $request->billing_address_phone,
                    'name' => $request->billing_address_name,
                    'zip_code' => $request->billing_zip_code,
                    'state_id' => $request->billing_state_id,
                    'city_id' => $request->billing_city_id,
                    'country_id' => $request->billing_country_id,
                ]);
            } */
        }

        $spplierId = $id;
        $data = [
            //'code' => $accountCode->code . ($spplierId),
            'name' => $request->name,
            'email' => $request->email,
            'contact' => $request->contact,
            //'parent_account_id' => $request->parent_account_id,
            'currency_id' => $request->currency_id,
            'prefix' => $request->prefix,
            'tax_id' => $request->tax_id ?? null,
            'shipping_method' => $request->shipping_method ?? null,
        ];
        $supplier->update($data);
        $supplier->account()->update(['name' => $supplier->name, 'opening_balance'=>$request->opening_balance??$supplier->account->opening_balance]);
        /*         if ($request->has('files')) {
                    if($this->supplier->getMedia('supplier_attachments')){
                        $this->supplier->clearMediaCollection('supplier_attachments');
                    }
                    $this->supplier->addMultipleMediaFromRequest(['files'])->each(function ($file) {

                        $file->storingConversionsOnDisk('upload_supplier')->toMediaCollection('supplier_attachments','upload_supplier');
                    });
                } */
        return true;

    }

    public function delete(string $id): bool
    {
        $supplier = $this->supplier->findOrFail($id);

        if ($supplier->account->journalEntryDetail()->exists()) {
            throw new \Exception("Cannot delete supplier with related journal entries.");
        }

        $criteria = ProductCodeCriteria::first();
        if ($criteria && $criteria->supplier == 1) {
            throw new \Exception("Can not delete, it used in product code criteria");
        }

        $supplier->delete();

        return true;
    }

    public function addAttachments(string $id, $request): bool
    {
        $supplier = $this->supplier::findOrFail($id);

        if ($request->has('files')) {
            if ($supplier->getMedia('supplier_attachments')) {
                $supplier->clearMediaCollection('supplier_attachments');
            }
            $supplier->addMultipleMediaFromRequest(['files'])->each(function ($file) {

                $file->storingConversionsOnDisk('upload_supplier')->toMediaCollection('supplier_attachments', 'upload_supplier');
            });
        }

        return true;

    }

}
