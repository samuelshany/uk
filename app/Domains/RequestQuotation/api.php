<?php

use App\Domains\RequestQuotation\Controllers\RequestQuotationController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'request-quotation'], function () {
    Route::get('/', [RequestQuotationController::class, 'list']);
    Route::get('/{id}', [RequestQuotationController::class, 'findById']);
    Route::delete('/{id}', [RequestQuotationController::class, 'delete']);
    Route::post('/update/{id}', [RequestQuotationController::class, 'update']);
    Route::post('/cancel/{id}', [RequestQuotationController::class, 'canceledRequestQuotation']);
    Route::post('/approve/{id}', [RequestQuotationController::class, 'approvedRequestQuotation']);
});
