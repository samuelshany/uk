<?php

namespace App\Domains\InventoryReceiptOrder\Repositories;

use App\Domains\InventoryReceiptOrder\Interfaces\InventoryReceiptOrderRepositoryInterface;
use App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder;
use App\Domains\InventoryReceiptOrdersPayment\Models\InventoryReceiptOrdersPayment;
use App\Domains\PurchaseInvoice\Repositories\PurchaseInvoiceMySqlRepository;

class InventoryReceiptOrderMySqlRepository implements InventoryReceiptOrderRepositoryInterface
{
    public function __construct(private InventoryReceiptOrder $inventoryReceiptOrder)
    {
    }
    public function findById(string $id): InventoryReceiptOrder
    {
        $inventoryReceiptOrder = $this->inventoryReceiptOrder::findOrFail($id);
        return $inventoryReceiptOrder;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = InventoryReceiptOrder::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);

        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['quantity', 'total_amount','receipt_quantity','total_receipt','total_balance','notes', 'status', 'created_at', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->whereHas('supplier', function ($q) {
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

    public function listInvoiceDetails($id): InventoryReceiptOrder
    {
        return InventoryReceiptOrder::findOrFail($id);
    }

    public function update(string $id, $request)
    {
        $order = $this->inventoryReceiptOrder::findOrFail($id);
        
        if ($request->receipt_quantity>$order->quantity) {
            return false;
        }

        elseif(!$order->editable){
            return "Not available to edit on order";
        }else{

            $total_receipt = $order->product_price * $request->receipt_quantity;
    
            $inventoryReceiptOrder = [
                'receipt_quantity' => $request->receipt_quantity,
                'total_receipt' => $total_receipt,
                'total_balance' => $order->total_amount - $total_receipt,
                'has_next'=>$request->has_next??$order->has_next,
                'ready_to_confirm' => true,
            ];
    
            $order->update($inventoryReceiptOrder);
            return true;
        }


    }


    public function createInventoryReceiptOrder($data): bool
    {

        $product_price = $data->total / $data->quantity;
        $this->inventoryReceiptOrder::create([
            'supplier_id' => $data->supplier_id,
            'supplier_id' => $data->supplier_id,
            'product_id' => $data->product_id,
            'invoice_id' => $data->id,
            'delivery_date' => $data->created_at,
            'quantity' => $data->quantity,
            'notes' => $data->notes,
            'total_amount' => $data->total,
            'product_price' => $product_price,
            'creator_id' => auth()->user()->id
        ]);

        return true;
    }


    public function confirmReceiptOrder(string $id)
    {
        $order = $this->inventoryReceiptOrder::findOrFail($id);
        $message = "Receipt Order is confirmed successfully!.";

        if($order->has_next&&$order->quantity>$order->receipt_quantity){
            $inventoryReceiptOrder = [
                'editable' => false,
                'ready_to_confirm' => false,
                'quantity' => $order->receipt_quantity,
                'total_amount' => $order->total_receipt,
                'total_balance' => 0
            ];
            
            $rmaining_quantity = $order->quantity - $order->receipt_quantity;
            $total_amount = $rmaining_quantity *  $order->product_price;
            
            $nextReceiptOrder = $this->inventoryReceiptOrder::create([
                'supplier_id' => $order->supplier_id,
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

            $order->update($inventoryReceiptOrder);
        }else{
            
            $inventoryReceiptOrder = [
                'editable' => false,
                'ready_to_confirm' => false,
            ];
            $order->update($inventoryReceiptOrder);

            /* $order->purchaseInvoice->update([
                'quantity' =>$order->receipt_quantity,
                'total' =>$order->total_receipt,
            ]);

            $paid_total = $order->purchaseInvoice->purchaseInvoicePayments()->sum('paid_total');
            $remain_total = $order->purchaseInvoice->purchaseInvoicePayments()->sum('remain_total'); */
            
        }

        if($order->total_balance > 0){
            $message .= " This order with code '".$order->id."' didn't receive all product quantities, and there is a balance of '".$order->total_balance."'";
        }
        return $message;
    }


 /*    public function delete(string $id): bool
    {
        $this->inventoryReceiptOrder::findOrFail($id)?->delete();

        return true;
    } */


    public function invoiceInvoicePayments(string $id)
    {
        $inventoryReceiptOrder = $this->inventoryReceiptOrder::findOrFail($id);

        return $inventoryReceiptOrder->inventoryReceiptOrderPayments;
    }
}
