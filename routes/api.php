<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
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

Route::post('login',[AuthController::class, 'login']);
Route::post('refresh', [AuthController::class,'refresh']);
    
Route::group(['middleware' => ['api']],function(){
    Route::post('me', [AuthController::class,'me']);
    Route::post('logout', [AuthController::class,'logout']);

        Route::get('index',[ProductController::class,'index']);
        Route::get('product/create',[ProductController::class,'create']);
        Route::post('product/store',[ProductController::class,'store']);
        Route::get('product/show/{id}',[ProductController::class,'show']);
        Route::get('product/edit/{id}',[ProductController::class,'edit']);
        Route::put('product/update',[ProductController::class,'update']);
        Route::delete('product/destroy/{id}',[ProductController::class,'destroy']);
});

