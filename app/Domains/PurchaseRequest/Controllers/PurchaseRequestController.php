<?php

namespace App\Domains\PurchaseRequest\Controllers;

use App\Domains\PurchaseRequest\Models\EnumPermissionPurchaseOrder;
use App\Domains\PurchaseRequest\Models\EnumPermissionPurchaseRequest;
use App\Domains\PurchaseRequest\Request\StorePurchaseRequestRequest;
use App\Domains\PurchaseRequest\Request\UpdatePurchaseRequestRequest;
use App\Domains\PurchaseRequest\Resources\PurchaseRequestResource;
use App\Domains\PurchaseRequest\Services\PurchaseRequestService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class PurchaseRequestController extends Controller
{
    public function __construct(private PurchaseRequestService $PurchaseRequestService)
    {
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseRequest::view_purchase_requests->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PurchaseRequestResource($this->PurchaseRequestService->findById($id));
    }

    public function list()
    {
        if (request()->type == 'requests') {
            abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseRequest::view_purchase_requests->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        }
        if (request()->type == 'orders') {
            abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseOrder::view_purchase_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        }

        return PurchaseRequestResource::collection($this->PurchaseRequestService->list());
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseRequest::delete_purchase_request->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $deleted = $this->PurchaseRequestService->delete($id);

        if (!$deleted) {
            return response()->json([
                'message' => __('Can not delete PurchaseRequest!'),
                'status' => true,
            ], 401);
        }

        return response()->json([
            'message' => __('PurchaseRequest deleted successfully!'),
            'status' => true,
        ], 200);
    }

    public function create(StorePurchaseRequestRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseRequest::create_purchase_request->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->PurchaseRequestService->create($request);
        return response()->json([
            'message' => __('PurchaseRequest created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdatePurchaseRequestRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseRequest::edit_purchase_request->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->PurchaseRequestService->update($id, $request);
        return response()->json([
            'message' => __('PurchaseRequest information updated successfully!'),
            'status' => true,
        ], 200);
    }

    public function approve($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseRequest::edit_purchase_request->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->PurchaseRequestService->approveRequest($id);
        return response()->json([
            'message' => __('PurchaseRequest approved successfully!'),
            'status' => true,
        ], 200);
    }

    public function cancel($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseRequest::edit_purchase_request->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->PurchaseRequestService->cancelRequest($id);
        return response()->json([
            'message' => __('PurchaseRequest canceled successfully!'),
            'status' => true,
        ], 200);
    }

    public function notifySuppliers($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseOrder::notify_suppliers->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $isSent = $this->PurchaseRequestService->sendNotificationToSuppliers($id, request()->suppliers);

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
