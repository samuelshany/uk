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
        Schema::table('profit_and_loss_accounts', function (Blueprint $table) {
            $table->decimal('current_amount',17,2)->default(0)->change();
            $table->decimal('total_amount',17,2)->default(0)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profit_and_loss_accounts', function (Blueprint $table) {
            $table->decimal('current_amount')->default(0)->change();
            $table->decimal('total_amount')->default(0)->change();
        });
    }
};
