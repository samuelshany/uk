<?php

use App\Domains\ProjectManagementCategory\Controllers\ProjectManagementCategoryController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'project-management-category'], function () {
    Route::get('/', [ProjectManagementCategoryController::class, 'list']);
    Route::get('/{id}', [ProjectManagementCategoryController::class, 'findById']);
    Route::post('/create', [ProjectManagementCategoryController::class, 'store']);
    Route::delete('/{id}', [ProjectManagementCategoryController::class, 'delete']);
    Route::post('/update/{id}', [ProjectManagementCategoryController::class, 'update']);
});
