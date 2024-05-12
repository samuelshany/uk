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
        Schema::table('product_specs', function (Blueprint $table) {
            $table->dropColumn('value');
            $table->dropForeign(['spec_id']);
            $table->dropColumn('spec_id');
            $table->float('quantity')->nullable();
            $table->float('quantity_alert')->nullable();
            $table->float('opening_stock')->nullable();
            $table->float('selling_price')->nullable();
            $table->float('purchase_price')->nullable();
            $table->float('width')->nullable();
            $table->float('height')->nullable();
            $table->float('length')->nullable();
            $table->float('size')->nullable();
            $table->string('material')->nullable();
            $table->foreignId('tax_id')->nullable()->constrain();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
