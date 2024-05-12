<?php

use App\Domains\InventoryDeliveryOrder\Controllers\InventoryDeliveryOrderController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'inventory-delivery-order'], function () {
    Route::get('/', [InventoryDeliveryOrderController::class, 'list']);
    Route::get('/{id}', [InventoryDeliveryOrderController::class, 'findById']);
    Route::get('/details/{id}', [InventoryDeliveryOrderController::class, 'listInvoiceDetails']);
    Route::post('/update/{id}', [InventoryDeliveryOrderController::class, 'update']);
    Route::post('/confirm/{id}', [InventoryDeliveryOrderController::class, 'confirmReceiptOrder']);
    /* Route::delete('/{id}', [InventoryDeliveryOrderController::class, 'delete']); */
});
