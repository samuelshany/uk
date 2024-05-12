<?php

use App\Domains\PurchaseInvoicesPayment\Controllers\PurchaseInvoicesPaymentController;
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
Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'purchase-invoice-payments'], function () {
    Route::get('/', [PurchaseInvoicesPaymentController::class, 'list']);
    Route::get('/{id}', [PurchaseInvoicesPaymentController::class, 'findById']);
    Route::post('/update/{id}', [PurchaseInvoicesPaymentController::class, 'update']);
    Route::post('/collect/{id}', [PurchaseInvoicesPaymentController::class, 'collectPayment']);

});
