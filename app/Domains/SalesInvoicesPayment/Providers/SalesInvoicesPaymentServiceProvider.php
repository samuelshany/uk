<?php

declare(strict_types=1);

namespace App\Domains\SalesInvoicesPayment\Providers;

use App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment;
use App\Domains\SalesInvoicesPayment\Observers\SalesInvoicesPaymentObserver;
use App\Domains\SalesInvoicesPayment\Interfaces\SalesInvoicesPaymentRepositoryInterface;
use App\Domains\SalesInvoicesPayment\Repositories\SalesInvoicesPaymentMySqlRepository;
use Illuminate\Support\ServiceProvider;

class SalesInvoicesPaymentServiceProvider extends ServiceProvider
{
    public $bindings = [
        SalesInvoicesPaymentRepositoryInterface::class => SalesInvoicesPaymentMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        // SalesInvoicesPayment::observe(SalesInvoicesPaymentObserver::class);
    }
}
