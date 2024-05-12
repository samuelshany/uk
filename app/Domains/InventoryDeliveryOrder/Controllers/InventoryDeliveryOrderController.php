<?php

namespace App\Domains\InventoryDeliveryOrder\Controllers;

use App\Domains\Purchase\Models\Purchase;
use App\Domains\InventoryDeliveryOrder\Models\EnumPermissionInventoryDeliveryOrder;
use App\Domains\InventoryDeliveryOrder\Request\UpdateInventoryDeliveryOrderRequest;
use App\Domains\InventoryDeliveryOrder\Resources\InventoryDeliveryOrderDatesResource;
use App\Domains\InventoryDeliveryOrder\Resources\InventoryDeliveryOrderDetailsResource;
use App\Domains\InventoryDeliveryOrder\Resources\InventoryDeliveryOrderResource;
use App\Domains\InventoryDeliveryOrder\Services\InventoryDeliveryOrderService;
use App\Domains\InventoryDeliveryOrdersPayment\Resources\InventoryDeliveryOrdersPaymentResource;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class InventoryDeliveryOrderController extends Controller
{
    public function __construct(private InventoryDeliveryOrderService $inventoryDeliveryOrderService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryDeliveryOrder::view_inventory_delivery_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new InventoryDeliveryOrderResource($this->inventoryDeliveryOrderService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryDeliveryOrder::view_inventory_delivery_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return InventoryDeliveryOrderResource::collection($this->inventoryDeliveryOrderService->list());
    }
    public function listInvoiceDetails($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryDeliveryOrder::view_inventory_delivery_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new InventoryDeliveryOrderDetailsResource($this->inventoryDeliveryOrderService->listInvoiceDetails($id));
    }

    /*     public function delete($id)
        {
            abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryDeliveryOrder::delete_inventory_delivery_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
            $this->inventoryDeliveryOrderService->delete($id);
            return response()->json([
                'message' => __('Inventory Delivery Order deleted successfully!'),
                'status' => true,
            ], 200);
        }
     */

    public function update($id, UpdateInventoryDeliveryOrderRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryDeliveryOrder::edit_inventory_delivery_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $updated = $this->inventoryDeliveryOrderService->update($id, $request);
        if (!$updated) {
            return response()->json([
                'message' => __("Delivery quantity cannot be greater than the available quantity."),
                'status' => false,
            ], 402);
        }else if ($updated !== true) {
            return response()->json([
                'message' => $updated,
                'status' => false,
            ], 402);
            
        }else{

            return response()->json([
                'message' => __('Delivery Order is updated successfully!'),
                'status' => true,
            ], 200);
        }

    }
    
    public function confirmReceiptOrder($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryDeliveryOrder::edit_inventory_delivery_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        
        $message = $this->inventoryDeliveryOrderService->confirmReceiptOrder($id);
        return response()->json([
            'message' => __($message),
            'status' => true,
        ], 200);
    }

}
