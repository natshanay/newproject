<?php

namespace Database\Seeders;
use App\Models\Article;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;
use App\Models\Abebe;



class DatabaseSeeder extends Seeder
{
   
    public function run(): void
    {
        
        $this->call(CategorySeeder::class);

        User::factory()->count(10)->create();
         Article::factory()
    ->has(Tag::factory()->count(2))
    ->count(50)
    ->create();

        
    }
}
