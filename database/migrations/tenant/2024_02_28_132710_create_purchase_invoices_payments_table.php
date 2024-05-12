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
        Schema::create('purchase_invoices_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_invoice_id')->constrained('purchase_invoices');
            $table->float('total');
            $table->float('paid_total');
            $table->float('remain_total');
            $table->string('payment_date');
            $table->enum('status', ['pending', 'partial', 'paid'])->default('pending');
            $table->string('pay_option')->nullable(); // all or partial
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_invoices_payments');
    }
};
