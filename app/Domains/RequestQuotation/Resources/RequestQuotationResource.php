<?php

namespace App\Domains\RequestQuotation\Resources;

use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RequestQuotationResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'purchase_request_id' => $this->purchase_request_id,
            'product_name' => $this->purchaseRequest->product->name,
            'delivery_date' => $this->purchaseRequest->delivery_date,
            'quantity' => $this->purchaseRequest->quantity,
            'supplier_id' => $this->supplier_id,
            'supplier_name' => $this->supplier->name,
            'total' => $this->total,
            'supplier_total' => $this->supplier_total,
            'notes' => $this->purchaseRequest->notes ?? '',
            'isFixed' => $this->isFixed,
            'is_approved' => $this->is_approved,
            'creator' => $this->creator,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
