<?php

namespace Database\Seeders;

use Database\Seeders\AdminSeeders\ModuleSeeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            ModuleSeeder::class
        ]);
    }
}
