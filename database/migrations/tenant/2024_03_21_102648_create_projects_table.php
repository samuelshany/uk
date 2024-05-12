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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('project_name');
            $table->foreignId('client_information_id')->constrained('customers')->onUpdate('cascade');
            $table->string('start_date')-> nullable();
            $table->string('end_date')->nullable();
            $table->text('project_description')->nullable();
            $table->string('downpayment_option')->nullable();
            $table->string('assigned_engineer_id')->nullable()->references('id')->on('users');
            $table->string('milestone')->nullable(); 
            $table->string('deadline')->nullable();
            $table->decimal('price',20,2)->default(0);
            $table->decimal('estimated_cost',20,2)->default(0);
            $table->decimal('assigned_budget',20,2)->default(0);
            $table->decimal('downpayment',20,2)->default(0);
            $table->foreignId('creator_id')->references('id')->on('users');
            $table->foreignId('editor_id')->references('id')->on('users');
            $table->timestamps(); 
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
