<?php

namespace App\Domains\SalesOrder\Controllers;

use App\Domains\SalesOrder\Models\EnumPermissionPurchaseOrder;
use App\Domains\SalesOrder\Models\EnumPermissionSalesOrder;
use App\Domains\SalesOrder\Request\StoreSalesOrderRequest;
use App\Domains\SalesOrder\Request\UpdateSalesOrderRequest;
use App\Domains\SalesOrder\Resources\SalesOrderResource;
use App\Domains\SalesOrder\Services\SalesOrderService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class SalesOrderController extends Controller
{
    public function __construct(private SalesOrderService $SalesOrderService)
    {
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrder::view_sales_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SalesOrderResource($this->SalesOrderService->findById($id));
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrder::view_sales_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return SalesOrderResource::collection($this->SalesOrderService->list());
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrder::delete_sales_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $deleted = $this->SalesOrderService->delete($id);

        if (!$deleted) {
            return response()->json([
                'message' => __('Can not delete SalesOrder!'),
                'status' => true,
            ], 401);
        }

        return response()->json([
            'message' => __('SalesOrder deleted successfully!'),
            'status' => true,
        ], 200);
    }

    public function create(StoreSalesOrderRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrder::create_sales_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->SalesOrderService->create($request);
        return response()->json([
            'message' => __('SalesOrder created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateSalesOrderRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrder::edit_sales_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->SalesOrderService->update($id, $request);
        return response()->json([
            'message' => __('SalesOrder information updated successfully!'),
            'status' => true,
        ], 200);
    }

    public function approve($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrder::edit_sales_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->SalesOrderService->approveOrder($id);
        return response()->json([
            'message' => __('SalesOrder approved successfully!'),
            'status' => true,
        ], 200);
    }

    public function cancel($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesOrder::edit_sales_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->SalesOrderService->cancelOrder($id);
        return response()->json([
            'message' => __('SalesOrder canceled successfully!'),
            'status' => true,
        ], 200);
    }

    public function notifySuppliers($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseOrder::notify_suppliers->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $isSent = $this->SalesOrderService->sendNotificationToSuppliers($id, request()->suppliers);

        if (!$isSent) {
            return response()->json([
                'message' => __('Error processing notification'),
                'status' => false,
            ], 401);
        }

        return response()->json([
            'message' => __('Emails sent successfully!'),
            'status' => true,
        ], 200);
    }

}
