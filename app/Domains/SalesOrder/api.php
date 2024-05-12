<?php

use App\Domains\SalesOrder\Controllers\SalesOrderController;
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
Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'sales-order'], function () {
    Route::get('/', [SalesOrderController::class, 'list']);
    Route::get('/{id}', [SalesOrderController::class, 'findById']);
    Route::delete('/{id}', [SalesOrderController::class, 'delete']);
    Route::post('/create', [SalesOrderController::class, 'create']);
    Route::post('/update/{id}', [SalesOrderController::class, 'update']);
    Route::post('/approved/{id}', [SalesOrderController::class, 'approve']);
    Route::post('/canceled/{id}', [SalesOrderController::class, 'cancel']);
});
