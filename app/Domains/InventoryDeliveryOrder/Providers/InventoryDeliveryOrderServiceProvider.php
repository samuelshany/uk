<?php

declare(strict_types=1);

namespace App\Domains\InventoryDeliveryOrder\Providers;

use App\Domains\InventoryDeliveryOrder\Interfaces\InventoryDeliveryOrderRepositoryInterface;
use App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder;
use App\Domains\InventoryDeliveryOrder\Observers\InventoryDeliveryOrderObserver;
use App\Domains\InventoryDeliveryOrder\Repositories\InventoryDeliveryOrderMySqlRepository;
use Illuminate\Support\ServiceProvider;

class InventoryDeliveryOrderServiceProvider extends ServiceProvider
{
    public $bindings = [
        InventoryDeliveryOrderRepositoryInterface::class => InventoryDeliveryOrderMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        InventoryDeliveryOrder::observe(InventoryDeliveryOrderObserver::class);
    }
}
