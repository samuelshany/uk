<?php

namespace App\Domains\Account\Controllers;


use App\Domains\Account\Models\Account;
use App\Domains\Account\Models\EnumPermissionAccount;
use App\Domains\Account\Models\EnumPermissionExportAccount;
use App\Domains\Account\Models\EnumPermissionProfitAndLossAccount;
use App\Domains\Account\Models\ProfitAndLossAccount;
use App\Domains\Account\Request\ImportAccountRequest;
use App\Domains\Account\Request\ListAccountRequest;
use App\Domains\Account\Request\StoreAccountRequest;
use App\Domains\Account\Request\StoreProfitAndLossAccountRequest;
use App\Domains\Account\Request\UpdateAccountRequest;
use App\Domains\Account\Request\UpdateProfitAndLossAccountRequest;
use App\Domains\Account\Resources\AccountParentsResource;
use App\Domains\Account\Resources\AccountResource;
use App\Domains\Account\Resources\GroupAccountParentsResource;
use App\Domains\Account\Resources\ProfitAndLossResource;
use App\Domains\Account\Resources\SubAccountsResource;
use App\Domains\Account\Services\AccountService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function __construct(private AccountService $accountService)
    {
    }

    public function list(ListAccountRequest $request)
    {

        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return AccountResource::collection($this->accountService->list());
    }
    public function parents()
    {

        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return AccountParentsResource::collection($this->accountService->parents());
    }
    public function accounts()
    {

        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return AccountResource::collection($this->accountService->accounts());
    }
    public function subAccounts()
    {

        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return SubAccountsResource::collection($this->accountService->subAccounts());
    }
    public function groups_ParentAccounts()
    {
        // abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        return new GroupAccountParentsResource($this->accountService->groups_ParentAccounts());
    }
    public function notParents()
    {

       // abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return AccountResource::collection($this->accountService->notParents());
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::delete_account->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $delete = $this->accountService->delete($id);

        if ($delete == 1) {
            return response()->json([
                'message' => __('Deleted Successfully'),
                'status' => true,
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'message' => __('Cant Delete this Account'),
                'status' => false,
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function bulkDelete()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::delete_account->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $delete = $this->accountService->bulkDelete();

        if ($delete == 1) {
            return response()->json([
                'message' => __('Deleted Successfully'),
                'status' => true,
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'message' => __('Cant Delete this Account'),
                'status' => false,
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

    }

    public function findById($id)
    {
       // abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AccountResource($this->accountService->findById($id));
    }
    public function GroupAndParentAccounts()
    {
       // abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return  AccountParentsResource::collection($this->accountService->GroupAndParentAccounts());
    }

    public function create(StoreAccountRequest $request)
    {

        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::create_account->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->accountService->create($request);
        return response()->json([
            'message' => __('Created Successfully'),
            'status' => true,
        ], 200);
    }

    //create a new account for profit and loss accounts
    public function createProfitAndLossAccounts(StoreProfitAndLossAccountRequest $request)
    {

        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProfitAndLossAccount::create_profit_and_loss_account->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $acounts = ProfitAndLossAccount::count();
        if ($acounts > 0) {
            return response()->json([
                "message" => "Accounts in profit and loss Are created berfor",
                "status" => false
            ], 422);
        }

        $error = $this->accountService->createProfitAndLossAccounts($request);
        if (!$error) {
            return response()->json([
                "message" => "this parent account not in group type Revenue or Expenses",
                "status" => false
            ], 422);
        }


        return response()->json([
            'message' => __('Created Successfully'),
            'status' => true,
        ], 200);
    }
    public function updateProfitAndLossAccounts($id, UpdateProfitAndLossAccountRequest $request)
    {

        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProfitAndLossAccount::edit_profit_and_loss_account->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $acounts = ProfitAndLossAccount::where('total_amount', '>', 0)->get();
        if (!$acounts) {
            return response()->json([
                "message" => "Acaunts have transactions. Can't update",
                "status" => false
            ], 422);
        }

        $error = $this->accountService->updateProfitAndLossAccounts($id, $request);
        if (!$error) {
            return response()->json([
                "message" => "this parent account not in group type Revenue or Expenses",
                "status" => false
            ], 422);
        }


        return response()->json([
            'message' => __('Updated Successfully'),
            'status' => true,
        ], 200);
    }


    //return profit and loss accounts
    public function profitAndlossAccounts()
    {

        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProfitAndLossAccount::view_profit_and_loss_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProfitAndLossResource::collection($this->accountService->profitAndlossAccounts());
    }
    //return parent profit and loss accounts
    public function parentAccountsForProfitAndLoss()
    {

        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return AccountParentsResource::collection($this->accountService->parentAccountsForProfitAndLoss());
    }
    //return parent assets
    public function parentAssetsAccounts()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return AccountParentsResource::collection($this->accountService->parentAssetsAccounts());
    }
    public function parentRevenueAccounts()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return AccountParentsResource::collection($this->accountService->parentRevenueAccounts());
    }

    //return parent expenses
    public function parentExpensesAccounts()
    {

        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::view_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return AccountParentsResource::collection($this->accountService->parentExpensesAccounts());
    }


    public function update($id, UpdateAccountRequest $request)
    {

        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::edit_account->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $success = $this->accountService->update($id, $request);

        if(!$success){

            return response()->json([
                'message' => __("Can't updated"),
                'status' => true,
            ], 402);
        }


        return response()->json([
            'message' => __('Updated Successfully'),
            'status' => true,
        ], 200);
    }

    public function import(ImportAccountRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionAccount::import_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $import = $this->accountService->import();
        if (count($import->importErrors) > 0) {
            return response()->json($import->importErrors)->setStatusCode(400);
        }
        return response()->json([
            'message' => __('messages.imported_successfully'),
            'status' => true,
        ], 200);
    }

    public function exportChart()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionExportAccount::export_charts_of_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $this->accountService->exportChart();
    }
    public function exportAcounts()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionExportAccount::export_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        return $this->accountService->exportAcounts();
    }
    public function subExportAccounts()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionExportAccount::export_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        return $this->accountService->subExportAccounts();
    }
    public function exportExample()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionExportAccount::export_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        /*  $this->accountService->import(); */


        return response()->json([
            'file_path' => url('/account-example-import-level-three.xlsx'),
        ]);
    }
    public function subExportExample()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionExportAccount::export_accounts->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        /* $this->accountService->import(); */


        return response()->json([
            'file_path' => url('/account-example-import-other-level.xlsx'),
        ]);
    }
}
