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
            $table->bigInteger('quantity')->nullable()->default(0);
            $table->bigInteger('opening_stock')->nullable()->default(0);
            $table->decimal('selling_price',17,2)->nullable()->default(0);
            $table->decimal('purchase_price',17,2)->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('quantity');
            $table->dropColumn('opening_stock');
            $table->dropColumn('selling_price');
            $table->dropColumn('purchase_price');
        });
    }
};
