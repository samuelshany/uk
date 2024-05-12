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
        Schema::create('sales_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number')->nullable();
            $table->foreignId('product_id')->constrained('products')->onUpdate('cascade');
            $table->bigInteger('quantity');
            $table->foreignId('customer_id')->constrained('customers')->onUpdate('cascade');
            $table->decimal('total',17,2)->default(0);
            $table->enum('status', ['Pending', 'Collected'])->default('Pending');
            $table->foreignId('payment_type_id')->nullable()->constrained('payment_types')->onUpdate('cascade');
            $table->foreignId('payment_account_id')->nullable()->constrained('accounts')->onUpdate('cascade');
            $table->boolean('is_credit')->default(false);
            $table->foreignId('creator_id')->constrained('users')->onUpdate('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales_invoices');
    }
};
