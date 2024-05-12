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
        Schema::create('customer_currencies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')
            ->constrained('customers')
            ->onUpdate('cascade');
            $table->foreignId('currency_id')
            ->constrained('currencies')
            ->onUpdate('cascade');
          
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_currencies');
    }
};
