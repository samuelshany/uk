<?php

declare(strict_types=1);

namespace App\Domains\SalesConfigurationState\Providers;

use App\Domains\SalesConfigurationState\Interfaces\SalesConfigurationStateRepositoryInterface;
use App\Domains\SalesConfigurationState\Models\SalesConfigurationState;
use App\Domains\SalesConfigurationState\Observers\SalesConfigurationStateObserver;
use App\Domains\SalesConfigurationState\Repositories\SalesConfigurationStateMySqlRepository;
use Illuminate\Support\ServiceProvider;

class SalesConfigurationStateServiceProvider extends ServiceProvider
{
    public $bindings = [
        SalesConfigurationStateRepositoryInterface::class => SalesConfigurationStateMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        SalesConfigurationState::observe(SalesConfigurationStateObserver::class);
    }
}
