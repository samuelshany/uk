<?php

use App\Domains\ProductCodeCriteria\Controllers\ProductCodeCriteriaController;

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
Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'product-code-criteria'], function () {
    Route::get('/', [ProductCodeCriteriaController::class, 'list']);
    Route::get('/{id}', [ProductCodeCriteriaController::class, 'findById']);
    Route::delete('/{id}', [ProductCodeCriteriaController::class, 'delete']);
    Route::post('/create', [ProductCodeCriteriaController::class, 'create']);
    Route::post('/update/{id}', [ProductCodeCriteriaController::class, 'update']);
});
