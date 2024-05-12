<?php

namespace App\Domains\Account\Repositories;

use App\Domains\Account\Interfaces\AccountRepositoryInterface;
use App\Domains\Account\Models\Account;
use App\Domains\Account\Models\ProfitAndLossAccount;
use App\Domains\Customer\Models\Customer;
use App\Domains\Group\Models\Group;
use App\Domains\GroupType\Models\GroupType;
use Exception;
use Illuminate\Support\Facades\DB;

class AccountMySqlRepository implements AccountRepositoryInterface
{

    public function __construct(private Account $account)
    {
    }

    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = $this->account::when(request()->search, function ($q) {
            $q->where('name', 'like', '%' . request()->search . '%')
                ->orWhere('code', 'like', '%' . request()->search . '%');
        })->when(request()->group_id, function ($q) {
            $q->where('group_id', request()->group_id);
        })->when(request()->is_safe, function ($q) {
            $q->where('is_safe', request()->is_safe);
        })->when(request()->creator_id, function ($q) {
            $q->where('creator_id', request()->creator_id);
        })->when(request()->from, function ($q) {
            $q->whereDate('created_at', '>=', request()->from);
        })->when(request()->to, function ($q) {
            $q->whereDate('created_at', '<=', request()->to);
        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['name', 'code', 'created_at', 'updated_at', 'opening_balance', 'account_type', 'group_id', 'creator_id', 'parent_id'])) {
                if (request()->sort_by == 'group_id') {
                    $q->whereHas('group', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } elseif (request()->sort_by == 'creator_id') {
                    $q->whereHas('creator', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } elseif (request()->sort_by == 'parent_id') {
                    $q->whereHas('parent', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } else {

                    $q->orderBy(request()->sort_by, request()->sort_type);
                }
            }
            return $q;
        })->orderBy('code', 'asc')
            ->with(['group', 'creator', 'parent']);
        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }

    public function findById(string $id): Account
    {
        return $this->account::findOrFail($id);
    }

    public function store($request): bool
    {
        $account = null;
        if ($request->is_parent == 1) {

            if ($request->group_id) {
                $account = $this->account::create($request->all() + [
                    'code' => $this->generateParentCode($request->group_id),
                    'creator_id' => auth()->user()->id,
                ]);
            } elseif ($request->parent_id) {
                $parent = $this->account::find($request->parent_id);
                $account = $this->account::create($request->all() + [
                    'code' => $this->generateParentCode($request->parent_id),
                    'group_id' => $parent->group_id,
                    'creator_id' => auth()->user()->id,
                ]);
            }
        } else {
            if ($request->group_id) {
                $account = $this->account::create($request->all() + [
                    'code' => $this->generateCode($request->group_id),
                    'creator_id' => auth()->user()->id,
                ]);
            } elseif ($request->parent_id) {
                $parent = $this->account::find($request->parent_id);
                $account = $this->account::create($request->all() + [
                    'code' => $this->generateCode($request->parent_id),
                    'group_id' => $parent->group_id,
                    'creator_id' => auth()->user()->id,
                ]);
            } elseif ($request->is_safe == 1) {
                $account_parent = $this->account::where('code', $request->parent_code)->first();
                $groups_parent = Group::where('code', $request->parent_code)->first();
                $value_id = $groups_parent == null ? $account_parent->id : $groups_parent->id;
                $account = $this->account::create($request->all() + [
                    'code' => $this->generateCodeSafeAccount($value_id, $groups_parent == null ? false : true),
                    'group_id' => $groups_parent == null ? $account_parent->group_id : $groups_parent->id,
                    'parent_id' => $account_parent == null ? null : $account_parent->id,
                    'is_safe' => $request->is_safe ?? 0,
                    'creator_id' => auth()->user()->id,
                ]);
            }
        }
        
        $this->updateFromJournalEntry($account);

        return true;
    }
    public function createProfitAndLossAccounts($request): bool
    {


        $accountParentProfitAndLoss = $this->account::findOrFail($request->profit_loss_parent_id);
        $accountParentRetainedEarning = $this->account::findOrFail($request->retained_earning_parent_id);

        if (
            $accountParentProfitAndLoss->group->group_type->code != 4 &&
            $accountParentProfitAndLoss->group->group_type->code != 5 &&
            $accountParentRetainedEarning->group->group_type->code != 4 &&
            $accountParentRetainedEarning->group->group_type->code != 5
        ) {
            return false;
        }

        try {
            DB::beginTransaction();

            $profitAndLossAccount = $this->account::create([
                'name' => $request->profit_loss,
                'code' => $this->generateCode($request->profit_loss_parent_id),
                'opening_balance' => 0,
                'is_parent' => 0,
                'parent_id' => $request->profit_loss_parent_id,
                'group_id' => $accountParentProfitAndLoss->group_id,
                'account_type' => 'both',
                'old_code' => $request->old_code ?? null,
                'creator_id' => auth()->user()->id,
            ]);

            ProfitAndLossAccount::create([
                'name' => $request->profit_loss,
                'code' => $profitAndLossAccount->code,
                'account_id' => $profitAndLossAccount->id,
                'parent_account_id' => $request->profit_loss_parent_id,
                'account_for' => 'profit_loss',
            ]);

            $retainedEarningAccount = $this->account::create([
                'name' => $request->retained_earning,
                'code' => $this->generateCode($request->retained_earning_parent_id),
                'opening_balance' => 0,
                'is_parent' => 0,
                'parent_id' => $request->retained_earning_parent_id,
                'group_id' => $accountParentRetainedEarning->group_id,
                'account_type' => 'both',
                'old_code' => $request->old_code ?? null,
                'creator_id' => auth()->user()->id,
            ]);

            ProfitAndLossAccount::create([
                'name' => $request->retained_earning,
                'code' => $retainedEarningAccount->code,
                'account_id' => $retainedEarningAccount->id,
                'parent_account_id' => $request->retained_earning_parent_id,
                'account_for' => 'retained_earning',
            ]);

            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function updateProfitAndLossAccounts(string $id, $request): bool
    {

        $profitAndLossAccount = ProfitAndLossAccount::find($id);
        if ($profitAndLossAccount->account_for == 'profit_loss') {
            $account = $this->account::find($profitAndLossAccount->account_id);
            $account->update([
                'name' => $request->profit_loss,
                'code' => $request->profit_loss_parent_id == $profitAndLossAccount->parent_account_id ? $profitAndLossAccount->code : $this->generateCode($request->profit_loss_parent_id),
                'parent_id' => $request->profit_loss_parent_id,
                'group_id' => $account->group_id,
            ]);


            $profitAndLossAccount->update([
                'name' => $request->profit_loss,
                'code' => $account->code,
                'account_id' => $account->id,
                'parent_account_id' => $request->profit_loss_parent_id,
            ]);
        } else if ($profitAndLossAccount->account_for == 'retained_earning') {

            $account = $this->account::findOrFail($profitAndLossAccount->account_id);
            $account->update([
                'name' => $request->retained_earning,
                'code' => $request->retained_earning_parent_id == $profitAndLossAccount->parent_account_id ? $profitAndLossAccount->code : $this->generateCode($request->retained_earning_parent_id),
                'parent_id' => $request->retained_earning_parent_id,
                'group_id' => $account->group_id
            ]);

            $profitAndLossAccount->update([
                'name' => $request->retained_earning,
                'code' => $account->code,
                'account_id' => $account->id,
                'parent_account_id' => $request->retained_earning_parent_id,
            ]);
        }
        return true;
    }

    public function update(string $id, $request): bool
    {
        $account = $this->account::findOrFail($id);

        if($request->parent_code){
            if($account->journalEntryDetail&&count($account->journalEntryDetail)>0){
                return false;
            }

            $same_account =false;
            if($account->parent&&$request->parent_code == $account->parent->code){
                $same_account = true;
            }else if($request->parent_code == $account->group->code&&!$request->parent_id){
                $same_account = true;
            }
            
            if(!$same_account){
                $account_parent = $this->account::where('code', $request->parent_code)->first();
                $groups_parent = Group::where('code', $request->parent_code)->first();
                $account->update($request->all());
                if($account_parent){

                    $account->update([
                        'code' => $this->generateCodeSafeAccount($account_parent->id,false),
                        'group_id' => $account_parent->group_id,
                        'parent_id' =>  $account_parent->id,
                    ]);
                }else if($groups_parent){
                    $account->update([
                        'code' => $this->generateCodeSafeAccount($groups_parent->id,true),
                        'group_id' => $groups_parent->id,
                        'parent_id' =>  null,
                    ]);

                }
            }else{
               $account->update($request->all() );
            }
          return true;
        }
        
        if($account->parent_id!=$request->parent_id||$account->group_id!=$request->group_id){
            if($account->children&&count($account->children)>0){
                return false;
            }elseif($account->journalEntryDetail&&count($account->journalEntryDetail)>0){
                return false;
            }
        }

        if ($request->group_id) {
            if($request->group_id==$account->group_id&&$account->parent){
                if($account->children&&count($account->children)>0){
                    return false;
                }
                $account->update($request->all() + [
                    'parent_id' => null,
                    'code' => $this->generateCode($request->group_id),
                ]);
            }else
            if($request->group_id!=$account->group_id){
                $account->update($request->all() + [
                    'parent_id' => null,
                    'code' => $this->generateCode($request->group_id),
                ]);
            }else{
                $account->update($request->all() );
            }
        } elseif ($request->parent_id) {
            $parent = $this->account::find($request->parent_id);
            if($request->parent_id!=$account->parent_id&&$parent->group_id!=$account->group_id){
            
                $account->update($request->all() + [
                    'parent_id' => $request->parent_id,
                    'group_id' => $parent->group_id,
                    'code' => $this->generateCode($request->parent_id),
                ]);
            }else if($request->parent_id!=$account->parent_id){
                $account->update($request->all() + [
                    'parent_id' => $request->parent_id,
                    'code' => $this->generateCode($request->parent_id),
                ]);
                
            }else{
                
                $account->update($request->all());
            }
        }
       

        $this->updateFromJournalEntry($account);
        return true;
    }


    public function storeFromBankAccount($parent_account_id, $parent_expenses_account_id, $name, $opening_balance)
    {
        $parent = $this->account::find($parent_account_id);

        $account = $this->account::create([
            'code' => $this->generateCode($parent_account_id, true),
            'group_id' => $parent->group_id,
            'name' => $name,
            'parent_id' => $parent_account_id,
            'is_parent' => 0,
            'account_type' => $parent->account_type,
            'creator_id' => auth()->user()->id,
        ]);


        $parent_expenses = $this->account::find($parent_expenses_account_id);

        $expenses_account = $this->account::create([
            'code' => $this->generateCode($parent_expenses_account_id, true),
            'group_id' => $parent_expenses->group_id,
            'name' => 'expenses ' . $name,
            'parent_id' => $parent_expenses_account_id,
            'is_parent' => 0,
            'account_type' => $parent_expenses->account_type,
            'creator_id' => auth()->user()->id,
        ]);

        return [
            'account_id' => $account->id,
            'account_code' => $account->code,
            'expenses_account_id' => $expenses_account->id,
            'expenses_account_code' => $expenses_account->code,
        ];
    }

    public function storeFromProject($parent_account_id, $name,$debit)
    {
        $parent = $this->account::find($parent_account_id);

        $account = $this->account::create([
            'code' => $this->generateCode($parent_account_id),
            'group_id' => $parent->group_id,
            'name' => $name,
            'parent_id' => $parent_account_id,
            'is_parent' => 0,
            'account_type' => $parent->account_type,
            'creator_id' => auth()->user()->id,
        ]);


        return [
            'account_id' => $account->id,
            'account_code' => $account->code
        ];
    }
    public function storeFromImport($data)
    {
        $parent = $this->account::where('code',$data['parent_account_code'])->first();

        $account = $this->account::create([
            'code' => $this->generateCode($parent->id),
            'group_id' => $parent->group_id,
            'name' => $data['name'],
            'parent_id' => $parent->id,
            'is_parent' => 0,
            'account_type' => $parent->account_type,
            'creator_id' => auth()->user()->id,
        ]);


        return [
            'account_id' => $account->id
        ];
    }
    public function storeFromFixedAsset($parent_account_id, $name, $acquisition_value)
    {
        $parent = $this->account::find($parent_account_id);

        $account = $this->account::create([
            'code' => $this->generateCode($parent_account_id),
            'group_id' => $parent->group_id,
            'name' => $name,
            'parent_id' => $parent_account_id,
            'is_parent' => 0,
            'opening_balance' => $acquisition_value,
            'account_type' => $parent->account_type,
            'creator_id' => auth()->user()->id,
        ]);


        return [
            'account_id' => $account->id,
            'account_code' => $account->code
        ];
    }
    public function storeFromSupplier($parent_account_id, $name, $opening_balance)
    {
        $parent = Account::find($parent_account_id);

        $account = $this->account::create([
            'code' => $this->generateCode($parent_account_id),
            'group_id' => $parent->group_id,
            'name' => $name,
            'parent_id' => $parent_account_id,
            'is_parent' => 0,
            'account_type' => $parent->account_type,
            'creator_id' => auth()->user()->id,
        ]);

        return [
            'account_id' => $account->id,
            'account_code' => $account->code
        ];
    }
    public function storeFromCustomer($parent_account_id, $name, $opening_balance)
    {
        $parent = Account::find($parent_account_id);
        $code = $this->generateCodeCustomer($parent_account_id);
        $account = $this->account::create([
            'code' => $code[0],
            'group_id' => $parent->group_id,
            'name' => $name,
            'parent_id' => $parent_account_id,
            'is_parent' => 0,
            'account_type' => $parent->account_type,
            'creator_id' => auth()->user()->id,
        ]);

        return [
            'account_id' => $account->id,
            'account_code' => $account->code,
            'customer_number' => $code[1]
        ];
    }

    public function storeFromProjectManagement($parent_account_id, $name)
    {
        $parent = Account::find($parent_account_id);

        $account = $this->account::create([
            'code' => $this->generateCode($parent_account_id),
            'group_id' => $parent->group_id,
            'name' => $name,
            'parent_id' => $parent_account_id,
            'is_parent' => 0,
            'account_type' => 'both',
            'creator_id' => auth()->user()->id,
        ]);

        return [
            'account_id' => $account->id,
            'account_code' => $account->code
        ];
    }



    public function delete(string $id): bool
    {
        $account = $this->account::findOrFail($id);
        if ($account->is_parent == 1) {
            if ($account->children->count() > 0) {
                return false;
            } else {
                $account->delete();
                return true;
            }
        } else {
            if ($account->journalEntryDetail->isEmpty()) {
                $account->delete();
                return true;
            } else {
                return false;
            }
        }
    }

    public function bulkDelete(): bool
    {
        $accounts = $this->account::whereIn('id', request()->ids ?? [])->get();

        if ($accounts->pluck('journalEntryDetail')->flatten()->isEmpty()) {
            $accounts->delete();
            return true;
        } else {
            return false;
        }
    }

    public function parents()
    {
        return $this->account::where('is_parent', 1)->orderBy('code', 'asc')->get();
    }
    public function accounts()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = $this->account::whereRaw('LENGTH(code) = ?', [5])->orderBy('code', 'asc')->when(request()->search, function ($q) {
            $q->where('name', 'like', '%' . request()->search . '%')
                ->orWhere('code', 'like', '%' . request()->search . '%');
        })->when(request()->group_id, function ($q) {
            $q->where('group_id', request()->group_id);
        })->when(request()->creator_id, function ($q) {
            $q->where('creator_id', request()->creator_id);
        })->when(request()->from, function ($q) {
            $q->whereDate('created_at', '>=', request()->from);
        })->when(request()->to, function ($q) {
            $q->whereDate('created_at', '<=', request()->to);
        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['name', 'code', 'created_at', 'updated_at', 'opening_balance', 'account_type', 'group_id', 'creator_id', 'parent_id'])) {
                if (request()->sort_by == 'group_id') {
                    $q->whereHas('group', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } elseif (request()->sort_by == 'creator_id') {
                    $q->whereHas('creator', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } elseif (request()->sort_by == 'parent_id') {
                    $q->whereHas('parent', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } else {

                    $q->orderBy(request()->sort_by, request()->sort_type);
                }
            }
            return $q;
        })
            ->with(['group', 'creator', 'parent']);

        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }
    public function subAccounts()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = $this->account::where('parent_id', '!=', null)->when(request()->search, function ($q) {
            $q->where('name', 'like', '%' . request()->search . '%')
                ->orWhere('code', 'like', '%' . request()->search . '%');
        })->when(request()->group_id, function ($q) {
            $q->where('group_id', request()->group_id);
        })->when(request()->creator_id, function ($q) {
            $q->where('creator_id', request()->creator_id);
        })->when(request()->from, function ($q) {
            $q->whereDate('created_at', '>=', request()->from);
        })->when(request()->to, function ($q) {
            $q->whereDate('created_at', '<=', request()->to);
        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['name', 'code', 'created_at', 'updated_at', 'opening_balance', 'account_type', 'group_id', 'creator_id', 'parent_id'])) {
                if (request()->sort_by == 'group_id') {
                    $q->whereHas('group', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } elseif (request()->sort_by == 'creator_id') {
                    $q->whereHas('creator', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } elseif (request()->sort_by == 'parent_id') {
                    $q->whereHas('parent', function ($q) {
                        $q->orderBy('name', request()->sort_type);
                    });
                } else {

                    $q->orderBy(request()->sort_by, request()->sort_type);
                }
            }
            return $q;
        })->orderBy('code', 'asc')
            ->with(['group', 'creator', 'parent']);


        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }

    public function groups_ParentAccounts()
    {
        $groups = Group::all();
        $parents = $this->parents();
        return ['groups' => $groups, 'parents' => $parents];
    }
    public function GroupAndParentAccounts()
    {
        $parentAccounts = $this->parents();
        $groups = Group::all();
        $data =$groups->mergeRecursive($parentAccounts); 
        return $data;
    }

    public function profitAndlossAccounts()
    {
        return ProfitAndLossAccount::all();
    }
    public function parentAccountsForProfitAndLoss()
    {
        $accountNumberFour = GroupType::find(4);
        $accountNumberFive = GroupType::find(5);
        return $this->account::where('is_parent', 1)->where(function ($query) use ($accountNumberFour, $accountNumberFive) {
            $query->where('code', 'like', $accountNumberFour->code . '%')->orWhere('code', 'like', $accountNumberFive->code . '%');
        })->orderBy('code', 'asc')->get();
    }
    public function parentAssetsAccounts()
    {
        $accountAssets = GroupType::find(1);
        return $this->account::where('is_parent', 1)->where(function ($query) use ($accountAssets) {
            $query->where('code', 'like', $accountAssets->code . '%');
        })->orderBy('code', 'asc')->get();
    }
    public function parentExpensesAccounts()
    {
        $accountExpenses = GroupType::find(5);
        return $this->account::where('is_parent', 1)->where(function ($query) use ($accountExpenses) {
            $query->where('code', 'like', $accountExpenses->code . '%');
        })->orderBy('code', 'asc')->get();
    }
    public function parentRevenueAccounts()
    {
        $accountRevenue= GroupType::find(4);
        return $this->account::where('is_parent', 1)->where(function ($query) use ($accountRevenue) {
            $query->where('code', 'like', $accountRevenue->code . '%');
        })->orderBy('code', 'asc')->get();
    }

    public function notParents()
    {
        return $this->account::where('is_parent', 0)->when(request()->has('parent_id'), function ($q) {
            $q->where('parent_id', request()->parent_id);
        })->orderBy('code', 'asc')->get();
    }
    private function generateCode(int $parentId, $isBankAccount = false, $isParentCodeGroup = false)
    {
        if (request()->group_id || $isParentCodeGroup == true) {
            $group = Group::findOrFail($parentId);

            $lastChild = Account::where('group_id', $parentId)
                ->where('is_parent', 1)
                ->orderBy('id', 'desc')
                ->first();

            $lastAccountCode = $lastChild ? ($lastChild->code + 1) : $group->code . '01';
            $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT);
        } else {
            $parentAccount = $this->account::findOrFail($parentId);
            $lastChild = Account::where('parent_id', $parentAccount->id)
                ->orderBy('id', 'desc')
                ->first();

            $lastAccountCode = $lastChild ? ($lastChild->code + 1) : $parentAccount->code . '001';
            $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT);
        }

        return $code;
    }

    private function generateCodeCustomer(int $parentId)
    {

        $parentAccount = $this->account::findOrFail($parentId);
        $lastChild = Customer::orderBy('id', 'desc')->first();


        $customer_number = $lastChild && $lastChild->customer_number ? '0' . ($lastChild->customer_number + 1) : '01';
        $lastAccountCode = $lastChild ? $parentAccount->code . $customer_number : $parentAccount->code . $customer_number;
        $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT);

        return [$code, $customer_number];
    }

    public function generateCodeSafeAccount(int $parentId,$group ){
        if($group){
            $group = Group::find($parentId);
            $lastParentAccount = Account::where('code', 'like', $group->code . '%')
                ->whereRaw('LENGTH(code) = ?', [5])
                ->orderBy('code', 'desc')
                ->first();
            $lastAccountCode = $lastParentAccount ? ($lastParentAccount->code + 1) : $group->code . '01';
            $code = str_pad($lastAccountCode, 5, '0', STR_PAD_LEFT);
        }else{
        
            $parentAccount = $this->account::findOrFail($parentId);

            $lastChild = Account::where('parent_id', $parentAccount->id)
                ->orderBy('code', 'desc')
                ->first();

            $lastAccountCode = $lastChild ? ($lastChild->code + 1) : $parentAccount->code . '001';
            $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT);
        }

        return $code;

    }

    private function generateParentCode(int $parentId)
    {
        if (request()->group_id) {
            $group = Group::find($parentId);
            $lastParentAccount = Account::where('code', 'like', $group->code . '%')
                // ->where('is_parent', 1)
                ->whereRaw('LENGTH(code) = ?', [5])
                ->orderBy('id', 'desc')
                ->first();

            $lastAccountCode = $lastParentAccount ? ($lastParentAccount->code + 1) : $group->code . '01';
            $code = str_pad($lastAccountCode, 5, '0', STR_PAD_LEFT);
        } elseif (request()->parent_id) {
            $parentAccount = $this->account::findOrFail(request()->parent_id);

            $lastChild = Account::where('parent_id', $parentAccount->id)
                // ->where('is_parent', 1)
                ->orderBy('id', 'desc')
                ->first();

            $lastAccountCode = $lastChild ? ($lastChild->code + 1) : $parentAccount->code . '001';
            $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT);
        }

        return $code;
    }


    public function updateFromJournalEntry($account)
    {
        if ($account->journalEntryDetail) {
            $account->credit_journal_entries = $account->journalEntryDetail->sum('credit');
            $account->debit_journal_entries = $account->journalEntryDetail->sum('debit');
        }

        $total_credit = $account->credit_journal_entries + $account->opening_balance_credit;
        $total_debit = $account->debit_journal_entries + $account->opening_balance_debit;

        $account->total_credit = $total_credit;
        $account->total_debit = $total_debit;
        $account->total_credit_balance = $total_credit > $total_debit ? $total_credit - $total_debit : 0;
        $account->total_debit_balance = $total_debit > $total_credit ? $total_debit - $total_credit : 0;

        $account->save();
    }
}
