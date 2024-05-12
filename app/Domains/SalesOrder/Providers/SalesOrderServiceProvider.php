<?php

declare(strict_types=1);

namespace App\Domains\SalesOrder\Providers;

use App\Domains\SalesOrder\Models\SalesOrder;
use App\Domains\SalesOrder\Observers\SalesOrderObserver;
use App\Domains\SalesOrder\Interfaces\SalesOrderRepositoryInterface;
use App\Domains\SalesOrder\Repositories\SalesOrderMySqlRepository;
use Illuminate\Support\ServiceProvider;

class SalesOrderServiceProvider extends ServiceProvider
{
    public $bindings = [
        SalesOrderRepositoryInterface::class => SalesOrderMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        SalesOrder::observe(SalesOrderObserver::class);
    }
}
