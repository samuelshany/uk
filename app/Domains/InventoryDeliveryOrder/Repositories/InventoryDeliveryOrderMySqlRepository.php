<?php

namespace App\Domains\InventoryDeliveryOrder\Repositories;

use App\Domains\InventoryDeliveryOrder\Interfaces\InventoryDeliveryOrderRepositoryInterface;
use App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder;
use App\Domains\InventoryDeliveryOrdersPayment\Models\InventoryDeliveryOrdersPayment;
use App\Domains\PurchaseInvoice\Repositories\PurchaseInvoiceMySqlRepository;

class InventoryDeliveryOrderMySqlRepository implements InventoryDeliveryOrderRepositoryInterface
{
    public function __construct(private InventoryDeliveryOrder $inventoryDeliveryOrder)
    {
    }
    public function findById(string $id): InventoryDeliveryOrder
    {
        $inventoryDeliveryOrder = $this->inventoryDeliveryOrder::findOrFail($id);
        return $inventoryDeliveryOrder;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = InventoryDeliveryOrder::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);

        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['quantity', 'total_amount','delivery_quantity','total_delivery','total_balance','notes', 'status', 'created_at', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->whereHas('customer', function ($q) {
            if (in_array(request()->sort_by, ['name', 'email'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->whereHas('product', function ($q) {
            if (in_array(request()->sort_by, ['name'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })
            ->orderBy('created_at', 'desc');

            if ($limit === 'all') {
                return $query->get();
            } else {
                return $query->paginate($limit);
            }
    }

    public function listInvoiceDetails($id): InventoryDeliveryOrder
    {
        return InventoryDeliveryOrder::findOrFail($id);
    }

    public function update(string $id, $request)
    {
        $order = $this->inventoryDeliveryOrder::findOrFail($id);
        
        if ($request->delivery_quantity>$order->quantity) {
            return false;
        }

        elseif(!$order->editable){
            return "Not available to edit on order";
        }else{

            $total_delivery = $order->product_price * $request->delivery_quantity;
    
            $inventoryDeliveryOrder = [
                'delivery_quantity' => $request->delivery_quantity,
                'total_delivery' => $total_delivery,
                'total_balance' => $order->total_amount - $total_delivery,
                'has_next'=>$request->has_next??$order->has_next,
                'ready_to_confirm' => true,
            ];
    
            $order->update($inventoryDeliveryOrder);
            return true;
        }


    }


    public function createInventoryDeliveryOrder($data): bool
    {

        foreach ($data->salesInvoiceProducts as $product){
            $product_price = $product->pivot->total / $product->pivot->quantity;
            InventoryDeliveryOrder::create([
                'customer_id' => $data->customer_id,
                'product_id' => $product->pivot->product_id,
                'invoice_id' => $data->id,
                'delivery_date' => $data->delivery_date,
                'quantity' => $product->pivot->quantity,
                'notes' => $data->notes,
                'total_amount' => $product->pivot->total,
                'product_price' => $product_price,
                'creator_id' => auth()->user()->id
            ]);
        }

        return true;
    }


    public function confirmReceiptOrder(string $id)
    {
        $order = $this->inventoryDeliveryOrder::findOrFail($id);
        $message = "Delivery Order is confirmed successfully!.";

        if($order->has_next&&$order->quantity>$order->delivery_quantity){
            $inventoryDeliveryOrder = [
                'editable' => false,
                'ready_to_confirm' => false,
                'quantity' => $order->delivery_quantity,
                'total_amount' => $order->total_delivery,
                'total_balance' => 0
            ];
            
            $rmaining_quantity = $order->quantity - $order->delivery_quantity;
            $total_amount = $rmaining_quantity *  $order->product_price;
            
            $nextReceiptOrder = $this->inventoryDeliveryOrder::create([
                'customer_id' => $order->customer_id,
                'product_id' => $order->product_id,
                'invoice_id' => $order->invoice_id,
                'notes' => $order->notes,
                'quantity' => $rmaining_quantity,
                'total_amount' => $total_amount,
                'product_price' => $order->product_price,
                'reference' => $order->id,
                'creator_id' => auth()->user()->id
            ]);
            
            $nextReceiptOrder->update([
                'delivery_date' => $nextReceiptOrder->created_at,
                'ready_to_confirm' => false,
            ]);

            $order->update($inventoryDeliveryOrder);
        }else{
            
            $inventoryDeliveryOrder = [
                'editable' => false,
                'ready_to_confirm' => false,
            ];
            $order->update($inventoryDeliveryOrder);

            /* $order->purchaseInvoice->update([
                'quantity' =>$order->delivery_quantity,
                'total' =>$order->total_delivery,
            ]);

            $paid_total = $order->purchaseInvoice->purchaseInvoicePayments()->sum('paid_total');
            $remain_total = $order->purchaseInvoice->purchaseInvoicePayments()->sum('remain_total'); */
            
        }
        if($order->total_balance > 0){
            $message .= " This order with code '".$order->id."' did not deliver the full quantity of the product, and there is a balance of  '".$order->total_balance."'";
        }

        return $message;
    }


 /*    public function delete(string $id): bool
    {
        $this->inventoryDeliveryOrder::findOrFail($id)?->delete();

        return true;
    } */


    public function invoiceInvoicePayments(string $id)
    {
        $inventoryDeliveryOrder = $this->inventoryDeliveryOrder::findOrFail($id);

        return $inventoryDeliveryOrder->inventoryDeliveryOrderPayments;
    }
}
