<?php

namespace App\Domains\PurchaseRequest\Resources;

use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseRequestResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product_name' => $this->product->name ?? '',
            'product_id' => $this->product->id,
            'quantity' => $this->quantity,
            'item_price' => $this->item_price,
            'total' => $this->total,
            'delivery_date' => $this->delivery_date,
            'notes' => $this->notes,
            'status' => $this->status,
            'is_suppliers_notified' => $this->is_suppliers_notified,
            'creator' => $this->creator,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
