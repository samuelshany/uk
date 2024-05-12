<?php

namespace App\Domains\Account\Services;


use App\Domains\Account\Imports\AccountsImport;
use App\Domains\Account\Exports\AccountsExport;
use App\Domains\Account\Exports\ParentAccountsExport;
use App\Domains\Account\Exports\SubAccountsExport;
use App\Domains\Account\Interfaces\AccountRepositoryInterface;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class AccountService
{
    public function __construct(private AccountRepositoryInterface $accountRepository)
    {
    }

    public function list()
    {
        return $this->accountRepository->list();
    }
    public function parents()
    {
        return $this->accountRepository->parents();
    }
    public function GroupAndParentAccounts()
    {
        return $this->accountRepository->GroupAndParentAccounts();
    }
    public function accounts()
    {
        return $this->accountRepository->accounts();
    }
    public function subAccounts()
    {
        return $this->accountRepository->subAccounts();
    }
    public function groups_ParentAccounts()
    {
        return $this->accountRepository->groups_ParentAccounts();
    }
    public function profitAndlossAccounts()
    {
        return $this->accountRepository->profitAndlossAccounts();
    }
    public function parentAccountsForProfitAndLoss()
    {
        return $this->accountRepository->parentAccountsForProfitAndLoss();
    }
    public function parentAssetsAccounts()
    {
        return $this->accountRepository->parentAssetsAccounts();
    }
    public function parentExpensesAccounts()
    {
        return $this->accountRepository->parentExpensesAccounts();
    }
    public function parentRevenueAccounts()
    {
        return $this->accountRepository->parentRevenueAccounts();
    }
    public function notParents()
    {
        return $this->accountRepository->notParents();
    }
    public function findById($id)
    {
        return $this->accountRepository->findById($id);
    }

    public function delete($id)
    {
        return $this->accountRepository->delete($id);
    }
    public function bulkDelete()
    {
        return $this->accountRepository->bulkDelete();
    }

    public function create($request)
    {

        return $this->accountRepository->store($request);
    }
    public function CreateProfitAndLossAccounts($request)
    {

        return $this->accountRepository->createProfitAndLossAccounts($request);
    }
    public function updateProfitAndLossAccounts($id,$request)
    {

        return $this->accountRepository->updateProfitAndLossAccounts($id,$request);
    }

    public function update($id,$request)
    {

        return $this->accountRepository->update($id,$request);
    }

    public function exportChart()
    {
        $filename = 'chart-accounts.xlsx';
        $path = 'tenant'.tenant('id').'/exports/chart_accounts/' . $filename;
        if(Storage::exists('public/'.$path)){
            unlink('public/'.$path);
        }

        Excel::store(new AccountsExport(), $path, 'export');
        /* return Excel::download(new AccountsExport(), $filename); */

/*         if(tenant('id')){
            return response()->json([
                'file_path' =>  url('storage/' . $path),
            ]);
        } */

        return response()->json([
            'file_path' => asset($path)
        ]);
    }
    public function exportAcounts()
    {
        /* $filename = time() . '-accounts.xlsx'; */
        $filename = 'accounts.xlsx';
        $path = 'tenant'.tenant('id').'/exports/account_parent/' . $filename;
        if(Storage::exists('public/'.$path)){
            unlink('public/'.$path);
        }

        Excel::store(new ParentAccountsExport(), $path, 'export');
        /* return Excel::download(new ParentAccountsExport(), $filename); */

/*         if(tenant('id')){
            return response()->json([
                'file_path' =>  url('storage/' . $path),
            ]);
        } */

        return response()->json([
            'file_path' => asset($path)
        ]);
    }
    public function subExportAccounts()
    {
        /* $filename = time() . '-sub-accounts.xlsx'; */
        $filename = 'sub-accounts.xlsx';
        $path = 'tenant'.tenant('id').'/exports/sub_account/' . $filename;
        if(Storage::exists('public/'.$path)){
            unlink('public/'.$path);
        }

        Excel::store(new SubAccountsExport(), $path, 'export');
        /* return Excel::download(new SubAccountsExport(), $filename); */

  /*       if(tenant('id')){
            return response()->json([
                'file_path' =>  url('storage/' . $path),
            ]);
        } */

        return response()->json([
            'file_path' => asset($path)
        ]);
    }


    public function import()
    {
        $import = new AccountsImport();
        Excel::import($import, request()->file);
        return $import;
    }

}
