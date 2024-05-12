<?php

namespace App\Domains\PurchaseInvoice\Resources;

use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseInvoiceDatesResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
/*             'supplier' => $this->supplier,
            'product' => $this->product,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'), */
        ];
    }
}
