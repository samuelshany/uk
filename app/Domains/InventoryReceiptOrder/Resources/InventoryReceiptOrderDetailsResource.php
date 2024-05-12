<?php

namespace App\Domains\InventoryReceiptOrder\Resources;

use App\Domains\Product\Resources\ProductResource;
use App\Domains\Supplier\Resources\SupplierResource;
use Illuminate\Http\Resources\Json\JsonResource;

class InventoryReceiptOrderDetailsResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'supplier' => new SupplierResource($this->supplier),
            'product' => new ProductResource($this->product),
            'quantity' => $this->quantity,

            'invoice_id' => $this->invoice_id,
            'delivery_date' => $this->delivery_date,
            'notes' => $this->notes,
            'receipt_quantity' => $this->receipt_quantity,
            'total_amount' => $this->total_amount,
            'total_receipt' => $this->total_receipt,
            'total_balance' => $this->total_balance,
            'reference' => $this->reference,
            'has_next' => $this->has_next,
            'editable' => $this->editable,
            'ready_to_confirm' => $this->ready_to_confirm,
            
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
