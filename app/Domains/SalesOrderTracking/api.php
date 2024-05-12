<?php

use App\Domains\SalesOrderTracking\Controllers\SalesOrderTrackingController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'sales-order-tracking'], function () {
    Route::get('/', [SalesOrderTrackingController::class, 'list']);
    Route::get('/{id}', [SalesOrderTrackingController::class, 'findById']);
    /* Route::delete('/{id}', [SalesOrderTrackingController::class, 'delete']); */
    Route::post('/update/{id}', [SalesOrderTrackingController::class, 'update']);
});
