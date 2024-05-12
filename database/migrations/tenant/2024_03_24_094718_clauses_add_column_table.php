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
        Schema::table('clauses', function (Blueprint $table) {
            $table->foreignId('parent_account_id')->nullable()
            ->references('id')->on('accounts');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('clauses', function (Blueprint $table) {
            $table->dropColumn('parent_account_id');
        });
    }
};
