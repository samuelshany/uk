<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TenantController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/clearcache185', function () {
    $clearcache = Artisan::call('cache:clear');
    echo "Cache cleared<br>";

    $clearview = Artisan::call('view:clear');
    echo "View cleared<br>";

    $clearconfig = Artisan::call('config:cache');
    echo "Config cleared<br>";

    $sotagelink = \Illuminate\Support\Facades\Artisan::call('storage:link');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::group(['prefix' => 'tenants'], function(){
    Route::get('/', [TenantController::class,'index'])->name('tenants.index');
    Route::get('create', [TenantController::class,'create'])->name('tenants.create');
    Route::post('store', [TenantController::class,'store'])->name('tenants.store');
    Route::get('edit/{tenant}', [TenantController::class,'edit'])->name('tenants.edit');
    Route::post('update/{tenant}', [TenantController::class,'update'])->name('tenants.update');
});
require __DIR__.'..\..\app\Domains\Employee\api.php';
require __DIR__.'..\..\app\Domains\Department\api.php';
