<?php

use App\Domains\Supplier\Controllers\SupplierController;
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
Route::group(['middleware' => 'auth:sanctum','prefix' => 'supplier'],function (){
    Route::get('/', [SupplierController::class, 'list']);
    Route::get('/{id}', [SupplierController::class, 'findById']);
    Route::delete('/{id}',[SupplierController::class, 'delete']);
    Route::post('/create', [SupplierController::class, 'create']);
    Route::post('/update/{id}', [SupplierController::class, 'update']);
    Route::post('/import', [SupplierController::class, 'import']);
    Route::post('/attachments/{id}', [SupplierController::class, 'addAttachments']);
    Route::get('/export/example', [SupplierController::class, 'exportExample']);
});
