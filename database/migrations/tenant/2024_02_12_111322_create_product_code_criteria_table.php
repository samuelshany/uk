<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_code_criteria', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['manual', 'numeric', 'alphanumeric']);
            $table->string('start_index')->nullable();
            $table->string('delimiter')->nullable();
            $table->boolean('supplier')->default(0);
            $table->string('supplier_delimiter_position')->nullable();
            $table->boolean('category')->default(0);
            $table->string('category_delimiter_position')->nullable();
            $table->boolean('brand')->default(0);
            $table->string('brand_delimiter_position')->nullable();
            $table->boolean('unitType')->default(0);
            $table->string('unitType_delimiter_position')->nullable();
            $table->foreignId('creator_id')->constrained('users')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_code_criteria');
    }
};
