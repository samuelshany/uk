<?php

use App\Domains\PurchaseRequest\Controllers\PurchaseRequestController;
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
Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'purchase-request'], function () {
    Route::get('/', [PurchaseRequestController::class, 'list']);
    Route::get('/{id}', [PurchaseRequestController::class, 'findById']);
    Route::delete('/{id}', [PurchaseRequestController::class, 'delete']);
    Route::post('/create', [PurchaseRequestController::class, 'create']);
    Route::post('/update/{id}', [PurchaseRequestController::class, 'update']);
    Route::post('/approved/{id}', [PurchaseRequestController::class, 'approve']);
    Route::post('/canceled/{id}', [PurchaseRequestController::class, 'cancel']);
    Route::post('/notify-suppliers/{id}', [PurchaseRequestController::class, 'notifySuppliers']);
});
