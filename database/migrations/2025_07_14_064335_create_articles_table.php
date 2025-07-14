<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title')->uinque();
            $table->string('slug')->uinque();
            $table->text('excerpt')->uinque();
            $table->text('description')->uinque();
            $table->boolean('status')->default(false);
            $table->foreignId("user_id")->constrained('users')->onDelete('cascade'); 
            $table->foreignId("category_id")->constrained('categories')->onDelete('cascade'); 

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
