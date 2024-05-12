<?php

use App\Domains\Unit\Controllers\UnitController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'unit'], function () {
    Route::get('/', [UnitController::class, 'list']);
    Route::get('/{id}', [UnitController::class, 'findById']);
    Route::post('/create', [UnitController::class, 'store']);
    Route::delete('/{id}', [UnitController::class, 'delete']);
    Route::post('/update/{id}', [UnitController::class, 'update']);
});
