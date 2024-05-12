<?php

namespace App\Domains\SalesOrderTracking\Controllers;

use App\Domains\SalesOrderTracking\Models\EnumPermissionSalesOrderTracking;
use App\Domains\SalesOrderTracking\Request\UpdateSalesOrderTrackingRequest;
use App\Domains\SalesOrderTracking\Resources\SalesOrderTrackingResource;
use App\Domains\SalesOrderTracking\Services\SalesOrderTrackingService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class SalesOrderTrackingController extends Controller
{
    public function __construct(private SalesOrderTrackingService $SalesOrderTrackingService)
    {
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrderTracking::view_sales_order_trackings->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new SalesOrderTrackingResource($this->SalesOrderTrackingService->findById($id));
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrderTracking::view_sales_order_trackings->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return SalesOrderTrackingResource::collection($this->SalesOrderTrackingService->list());
    }

    /* public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrderTracking::delete_sales_order_tracking->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->SalesOrderTrackingService->delete($id);
        return response()->json([
            'message' => __('Order Tracking deleted successfully!'),
            'status' => true,
        ], 200);
    } */
    

    public function update($id, UpdateSalesOrderTrackingRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrderTracking::edit_sales_order_tracking->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->SalesOrderTrackingService->update($id, $request);

        return response()->json([
            'message' => __('Order Tracking is updated successfully!'),
            'status' => true,
        ], 200);
    }

}
