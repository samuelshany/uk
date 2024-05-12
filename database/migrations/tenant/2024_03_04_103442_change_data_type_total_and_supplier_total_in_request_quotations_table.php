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
        Schema::table('request_quotations', function (Blueprint $table) {
            $table->decimal('total',13,2)->default(0)->change();
            $table->decimal('supplier_total',13,2)->default(0)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('request_quotations', function (Blueprint $table) {
            $table->decimal('total')->default(0)->change();
            $table->decimal('supplier_total')->default(0)->change();
        });
    }
};
