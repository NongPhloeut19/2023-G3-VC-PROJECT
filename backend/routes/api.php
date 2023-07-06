<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


<<<<<<< HEAD
Route::post('/login', 'LoginController@login');

// ***Route User***
Route::resource("users", UserController::class);
// Route::post("/users", [UserController::class,'store']);

Route::post('/login',[LoginController::class,'login'])
                ->middleware('guest')
                ->name('login');

Route::get('/users',[UserController::class,'index']);
Route::post('/users',[UserController::class,'store']);

=======

Route::resource('users' , UserController::class);
>>>>>>> ad1f8c0069b452d9d8f13f28aec27377e23a625a
