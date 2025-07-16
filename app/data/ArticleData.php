<?php

namespace App\Data;

use Spatie\LaravelData\Data;
#[TypeScript] 
class ArticleData extends Data
{
    public function __construct(
        public string $title,
        public string $excerpt,
        public string $description,
        public int $category_id,
        public array $tags,
        public bool $status,
    ) {}
}
