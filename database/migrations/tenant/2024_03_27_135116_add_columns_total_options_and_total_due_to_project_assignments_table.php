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
        Schema::table('project_assignments', function (Blueprint $table) {
            $table->decimal('total_options',20,2)->default(0);
            $table->decimal('total_due',20,2)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('project_assignments', function (Blueprint $table) {
            $table->dropColumn('total_options');
            $table->dropColumn('total_due');
        });
    }
};
