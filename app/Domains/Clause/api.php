<?php

use App\Domains\Clause\Controllers\ClauseController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'clause'], function () {
    Route::get('/', [ClauseController::class, 'list']);
    Route::get('/{id}', [ClauseController::class, 'findById']);
    Route::post('/create', [ClauseController::class, 'store']);
    Route::delete('/{id}', [ClauseController::class, 'delete']);
    Route::post('/update/{id}', [ClauseController::class, 'update']);
});
