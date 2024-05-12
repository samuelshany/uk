<?php

namespace App\Domains\SalesOrder\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesOrderProductResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'sales_order_id' => $this->sales_order_id,
            'product' => new ProductResource($this->product),
            'quantity' => $this->quantity,
            'product_price' => $this->product_price,
            'discount_type' => $this->discount_type,
            'discount_amount' => $this->discount_amount,
            'total' => $this->total,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
