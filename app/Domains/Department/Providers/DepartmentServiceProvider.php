<?php

declare(strict_types=1);

namespace App\Domains\Department\Providers;

use App\Domains\Department\Interfaces\DepartmentRepositoryInterface;
use App\Domains\Department\Models\Department;
use App\Domains\Department\Observers\DepartmentObserver;
use App\Domains\Department\Repositories\DepartmentRepository;
use Illuminate\Support\ServiceProvider;

class DepartmentServiceProvider extends ServiceProvider
{
    public $bindings = [
        DepartmentRepositoryInterface::class => DepartmentRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        //Department::observe(DepartmentObserver::class);
    }
}
