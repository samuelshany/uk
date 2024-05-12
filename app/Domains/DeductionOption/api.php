<?php

use App\Domains\DeductionOption\Controllers\DeductionOptionController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'deduction-option'], function () {
    Route::get('/', [DeductionOptionController::class, 'list']);
    Route::get('/{id}', [DeductionOptionController::class, 'findById']);
    Route::post('/create', [DeductionOptionController::class, 'store']);
    Route::delete('/{id}', [DeductionOptionController::class, 'delete']);
    Route::post('/update/{id}', [DeductionOptionController::class, 'update']);
});
