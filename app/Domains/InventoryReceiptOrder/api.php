<?php

use App\Domains\InventoryReceiptOrder\Controllers\InventoryReceiptOrderController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'inventory-receipt-order'], function () {
    Route::get('/', [InventoryReceiptOrderController::class, 'list']);
    Route::get('/{id}', [InventoryReceiptOrderController::class, 'findById']);
    Route::get('/details/{id}', [InventoryReceiptOrderController::class, 'listInvoiceDetails']);
    Route::post('/update/{id}', [InventoryReceiptOrderController::class, 'update']);
    Route::post('/confirm/{id}', [InventoryReceiptOrderController::class, 'confirmReceiptOrder']);
    /* Route::delete('/{id}', [InventoryReceiptOrderController::class, 'delete']); */
});
