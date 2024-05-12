<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use App\Models\Tenant;

class ApplyMigrationsToAllTenants extends Command
{
    protected $signature = 'tenancy:migrate-all';
    protected $description = 'Apply migrations to all tenant databases';

    public function handle()
    {
        // Retrieve all tenants
        $tenants = Tenant::all();

        foreach ($tenants as $tenant) {

            tenancy()->initialize($tenant);

            $migrationPath = 'database/migrations/tenant';

            Artisan::call('migrate', ['--database' => 'tenant', '--path' => $migrationPath]);
           // dd('new is added');
        }

        $this->info('Migrations applied to all tenant databases.');
    }
}
