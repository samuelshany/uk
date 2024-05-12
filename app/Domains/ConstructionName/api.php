<?php

use App\Domains\ConstructionName\Controllers\ConstructionNameController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'construction-name'], function () {
    Route::get('/', [ConstructionNameController::class, 'list']);
    Route::get('/{id}', [ConstructionNameController::class, 'findById']);
    Route::post('/create', [ConstructionNameController::class, 'store']);
    Route::delete('/{id}', [ConstructionNameController::class, 'delete']);
    Route::post('/update/{id}', [ConstructionNameController::class, 'update']);
});
