<?php

namespace App\Domains\CustomizeReport\Repositories;

use App\Domains\CustomizeReport\Interfaces\CustomizeReportRepositoryInterface;
use App\Domains\CustomizeReport\Models\CustomizeReport;
use App\Domains\Module\Models\Module;

class CustomizeReportMySqlRepository implements CustomizeReportRepositoryInterface
{
    public function __construct(private CustomizeReport $customizeReport)
    {
    }
    
    public function list()
    {
        $modules = Module::where('id','>',1)->with(['permissionCategories'])->get();
        return $modules;
    }




}
