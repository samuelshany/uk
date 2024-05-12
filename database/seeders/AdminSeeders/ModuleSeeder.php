<?php

namespace Database\Seeders\AdminSeeders;

use App\Models\Admin\Module;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $modules = [
            'Setup',
            'Accounting',
            'Inventory',
            'Purchase' ,
            'Sale',
            'Project Management',
            'HR'

        ];


       foreach ($modules as $module){
        Module::create([
            'name' => $module
        ]);
       }

    }
}
