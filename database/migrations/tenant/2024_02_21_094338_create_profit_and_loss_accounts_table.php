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
        Schema::create('profit_and_loss_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->decimal('current_amount')->default(0);
            $table->decimal('total_amount')->default(0);
            $table->enum('account_for',['profit_loss','retained_earning']);
            $table->foreignId('account_id')
            ->constrained('accounts')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->foreignId('parent_account_id')
            ->constrained('accounts')
            ->onUpdate('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profit_and_loss_accounts');
    }
};
