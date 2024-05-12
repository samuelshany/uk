<?php

declare(strict_types=1);

namespace App\Domains\WorkType\Providers;

use App\Domains\WorkType\Interfaces\WorkTypeRepositoryInterface;
use App\Domains\WorkType\Models\WorkType;
use App\Domains\WorkType\Observers\WorkTypeObserver;
use App\Domains\WorkType\Repositories\WorkTypeMySqlRepository;
use Illuminate\Support\ServiceProvider;

class WorkTypeServiceProvider extends ServiceProvider
{
    public $bindings = [
        WorkTypeRepositoryInterface::class => WorkTypeMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        WorkType::observe(WorkTypeObserver::class);
    }
}
