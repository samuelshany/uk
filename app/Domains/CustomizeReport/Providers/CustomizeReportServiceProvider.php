<?php

declare(strict_types=1);

namespace App\Domains\CustomizeReport\Providers;

use App\Domains\CustomizeReport\Interfaces\CustomizeReportRepositoryInterface;
use App\Domains\CustomizeReport\Models\CustomizeReport;
use App\Domains\CustomizeReport\Observers\CustomizeReportObserver;
use App\Domains\CustomizeReport\Repositories\CustomizeReportMySqlRepository;
use Illuminate\Support\ServiceProvider;

class CustomizeReportServiceProvider extends ServiceProvider
{
    public $bindings = [
        CustomizeReportRepositoryInterface::class => CustomizeReportMySqlRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        CustomizeReport::observe(CustomizeReportObserver::class);
    }
}
