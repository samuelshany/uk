<?php

declare(strict_types=1);

namespace App\Domains\FieldType\Providers;

use App\Domains\FieldType\Interfaces\FieldTypeRepositoryInterface;
use App\Domains\FieldType\Models\FieldType;
use App\Domains\FieldType\Observers\FieldTypeObserver;
use App\Domains\FieldType\Repositories\FieldTypeMySqlRepository;
use Illuminate\Support\ServiceProvider;

class FieldTypeServiceProvider extends ServiceProvider
{
    public $bindings = [
        FieldTypeRepositoryInterface::class => FieldTypeMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        FieldType::observe(FieldTypeObserver::class);
    }
}
