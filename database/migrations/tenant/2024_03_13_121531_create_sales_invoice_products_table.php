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
        Schema::create('sales_invoice_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sales_invoice_id')->constrained('sales_invoices')->onUpdate('cascade');
            $table->foreignId('product_id')->constrained('products')->onUpdate('cascade');
            $table->integer('quantity');
            $table->decimal('product_price',10,2);
            $table->string('discount_type')->nullable();
            $table->decimal('discount_amount',10,2)->default(0);
            $table->decimal('total',17,2)->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales_invoice_products');
    }
};
