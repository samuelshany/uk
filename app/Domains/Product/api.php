<?php

use App\Domains\Product\Controllers\ProductController;
use App\Domains\Product\Models\Product;
use App\Domains\Product\Models\Spec;
use App\Domains\Product\Request\UpdateProductRequest;
use Illuminate\Support\Facades\Route;
use Symfony\Component\Console\Helper\Helper;

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
Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'product'], function () {
    Route::get('/', [ProductController::class, 'list']);
    Route::get('/with-stock', [ProductController::class, 'poductsWithStock']);
    Route::get('/{id}', [ProductController::class, 'findById']);
    Route::delete('/{id}', [ProductController::class, 'delete']);
    Route::post('/create', [ProductController::class, 'create'])->name('product.create');
    Route::post('/update/{id}', [ProductController::class, 'update'])->name('product.update');
    Route::post('/updateFiles', [ProductController::class, 'updateFiles']);
    Route::post('/assign-specs/{id}', [ProductController::class, 'assignSpecs'])->name('product.assign-specs');
    Route::post('/import', [ProductController::class, 'import']);
    Route::get('/export/example', [ProductController::class, 'exportExample']);
});
