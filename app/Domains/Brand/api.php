<?php

use App\Domains\Brand\Controllers\BrandController;
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
Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'brand'], function () {
    Route::get('/', [BrandController::class, 'list']);
    Route::get('/{id}', [BrandController::class, 'findById']);
    Route::delete('/{id}', [BrandController::class, 'delete']);
    Route::post('/create', [BrandController::class, 'create']);
    Route::post('/update/{id}', [BrandController::class, 'update']);
});
