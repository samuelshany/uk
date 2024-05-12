<?php

use App\Domains\FieldType\Controllers\FieldTypeController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'field-type'], function () {
    Route::get('/', [FieldTypeController::class, 'list']);
    Route::get('/{id}', [FieldTypeController::class, 'findById']);
    Route::post('/create', [FieldTypeController::class, 'store']);
    Route::delete('/{id}', [FieldTypeController::class, 'delete']);
    Route::post('/update/{id}', [FieldTypeController::class, 'update']);
});
