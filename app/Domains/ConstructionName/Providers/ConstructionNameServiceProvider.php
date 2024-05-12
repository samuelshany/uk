<?php

declare(strict_types=1);

namespace App\Domains\ConstructionName\Providers;

use App\Domains\ConstructionName\Interfaces\ConstructionNameRepositoryInterface;
use App\Domains\ConstructionName\Models\ConstructionName;
use App\Domains\ConstructionName\Observers\ConstructionNameObserver;
use App\Domains\ConstructionName\Repositories\ConstructionNameMySqlRepository;
use Illuminate\Support\ServiceProvider;

class ConstructionNameServiceProvider extends ServiceProvider
{
    public $bindings = [
        ConstructionNameRepositoryInterface::class => ConstructionNameMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        ConstructionName::observe(ConstructionNameObserver::class);
    }
}
