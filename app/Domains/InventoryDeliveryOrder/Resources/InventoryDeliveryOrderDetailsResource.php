<?php

namespace App\Domains\InventoryDeliveryOrder\Resources;

use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class InventoryDeliveryOrderDetailsResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'customer' => new CustomerResource($this->customer),
            'product' => new ProductResource($this->product),
            'quantity' => $this->quantity,

            'invoice_id' => $this->invoice_id,
            'reference' => $this->reference,
            'editable' => $this->editable,
            'has_next' => $this->has_next,
            'ready_to_confirm' => $this->ready_to_confirm,
            'delivery_date' => $this->delivery_date,
            'notes' => $this->notes,
            'delivery_quantity' => $this->delivery_quantity,
            'total_amount' => $this->total_amount,
            'total_delivery' => $this->total_delivery,
            'total_balance' => $this->total_balance,
            'product_price' => $this->product_price,
            
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
