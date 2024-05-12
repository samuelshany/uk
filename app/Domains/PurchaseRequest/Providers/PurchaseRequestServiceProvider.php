<?php

declare(strict_types=1);

namespace App\Domains\PurchaseRequest\Providers;

use App\Domains\PurchaseRequest\Models\PurchaseRequest;
use App\Domains\PurchaseRequest\Observers\PurchaseRequestObserver;
use App\Domains\PurchaseRequest\Interfaces\PurchaseRequestRepositoryInterface;
use App\Domains\PurchaseRequest\Repositories\PurchaseRequestMySqlRepository;
use Illuminate\Support\ServiceProvider;

class PurchaseRequestServiceProvider extends ServiceProvider
{
    public $bindings = [
        PurchaseRequestRepositoryInterface::class => PurchaseRequestMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        PurchaseRequest::observe(PurchaseRequestObserver::class);
    }
}
