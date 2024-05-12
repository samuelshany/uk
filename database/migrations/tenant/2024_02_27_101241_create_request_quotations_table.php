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
        Schema::create('request_quotations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_request_id')
            ->constrained('purchase_requests')
            ->onUpdate('cascade');
            $table->decimal('total')->default(0);
            $table->decimal('supplier_total')->default(0);
            $table->integer('is_approved')->default(0);
            $table->integer('isFixed')->default(0);
            $table->foreignId('creator_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('supplier_id')->constrained('suppliers')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_quotations');
    }
};
