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
        Schema::create('project_assignment_with_options', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_assignment_id')->constrained('project_assignments')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('deduction_option_id')->constrained('deduction_options')->onUpdate('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_assignment_deduction_options');
    }
};
