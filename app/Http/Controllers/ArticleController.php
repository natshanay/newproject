<?php

namespace App\Http\Controllers;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use App\Models\Tag;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Data\ArticleData;
class ArticleController extends Controller
{
  

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
        return Inertia('articles/create', [
        'categories' => Category::pluck('name', 'id'),
        'tags' => Tag::pluck('name', 'id'),
    ]);
        
    }
    
public function store(ArticleData $data)
{
    $article = Article::create([
        'slug' => \Str::slug($data->title),
        'user_id' => auth()->id(),
        'status' => $data->status === "on" || $data->status === true, // handle boolean or string "on"
        'title' => $data->title,
        'excerpt' => $data->excerpt,
        'description' => $data->description,
        'category_id' => $data->category_id,
    ]);

    // Sync tags (assuming $data->tags is an array of tag IDs)
    $article->tags()->attach($data->tags);

    return redirect(route('articles.index'))    
        ->with('message', 'Article has successfully been created.');
}

    public function show(Article $article)
    {       
           $article->load(['user', 'category', 'tags']);
        return inertia('articles/show',
            ["article"=>$article]
    
        );
        
    }

    
   private function getFormData(): array
{
    $categories = Category::pluck('name', 'id');
    $tags = Tag::pluck('name', 'id');

    return compact('categories', 'tags');
}

public function edit(Article $article)
{
    return Inertia('articles/edit', array_merge(
        ['article' => $article->load('tags')],
        $this->getFormData()
    ));
}

    /**
     * Update the specified resource in storage.
     */
   public function update(ArticleData $data, Article $article): RedirectResponse
{
    $article->update([
        'slug' => Str::slug($data->title),
        'status' => $data->status === 'on' || $data->status === true,
        'title' => $data->title,
        'excerpt' => $data->excerpt,
        'description' => $data->description,
        'category_id' => $data->category_id,
    ]);

    $article->tags()->sync($data->tags);

    return redirect(route('articles.index'))
        ->with('message', 'Article has successfully been updated.');
}

    /**
     * Remove the specified resource from storage.
     */
public function destroy(string $slug)
{
    try {
        $article = Article::where('slug', $slug)->firstOrFail();
        $article->delete();

        return redirect()->route('articles.index')->with('success', 'Article deleted successfully!');
    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        return redirect()->route('articles.index')->with('error', 'Article not found!');
    }
}

}
