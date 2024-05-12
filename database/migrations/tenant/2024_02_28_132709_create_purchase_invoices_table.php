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
        Schema::create('purchase_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number')->nullable();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->bigInteger('quantity');
            $table->foreignId('supplier_id')->constrained('suppliers')->onDelete('cascade');
            $table->decimal('total')->default(0);
            $table->enum('status', ['Pending', 'Paid'])->default('Pending');
            $table->foreignId('payment_type_id')->nullable()->constrained('payment_types')->onDelete('cascade');
            $table->foreignId('payment_account_id')->nullable()->constrained('accounts')->onDelete('cascade');
            $table->boolean('is_credit')->default(false);
            $table->foreignId('creator_id')->constrained('users')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_invoices');
    }
};
