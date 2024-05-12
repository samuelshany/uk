<?php

declare(strict_types=1);

namespace App\Domains\SalesInvoice\Providers;

use App\Domains\SalesInvoice\Interfaces\SalesInvoiceRepositoryInterface;
use App\Domains\SalesInvoice\Models\SalesInvoice;
use App\Domains\SalesInvoice\Observers\SalesInvoiceObserver;
use App\Domains\SalesInvoice\Repositories\SalesInvoiceMySqlRepository;
use Illuminate\Support\ServiceProvider;

class SalesInvoiceServiceProvider extends ServiceProvider
{
    public $bindings = [
        SalesInvoiceRepositoryInterface::class => SalesInvoiceMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        SalesInvoice::observe(SalesInvoiceObserver::class);
    }
}
