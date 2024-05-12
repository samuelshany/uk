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
        Schema::table('accounts', function (Blueprint $table) {
            $table->decimal('credit_journal_entries',20,2)->default(0);
            $table->decimal('debit_journal_entries',20,2)->default(0);
            $table->decimal('total_credit',22,2)->default(0);
            $table->decimal('total_debit',22,2)->default(0);
            $table->decimal('total_credit_balance',20,2)->default(0);
            $table->decimal('total_debit_balance',20,2)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('accounts', function (Blueprint $table) {
            $table->dropColumn('credit_journal_entries');
            $table->dropColumn('debit_journal_entries');
            $table->dropColumn('total_credit');
            $table->dropColumn('total_debit');
            $table->dropColumn('total_credit_balance');
            $table->dropColumn('total_debit_balance');
        });
    }
};
