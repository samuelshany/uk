<?php

declare(strict_types=1);

namespace App\Domains\Employee\Providers;

use App\Domains\Employee\Interfaces\EmployeeRepositoryInterface;
use App\Domains\Employee\Models\Employee;
use App\Domains\Employee\Observers\EmployeeObserver;
use App\Domains\Employee\Repositories\EmployeeRepository;
use Illuminate\Support\ServiceProvider;

class EmployeeServiceProvider extends ServiceProvider
{
    public $bindings = [
        EmployeeRepositoryInterface::class => EmployeeRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        //Employee::observe(EmployeeObserver::class);
    }
}
