<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Tenancy\Facades\Tenancy;

class ApplySeedersToAllTenants extends Command
{
    protected $signature = 'tenancy:run-seeder-all-tenants {--class= : The class name of the seeder}';

    protected $description = 'Run a seeder for all tenants';

    public function handle()
    {
        $seederClass = $this->option('class');

        if (empty($seederClass)) {
            $this->error('Seeder class name is required.');
            return;
        }

        Tenant::all()->each(function ($tenant) use ($seederClass) {

            $this->info("Running seeder for {$tenant->getTenantKey()}");

            tenancy()->initialize($tenant);

            $this->call('db:seed', [
                '--class' => $seederClass,
            ]);
        });

        $this->info('Seeder has been run for all tenants.');
    }
}
