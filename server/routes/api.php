<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('offers/send-email/{offer}', [EmailController::class, 'send_offer_email']);


Route::controller(AuthController::class)
    ->prefix('auth')
    ->name('auth.')
    ->group(function () {
        Route::post('/login', 'login')->name('login');
        Route::post('/logout', 'logout')->name('logout');
        Route::post('/register', 'register')->name('register');
    });

Route::controller(ReviewController::class)
    ->prefix('reviews')
    ->name('review.')
    ->group(function () {
        Route::post('/store', 'store')->name('store');
        Route::post('/update/{review}', 'update')->name('update')
            ->middleware('auth:sanctum');
        Route::delete('/{review}', 'destroy')->name('destroy')
            ->middleware('auth:sanctum');
        Route::get('/all', 'index')->name('index');
        Route::get('/{review}', 'show')->name('show');
    });

Route::controller(OfferController::class)
    ->prefix('offers')
    ->name('offer.')
    ->group(function () {

        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/store', 'store')->name('store');
            Route::post('/update/{offer}', 'update')->name('update');
            Route::delete('/{offer}', 'destroy')->name('destroy');
        });

        Route::get('/all', 'index')->name('index');
        Route::get('/{offer}', 'show')->name('show');
    });


Route::controller(ProductController::class)
    ->prefix('products')
    ->name('product.')
    ->group(function () {

        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/store', 'store')->name('store');
            Route::post('/update/{product}', 'update')->name('update');
            Route::delete('/{product}', 'destroy')->name('destroy');
        });

        Route::get('/all', 'index')->name('index');
        Route::get('/{product}', 'show')->name('show');
    });


Route::controller(CategoryController::class)
    ->prefix('category')
    ->name('category.')
    ->group(function () {

        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/store', 'store')->name('store');
            Route::post('/update/{offer}', 'update')->name('update');
            Route::delete('/{offer}', 'destroy')->name('destroy');
        });

        Route::get('/all', 'index')->name('index');
        Route::get('/{offer}', 'show')->name('show');
        Route::get('/loadOffers/{offer}', 'loadOffers')->name('show');
        Route::get('/loadCommodities/{offer}', 'loadCommodities')->name('show');
    });


Route::controller(EmailController::class)
    ->prefix('subscription')
    ->name('subscription.')
    ->group(function () {

        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/subscribers', 'get_subscribers')->name('get_subscribers');
        });

        Route::post('subscribe', 'subscribe');
        Route::post('verify-subscription', 'verify');


    });
