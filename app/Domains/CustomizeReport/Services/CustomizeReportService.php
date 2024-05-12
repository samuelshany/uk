<?php

namespace App\Domains\CustomizeReport\Services;

use App\Domains\CustomizeReport\Interfaces\CustomizeReportRepositoryInterface;

class CustomizeReportService
{
    public function __construct(private CustomizeReportRepositoryInterface $CustomizeReportRepositoryInterface)
    {
    }
    public function list()
    {
        return $this->CustomizeReportRepositoryInterface->list();
    }



}
