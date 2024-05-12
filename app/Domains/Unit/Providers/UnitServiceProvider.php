<?php

declare(strict_types=1);

namespace App\Domains\Unit\Providers;

use App\Domains\Unit\Interfaces\UnitRepositoryInterface;
use App\Domains\Unit\Models\Unit;
use App\Domains\Unit\Observers\UnitObserver;
use App\Domains\Unit\Repositories\UnitMySqlRepository;
use Illuminate\Support\ServiceProvider;

class UnitServiceProvider extends ServiceProvider
{
    public $bindings = [
        UnitRepositoryInterface::class => UnitMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        Unit::observe(UnitObserver::class);
    }
}
