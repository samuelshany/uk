<?php

declare(strict_types=1);

namespace App\Domains\PurchaseInvoice\Providers;

use App\Domains\PurchaseInvoice\Interfaces\PurchaseInvoiceRepositoryInterface;
use App\Domains\PurchaseInvoice\Models\PurchaseInvoice;
use App\Domains\PurchaseInvoice\Observers\PurchaseInvoiceObserver;
use App\Domains\PurchaseInvoice\Repositories\PurchaseInvoiceMySqlRepository;
use Illuminate\Support\ServiceProvider;

class PurchaseInvoiceServiceProvider extends ServiceProvider
{
    public $bindings = [
        PurchaseInvoiceRepositoryInterface::class => PurchaseInvoiceMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        PurchaseInvoice::observe(PurchaseInvoiceObserver::class);
    }
}
