<?php

declare(strict_types=1);

namespace App\Domains\InventoryReceiptOrder\Providers;

use App\Domains\InventoryReceiptOrder\Interfaces\InventoryReceiptOrderRepositoryInterface;
use App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder;
use App\Domains\InventoryReceiptOrder\Observers\InventoryReceiptOrderObserver;
use App\Domains\InventoryReceiptOrder\Repositories\InventoryReceiptOrderMySqlRepository;
use Illuminate\Support\ServiceProvider;

class InventoryReceiptOrderServiceProvider extends ServiceProvider
{
    public $bindings = [
        InventoryReceiptOrderRepositoryInterface::class => InventoryReceiptOrderMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        InventoryReceiptOrder::observe(InventoryReceiptOrderObserver::class);
    }
}
