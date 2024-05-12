<?php


use App\Domains\Employee\controllers\EmployeeController;
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
Route::get('/listt', [EmployeeController::class,'list']);
Route::post('/addEmployee',[EmployeeController::class,'store']);


