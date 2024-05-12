<?php

declare(strict_types=1);

namespace App\Domains\Brand\Providers;

use App\Domains\Brand\Interfaces\BrandRepositoryInterface;
use App\Domains\Brand\Repositories\BrandMySqlRepository;
use Illuminate\Support\ServiceProvider;

class BrandServiceProvider extends ServiceProvider
{
    public $bindings = [
        BrandRepositoryInterface::class => BrandMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {

    }
}
