<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArticleController;
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/articles/{article}', [ArticleController::class, 'show']);

Route::resource('articles', ArticleController::class );

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';