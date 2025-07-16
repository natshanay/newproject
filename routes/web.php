<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Article;
use App\Http\Controllers\ArticleController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::resource('articles', ArticleController::class );
Route::get('/articles/{article}', [ArticleController::class, 'show']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        $articles = Article::where("user_id" , auth()->id())->paginate();
        return Inertia::render('dashboard',
    ["articles"=>$articles,
    "user"=>auth()->user()
    
    ]
    
    );
    })->name('dashboard');
});





require __DIR__.'/settings.php';
require __DIR__.'/auth.php';