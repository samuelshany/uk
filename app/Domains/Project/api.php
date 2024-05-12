<?php

use App\Domains\Project\Controllers\ProjectController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'project'], function () {
    Route::get('/track/download/ar/{id}', [ProjectController::class, 'exportProjectManagementPDFAr']);
    Route::get('/', [ProjectController::class, 'list']);
    Route::get('/assignments/{id}', [ProjectController::class, 'listPorjectAssignments']);
    Route::get('/track/download/{id}', [ProjectController::class, 'exportProjectManagementPDF']);
    Route::get('/assignment/find/{id}', [ProjectController::class, 'findPorjectAssignment']);
    Route::get('/{id}', [ProjectController::class, 'findById']);
    Route::delete('/{id}', [ProjectController::class, 'delete']);
    Route::post('/create', [ProjectController::class, 'store']);
    Route::post('/assignment/update/{id}', [ProjectController::class, 'updatePorjectAssignment']);
    Route::post('/assignment/{id}', [ProjectController::class, 'storePorjectAssignment']);
    Route::post('/update/{id}', [ProjectController::class, 'update']);
});
