<?php

declare(strict_types=1);

namespace App\Domains\ProjectPhase\Providers;

use App\Domains\ProjectPhase\Interfaces\ProjectPhaseRepositoryInterface;
use App\Domains\ProjectPhase\Models\ProjectPhase;
use App\Domains\ProjectPhase\Observers\ProjectPhaseObserver;
use App\Domains\ProjectPhase\Repositories\ProjectPhaseMySqlRepository;
use Illuminate\Support\ServiceProvider;

class ProjectPhaseServiceProvider extends ServiceProvider
{
    public $bindings = [
        ProjectPhaseRepositoryInterface::class => ProjectPhaseMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        ProjectPhase::observe(ProjectPhaseObserver::class);
    }
}
