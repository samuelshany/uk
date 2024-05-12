<?php

declare(strict_types=1);

namespace App\Domains\SalesOrderTracking\Providers;

use App\Domains\SalesOrderTracking\Interfaces\SalesOrderTrackingRepositoryInterface;
use App\Domains\SalesOrderTracking\Models\SalesOrderTracking;
use App\Domains\SalesOrderTracking\Observers\SalesOrderTrackingObserver;
use App\Domains\SalesOrderTracking\Repositories\SalesOrderTrackingMySqlRepository;
use Illuminate\Support\ServiceProvider;

class SalesOrderTrackingServiceProvider extends ServiceProvider
{
    public $bindings = [
        SalesOrderTrackingRepositoryInterface::class => SalesOrderTrackingMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        SalesOrderTracking::observe(SalesOrderTrackingObserver::class);
    }
}
