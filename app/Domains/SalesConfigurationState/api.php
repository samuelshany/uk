<?php

use App\Domains\SalesConfigurationState\Controllers\SalesConfigurationStateController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'sales-configuration-state'], function () {
    Route::get('/', [SalesConfigurationStateController::class, 'list']);
    Route::get('/{id}', [SalesConfigurationStateController::class, 'findById']);
    Route::post('/create', [SalesConfigurationStateController::class, 'store']);
    Route::post('/update/{id}', [SalesConfigurationStateController::class, 'update']);
    Route::delete('/{id}', [SalesConfigurationStateController::class, 'delete']);
});
