<?php

use App\Domains\PurchaseInvoice\Controllers\PurchaseInvoiceController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'purchase-invoice'], function () {
    Route::get('/', [PurchaseInvoiceController::class, 'list']);
    Route::get('/{id}', [PurchaseInvoiceController::class, 'findById']);
    Route::get('/{id}/payments', [PurchaseInvoiceController::class, 'invoicePayments']);
    Route::get('/details/{id}', [PurchaseInvoiceController::class, 'listInvoiceDetails']);
    Route::get('/dates/{id}', [PurchaseInvoiceController::class, 'listInvoiceDates']);
    /* Route::delete('/{id}', [PurchaseInvoiceController::class, 'delete']); */
    Route::post('/update/{id}', [PurchaseInvoiceController::class, 'update']);
});
