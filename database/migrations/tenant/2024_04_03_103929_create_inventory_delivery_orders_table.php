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
        Schema::create('inventory_delivery_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained('customers')->onUpdate('cascade');
            $table->foreignId('product_id')->constrained('products')->onUpdate('cascade');
            $table->foreignId('invoice_id')->constrained('sales_invoices')->onUpdate('cascade');
            $table->foreignId('reference')->nullable()->constrained('inventory_delivery_orders')->onUpdate('cascade');
            $table->boolean('editable')->default(true);
            $table->boolean('has_next')->default(false);
            $table->boolean('ready_to_confirm')->default(false);
            $table->string('delivery_date')->nullable();
            $table->text('notes')->nullable();
            $table->bigInteger('quantity')->default(0);
            $table->bigInteger('delivery_quantity')->default(0);
            $table->decimal('total_amount',17,2)->default(0);
            $table->decimal('total_delivery',17,2)->default(0);
            $table->decimal('total_balance',17,2)->default(0);
            $table->decimal('product_price',17,2)->default(0);
            $table->foreignId('creator_id')->references('id')->on('users');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventory_delivery_orders');
    }
};
