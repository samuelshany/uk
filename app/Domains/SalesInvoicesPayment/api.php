<?php

use App\Domains\SalesInvoicesPayment\Controllers\SalesInvoicesPaymentController;
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
Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'sales-invoice-payments'], function () {
    Route::get('/', [SalesInvoicesPaymentController::class, 'list']);
    Route::get('/{id}', [SalesInvoicesPaymentController::class, 'findById']);
    Route::post('/update/{id}', [SalesInvoicesPaymentController::class, 'update']);
    Route::post('/collect/{id}', [SalesInvoicesPaymentController::class, 'collectPayment']);

});
