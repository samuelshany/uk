<?php

declare(strict_types=1);

namespace App\Domains\Project\Providers;

use App\Domains\Project\Interfaces\ProjectRepositoryInterface;
use App\Domains\Project\Models\Project;
use App\Domains\Project\Observers\ProjectObserver;
use App\Domains\Project\Repositories\ProjectMySqlRepository;
use Illuminate\Support\ServiceProvider;

class ProjectServiceProvider extends ServiceProvider
{
    public $bindings = [
        ProjectRepositoryInterface::class => ProjectMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        Project::observe(ProjectObserver::class);
    }
}
