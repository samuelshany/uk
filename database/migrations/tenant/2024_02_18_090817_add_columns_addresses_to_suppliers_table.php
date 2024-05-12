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
        Schema::table('suppliers', function (Blueprint $table) {
            $table->foreignId('address_id')
            ->nullable()
            ->constrained('addresses')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->foreignId('billing_address_id')
            ->nullable()
            ->constrained('addresses')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('suppliers', function (Blueprint $table) {
            $table->dropForeign('suppliers_address_id_foreign');
            $table->dropColumn('address_id');
            $table->dropForeign('suppliers_billing_address_id_foreign');
            $table->dropColumn('billing_address_id');
        });
    }
};
