<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->string('icon')->nullable();
            $table->tinyInteger('is_parent')->default(0); // 0 => is not parent
            $table->foreignId('group_id')->nullable()->references('id')->on('groups');

            $table->foreignId('parent_id')->nullable()
                ->references('id')->on('accounts');

            $table->string('opening_balance')->default(0);

            $table->string('account_type')->nullable();

            $table->unsignedBigInteger('creator_id')->nullable();
            // $table->foreignId('creator_id')->constrained('users');

            $table->timestamps();

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
};
