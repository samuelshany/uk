<?php

use App\Domains\DownpaymentOption\Controllers\DownpaymentOptionController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'downpayment-option'], function () {
    Route::get('/', [DownpaymentOptionController::class, 'list']);
    Route::get('/{id}', [DownpaymentOptionController::class, 'findById']);
    Route::post('/create', [DownpaymentOptionController::class, 'store']);
    Route::delete('/{id}', [DownpaymentOptionController::class, 'delete']);
    Route::post('/update/{id}', [DownpaymentOptionController::class, 'update']);
});
