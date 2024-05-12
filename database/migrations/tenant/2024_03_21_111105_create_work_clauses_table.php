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
        Schema::create('work_clauses', function (Blueprint $table) {
            $table->id();
            $table->decimal('quantity',15,2)->default(0);
            $table->decimal('previous_amount',15,2)->default(0);
            $table->decimal('current_amount',15,2)->default(0);
            $table->decimal('total_amount',20,2)->default(0);
            $table->string('ratio')->nullable();
            $table->string('notes')->nullable();
            $table->decimal('price',20,2)->default(0);
            $table->decimal('total_price',20,2)->default(0);
            $table->foreignId('project_assignment_id')->constrained('project_assignments')->onUpdate('cascade');
            $table->foreignId('clause_id')->constrained('clauses')->onUpdate('cascade');
            $table->foreignId('unit_id')->constrained('units')->onUpdate('cascade');
            $table->foreignId('project_management_category_id')->constrained('project_management_categories')->onUpdate('cascade');
            $table->timestamps(); 
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_assignment_with_clauses');
    }
};
