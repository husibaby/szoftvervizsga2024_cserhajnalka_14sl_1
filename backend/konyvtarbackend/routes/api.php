<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\RentalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//felhasználó adatait írja ki
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('books', [BookController::class, 'index']); // listázás
Route::post('books', [BookController::class, 'store']); //új könyv felvitele a köynvtárba(adatbázis)
Route::post('books/{id}/rent',[RentalController::class, 'rentBook']); //új kölcsönzés(Könyvtáról(adatbázis) való kikölcsönzés)
