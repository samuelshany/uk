<?php

namespace App\Domains\InventoryDeliveryOrder\Resources;

use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class InventoryDeliveryOrderResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'product_id' => $this->product_id,
            'product_name' => $this->product->name,
            'customer_id' => $this->customer_id,
            'customer_name' => $this->customer->name,
            
            'invoice_id' => $this->invoice_id,
            'reference' => $this->reference,
            'editable' => $this->editable,
            'has_next' => $this->has_next,
            'ready_to_confirm' => $this->ready_to_confirm,
            'delivery_date' => $this->delivery_date,
            'notes' => $this->notes,
            'quantity' => $this->quantity,
            'delivery_quantity' => $this->delivery_quantity,
            'total_amount' => $this->total_amount,
            'total_delivery' => $this->total_delivery,
            'total_balance' => $this->total_balance,
            'product_price' => $this->product_price,
            
            'creator' => $this->creator,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
