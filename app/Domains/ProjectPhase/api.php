<?php

use App\Domains\ProjectPhase\Controllers\ProjectPhaseController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'project-phase'], function () {
    Route::get('/', [ProjectPhaseController::class, 'list']);
    Route::get('/{id}', [ProjectPhaseController::class, 'findById']);
    Route::post('/create', [ProjectPhaseController::class, 'store']);
    Route::delete('/{id}', [ProjectPhaseController::class, 'delete']);
    Route::post('/update/{id}', [ProjectPhaseController::class, 'update']);
});
