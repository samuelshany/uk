<?php

namespace App\Domains\CustomizeReport\Controllers;

use App\Domains\CustomizeReport\Models\EnumPermissionCustomizeReport;
use App\Domains\CustomizeReport\Request\UpdateCustomizeReportRequest;
use App\Domains\CustomizeReport\Resources\CustomizeReportResource;
use App\Domains\CustomizeReport\Services\CustomizeReportService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class CustomizeReportController extends Controller
{
    public function __construct(private CustomizeReportService $customizeReportService)
    {
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomizeReport::view_customize_reports->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return CustomizeReportResource::collection($this->customizeReportService->list());
    }
    

}
