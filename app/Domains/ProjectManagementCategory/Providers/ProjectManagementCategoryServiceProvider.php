<?php

declare(strict_types=1);

namespace App\Domains\ProjectManagementCategory\Providers;

use App\Domains\ProjectManagementCategory\Interfaces\ProjectManagementCategoryRepositoryInterface;
use App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory;
use App\Domains\ProjectManagementCategory\Observers\ProjectManagementCategoryObserver;
use App\Domains\ProjectManagementCategory\Repositories\ProjectManagementCategoryMySqlRepository;
use Illuminate\Support\ServiceProvider;

class ProjectManagementCategoryServiceProvider extends ServiceProvider
{
    public $bindings = [
        ProjectManagementCategoryRepositoryInterface::class => ProjectManagementCategoryMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        ProjectManagementCategory::observe(ProjectManagementCategoryObserver::class);
    }
}
