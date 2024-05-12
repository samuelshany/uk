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
        Schema::table('journal_entry_details', function (Blueprint $table) {
            $table->foreignId('currency_id')
            ->nullable()
            ->constrained('currencies')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('journal_entry_details', function (Blueprint $table) {
            $table->dropForeign('journal_entry_details_currency_id_foreign');
            $table->dropColumn('currency_id');
        });
    }
};
