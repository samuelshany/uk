<?php

namespace App\Domains\InventoryReceiptOrder\Controllers;

use App\Domains\Purchase\Models\Purchase;
use App\Domains\InventoryReceiptOrder\Models\EnumPermissionInventoryReceiptOrder;
use App\Domains\InventoryReceiptOrder\Request\UpdateInventoryReceiptOrderRequest;
use App\Domains\InventoryReceiptOrder\Resources\InventoryReceiptOrderDatesResource;
use App\Domains\InventoryReceiptOrder\Resources\InventoryReceiptOrderDetailsResource;
use App\Domains\InventoryReceiptOrder\Resources\InventoryReceiptOrderResource;
use App\Domains\InventoryReceiptOrder\Services\InventoryReceiptOrderService;
use App\Domains\InventoryReceiptOrdersPayment\Resources\InventoryReceiptOrdersPaymentResource;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class InventoryReceiptOrderController extends Controller
{
    public function __construct(private InventoryReceiptOrderService $inventoryReceiptOrderService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryReceiptOrder::view_inventory_receipt_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new InventoryReceiptOrderResource($this->inventoryReceiptOrderService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryReceiptOrder::view_inventory_receipt_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return InventoryReceiptOrderResource::collection($this->inventoryReceiptOrderService->list());
    }
    public function listInvoiceDetails($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryReceiptOrder::view_inventory_receipt_orders->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new InventoryReceiptOrderDetailsResource($this->inventoryReceiptOrderService->listInvoiceDetails($id));
    }

    /*     public function delete($id)
        {
            abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryReceiptOrder::delete_inventory_receipt_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
            $this->inventoryReceiptOrderService->delete($id);
            return response()->json([
                'message' => __('Inventory Receipt Order deleted successfully!'),
                'status' => true,
            ], 200);
        }
     */

    public function update($id, UpdateInventoryReceiptOrderRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryReceiptOrder::edit_inventory_receipt_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $updated = $this->inventoryReceiptOrderService->update($id, $request);
        if (!$updated) {
            return response()->json([
                'message' => __("Receipt quantity cannot be greater than the available quantity."),
                'status' => false,
            ], 402);
        }else if ($updated !== true) {
            return response()->json([
                'message' => $updated,
                'status' => false,
            ], 402);
            
        }else{

            return response()->json([
                'message' => __('Receipt Order is updated successfully!'),
                'status' => true,
            ], 200);
        }

    }
    
    public function confirmReceiptOrder($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionInventoryReceiptOrder::edit_inventory_receipt_order->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        
        $message = $this->inventoryReceiptOrderService->confirmReceiptOrder($id);
        return response()->json([
            'message' => __($message),
            'status' => true,
        ], 200);
    }

}
