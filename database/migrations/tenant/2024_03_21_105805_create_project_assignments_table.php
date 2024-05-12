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
        Schema::create('project_assignments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained('projects')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('project_phase_id')->constrained('project_phases')->onUpdate('cascade');
            $table->foreignId('construction_name_id')->constrained('construction_names')->onUpdate('cascade');
            $table->foreignId('work_type_id')->constrained('work_types')->onUpdate('cascade');
            $table->decimal('total',20,2)->default(0);
            $table->timestamps(); 
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_assignments');
    }
};
