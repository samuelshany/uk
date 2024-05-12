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
        Schema::table('products', function (Blueprint $table) {
            $table->string('name', 255)->change();
            $table->text('description')->nullable()->change();
            $table->integer('quantity')->nullable()->change();
            $table->unsignedDecimal('selling_price', 10, 2)->nullable()->change();
            $table->unsignedDecimal('purchase_price', 10, 2)->nullable()->change();

            $table->foreignId('category_id')->nullable()->change();
            $table->foreignId('taxes_id')->nullable()->change();
            $table->foreignId('unit_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->text('description')->nullable(false)->change();
            $table->integer('quantity')->nullable(false)->change();
            $table->unsignedDecimal('selling_price', 10, 2)->nullable(false)->change();
            $table->unsignedDecimal('purchase_price', 10, 2)->nullable(false)->change();

            $table->foreignId('category_id')->nullable(false)->change();
            $table->foreignId('taxes_id')->nullable(false)->change();
            $table->foreignId('unit_id')->nullable(false)->change();
        });
    }
};
