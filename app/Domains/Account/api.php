<?php

use App\Domains\Account\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'account'], function () {
    Route::get('/', [\App\Domains\Account\Controllers\AccountController::class, 'list']);
    Route::get('/{id}', [\App\Domains\Account\Controllers\AccountController::class, 'findById']);
    Route::delete('/{id}', [\App\Domains\Account\Controllers\AccountController::class, 'delete']);
    Route::post('bulk-delete', [\App\Domains\Account\Controllers\AccountController::class, 'bulkDelete']);
    Route::post('/create', [\App\Domains\Account\Controllers\AccountController::class, 'create']);
    Route::post('/update/{id}', [\App\Domains\Account\Controllers\AccountController::class, 'update'])->name('account.update');
    Route::post('/import', [\App\Domains\Account\Controllers\AccountController::class, 'import']);

    Route::get('/export/example', [\App\Domains\Account\Controllers\AccountController::class, 'exportExample']);
    Route::get('/export/example/sub', [\App\Domains\Account\Controllers\AccountController::class, 'subExportExample']);

    Route::get('/export/parent', [\App\Domains\Account\Controllers\AccountController::class, 'exportAcounts']);
    Route::get('/export/sub', [\App\Domains\Account\Controllers\AccountController::class, 'subExportAccounts']);
    Route::get('/export/chart', [\App\Domains\Account\Controllers\AccountController::class, 'exportChart']);
    Route::get('/with-group/all', [\App\Domains\Account\Controllers\AccountController::class, 'accounts']);
    Route::get('/sub/all', [\App\Domains\Account\Controllers\AccountController::class, 'subAccounts']);

    //parent accounts assets
    Route::get('/parent/assets', [\App\Domains\Account\Controllers\AccountController::class, 'parentAssetsAccounts']);
    //parent accounts expenses
    Route::get('/parent/expenses', [\App\Domains\Account\Controllers\AccountController::class, 'parentExpensesAccounts']);
    Route::get('/parent/revenue', [\App\Domains\Account\Controllers\AccountController::class, 'parentRevenueAccounts']);
});

// Listing all groups and parent accounts
Route::get('groups-accounts', [\App\Domains\Account\Controllers\AccountController::class, 'GroupAndParentAccounts']);

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'profit-loss'], function () {
    Route::get('/', [\App\Domains\Account\Controllers\AccountController::class, 'profitAndlossAccounts']);
    Route::get('/parent-accounts', [\App\Domains\Account\Controllers\AccountController::class, 'parentAccountsForProfitAndLoss']);
    Route::post('/create', [\App\Domains\Account\Controllers\AccountController::class, 'createProfitAndLossAccounts']);
    Route::post('/update/{id}', [\App\Domains\Account\Controllers\AccountController::class, 'updateProfitAndLossAccounts']);
});


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('parents/accounts', [\App\Domains\Account\Controllers\AccountController::class, 'parents']);
    Route::get('not-parents/accounts', [\App\Domains\Account\Controllers\AccountController::class, 'notParents']);
});
