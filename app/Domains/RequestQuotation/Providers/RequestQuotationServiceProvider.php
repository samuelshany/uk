<?php

declare(strict_types=1);

namespace App\Domains\RequestQuotation\Providers;

use App\Domains\RequestQuotation\Interfaces\RequestQuotationRepositoryInterface;
use App\Domains\RequestQuotation\Models\RequestQuotation;
use App\Domains\RequestQuotation\Observers\RequestQuotationObserver;
use App\Domains\RequestQuotation\Repositories\RequestQuotationMySqlRepository;
use Illuminate\Support\ServiceProvider;

class RequestQuotationServiceProvider extends ServiceProvider
{
    public $bindings = [
        RequestQuotationRepositoryInterface::class => RequestQuotationMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        RequestQuotation::observe(RequestQuotationObserver::class);
    }
}
