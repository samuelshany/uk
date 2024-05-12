<?php

declare(strict_types=1);

namespace App\Domains\Clause\Providers;

use App\Domains\Clause\Interfaces\ClauseRepositoryInterface;
use App\Domains\Clause\Models\Clause;
use App\Domains\Clause\Observers\ClauseObserver;
use App\Domains\Clause\Repositories\ClauseMySqlRepository;
use Illuminate\Support\ServiceProvider;

class ClauseServiceProvider extends ServiceProvider
{
    public $bindings = [
        ClauseRepositoryInterface::class => ClauseMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        Clause::observe(ClauseObserver::class);
    }
}
