<?php

namespace App\Domains\SalesInvoice\Resources;

use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesInvoiceProductsResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'product' => new ProductResource($this),
            'quantity' => $this->pivot->quantity,
            'product_price' => $this->pivot->product_price,
            'discount_type' => $this->pivot->discount_type,
            'discount_amount' => $this->pivot->discount_amount,
            'total' => $this->pivot->total,
        ];
    }
}
