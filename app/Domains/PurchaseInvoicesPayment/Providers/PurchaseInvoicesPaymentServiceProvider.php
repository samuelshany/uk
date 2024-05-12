<?php

declare(strict_types=1);

namespace App\Domains\PurchaseInvoicesPayment\Providers;

use App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment;
use App\Domains\PurchaseInvoicesPayment\Observers\PurchaseInvoicesPaymentObserver;
use App\Domains\PurchaseInvoicesPayment\Interfaces\PurchaseInvoicesPaymentRepositoryInterface;
use App\Domains\PurchaseInvoicesPayment\Repositories\PurchaseInvoicesPaymentMySqlRepository;
use Illuminate\Support\ServiceProvider;

class PurchaseInvoicesPaymentServiceProvider extends ServiceProvider
{
    public $bindings = [
        PurchaseInvoicesPaymentRepositoryInterface::class => PurchaseInvoicesPaymentMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        // PurchaseInvoicesPayment::observe(PurchaseInvoicesPaymentObserver::class);
    }
}
