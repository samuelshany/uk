<?php

declare(strict_types=1);

namespace App\Domains\DownpaymentOption\Providers;

use App\Domains\DownpaymentOption\Interfaces\DownpaymentOptionRepositoryInterface;
use App\Domains\DownpaymentOption\Models\DownpaymentOption;
use App\Domains\DownpaymentOption\Observers\DownpaymentOptionObserver;
use App\Domains\DownpaymentOption\Repositories\DownpaymentOptionMySqlRepository;
use Illuminate\Support\ServiceProvider;

class DownpaymentOptionServiceProvider extends ServiceProvider
{
    public $bindings = [
        DownpaymentOptionRepositoryInterface::class => DownpaymentOptionMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        DownpaymentOption::observe(DownpaymentOptionObserver::class);
    }
}
