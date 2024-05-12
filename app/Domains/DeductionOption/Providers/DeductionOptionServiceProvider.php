<?php

declare(strict_types=1);

namespace App\Domains\DeductionOption\Providers;

use App\Domains\DeductionOption\Interfaces\DeductionOptionRepositoryInterface;
use App\Domains\DeductionOption\Models\DeductionOption;
use App\Domains\DeductionOption\Observers\DeductionOptionObserver;
use App\Domains\DeductionOption\Repositories\DeductionOptionMySqlRepository;
use Illuminate\Support\ServiceProvider;

class DeductionOptionServiceProvider extends ServiceProvider
{
    public $bindings = [
        DeductionOptionRepositoryInterface::class => DeductionOptionMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        DeductionOption::observe(DeductionOptionObserver::class);
    }
}
