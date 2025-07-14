<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


class TagFactory extends Factory
{
    
    public function definition(): array
    {
        $name = fake()->unique()->word;
        $slug = Str::slug($name);

        return [
            'name' => $name,
            'slug' => $slug
        ];
    }
}
