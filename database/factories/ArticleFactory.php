<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ArticleFactory extends Factory
{
    
    public function definition(): array
    {
        $title = fake()->unique()->sentence;
        $slug = Str::slug($title);

        return [
            'title' => $title,
            'slug' => $slug,
            'excerpt' => fake()->paragraphs(2, true),
            'description' => fake()->paragraphs(8, true),
            'status' => true,
            'user_id' => User::inRandomOrder()->value('id'),
            'category_id' => Category::inRandomOrder()->value('id')
        ];
    }
}
