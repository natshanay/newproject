<?php

namespace App\Http\Controllers;
use App\Models\Article;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {

        $articles = Article::with(["user","tags"])->get();
        return inertia('articles/index', [
    'articles' => Article::with(['user', 'tags'])->latest()->paginate(),
    'flash' => ['message' => session('message')],
]);
  
    }

    public function create()
    {
        return inertia('articles/create');
        
    }
    
 
    public function store(Request $request)
    {
        
    }
    
    /**
     * Display the specified resource.
    */
    public function show(Article $article)
    {
           $article->load(['user', 'category', 'tags']);
        return inertia('articles/show',
            ["article"=>$article]
    
        );
        
    }

    
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
