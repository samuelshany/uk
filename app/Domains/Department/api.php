<?php


use App\Domains\Department\controllers\DepartmentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a FixedAsset which
| is assigned the "api" middleware FixedAsset. Enjoy building your API!
|
*/
Route::get('/listt2', [DepartmentController::class,'departments']);
