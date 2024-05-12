<?php

use App\Domains\SalesInvoice\Controllers\SalesInvoiceController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'sales-invoice'], function () {
    Route::get('/', [SalesInvoiceController::class, 'list']);
    Route::get('/{id}', [SalesInvoiceController::class, 'findById']);
    Route::get('/{id}/payments', [SalesInvoiceController::class, 'invoicePayments']);
    Route::get('/details/{id}', [SalesInvoiceController::class, 'listInvoiceDetails']);
    Route::get('/dates/{id}', [SalesInvoiceController::class, 'listInvoiceDates']);
    /* Route::delete('/{id}', [SalesInvoiceController::class, 'delete']); */
    Route::post('/update/{id}', [SalesInvoiceController::class, 'update']);
});
