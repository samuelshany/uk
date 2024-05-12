<?php

use App\Domains\WorkType\Controllers\WorkTypeController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'work-type'], function () {
    Route::get('/', [WorkTypeController::class, 'list']);
    Route::get('/{id}', [WorkTypeController::class, 'findById']);
    Route::post('/create', [WorkTypeController::class, 'store']);
    Route::delete('/{id}', [WorkTypeController::class, 'delete']);
    Route::post('/update/{id}', [WorkTypeController::class, 'update']);
});
