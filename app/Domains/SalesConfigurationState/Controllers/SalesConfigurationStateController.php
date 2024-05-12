<?php

namespace App\Domains\SalesConfigurationState\Controllers;

use App\Domains\Purchase\Models\Purchase;
use App\Domains\SalesConfigurationState\Models\EnumPermissionSalesConfigurationState;
use App\Domains\SalesConfigurationState\Request\StoreSalesConfigurationStateRequest;
use App\Domains\SalesConfigurationState\Request\UpdateSalesConfigurationStateRequest;
use App\Domains\SalesConfigurationState\Resources\SalesConfigurationStateDatesResource;
use App\Domains\SalesConfigurationState\Resources\SalesConfigurationStateDetailsResource;
use App\Domains\SalesConfigurationState\Resources\SalesConfigurationStateResource;
use App\Domains\SalesConfigurationState\Services\SalesConfigurationStateService;
use App\Domains\SalesConfigurationStatesPayment\Resources\SalesConfigurationStatesPaymentResource;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class SalesConfigurationStateController extends Controller
{
    public function __construct(private SalesConfigurationStateService $SalesConfigurationStateService)
    {
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesConfigurationState::view_sales_configuration_states->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new SalesConfigurationStateResource($this->SalesConfigurationStateService->findById($id));
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesConfigurationState::view_sales_configuration_states->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return SalesConfigurationStateResource::collection($this->SalesConfigurationStateService->list());
    }

    public function store(StoreSalesConfigurationStateRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesConfigurationState::delete_sales_configuration_state->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->SalesConfigurationStateService->store($request);
        return response()->json([
            'message' => __('Sales Configuration State created successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesConfigurationState::delete_sales_configuration_state->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->SalesConfigurationStateService->delete($id);
        return response()->json([
            'message' => __('Sales Configuration State deleted successfully!'),
            'status' => true,
        ], 200);
    }
    

    public function update($id, UpdateSalesConfigurationStateRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesConfigurationState::edit_sales_configuration_state->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        $this->SalesConfigurationStateService->update($id, $request);


        return response()->json([
            'message' => __('Sales Configuration State is updated successfully!'),
            'status' => true,
        ], 200);
    }

}
