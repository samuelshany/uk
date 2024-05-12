<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('purchase_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained();
            $table->float('item_price');
            $table->integer('quantity');
            $table->float('total');
            $table->string('delivery_date')->nullable();
            $table->text('notes')->nullable();
            $table->foreignId('warehouse_id')->nullable()->constrained();
            $table->enum('status', ['pending', 'canceled', 'approved'])->default('pending');
            $table->boolean('is_suppliers_notified')->default(0);
            $table->foreignId('creator_id')->references('id')->on('users');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_requests');
    }
};
