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
        Schema::table('projects', function (Blueprint $table) {
            $table->decimal('estimated_cost',20,2)->default(0)->nullable()->change();
            $table->decimal('assigned_budget',20,2)->default(0)->nullable()->change();
            $table->decimal('downpayment',20,2)->default(0)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->decimal('estimated_cost',20,2)->default(0)->nullable(false)->change();
            $table->decimal('assigned_budget',20,2)->default(0)->nullable(false)->change();
            $table->decimal('downpayment',20,2)->default(0)->nullable(false)->change();
            //
        });
    }
};
