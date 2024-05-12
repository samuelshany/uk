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
        Schema::table('purchase_invoices_payments', function (Blueprint $table) {
            $table->decimal('total',13,2)->change();
            $table->decimal('paid_total',13,2)->change();
            $table->decimal('remain_total',13,2)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('purchase_invoices_payments', function (Blueprint $table) {
            $table->float('total')->change();
            $table->float('paid_total')->change();
            $table->float('remain_total')->change();
        });
    }
};
