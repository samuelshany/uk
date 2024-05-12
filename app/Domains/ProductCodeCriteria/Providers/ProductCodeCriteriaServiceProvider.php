<?php

declare(strict_types=1);

namespace App\Domains\ProductCodeCriteria\Providers;

use App\Domains\ProductCodeCriteria\Interfaces\ProductCodeCriteriaRepositoryInterface;
use App\Domains\ProductCodeCriteria\Repositories\ProductCodeCriteriaMySqlRepository;
use Illuminate\Support\ServiceProvider;

class ProductCodeCriteriaServiceProvider extends ServiceProvider
{
    public $bindings = [
        ProductCodeCriteriaRepositoryInterface::class => ProductCodeCriteriaMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        //
    }
}
