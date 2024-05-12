<?php

namespace App\Domains\SalesOrder\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\Product\Resources\ProductResource;
use App\Domains\Tax\Resources\TaxResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesOrderResource extends JsonResource
{

    public function toArray($request)
    {
        $salesOrderFiles = [];

        foreach ($this->getMedia('SalesOrderImages') as $media) {
            $salesOrderFiles[] = (object) [
                'url' => $media->getFullUrl(),
                'id' => $media->id,
                'mime_type' => $media->mime_type,
            ];
        }

        return [
            'id' => $this->id,
            'total' => $this->total,
            'discount_amount' => $this->discount_amount,
            'tax_amount' => $this->tax_amount,
            'delivery_date' => $this->delivery_date,
            'notes' => $this->notes,
            'invoice_number' => $this->entry_no,
            'status' => $this->status,
            'files' => $salesOrderFiles,
            // 'products' => $this->salesOrderProducts,
            'products' => SalesOrderProductResource::collection($this->whenLoaded('salesOrderProducts')),
            'customer_name' => $this->customer->name,
            'customer_id' => $this->customer->id,
            'customer' => new CustomerResource($this->customer),
            'currency' => new CurrencyResource($this->currency),
            'creator' => $this->creator,
            'tax' => new TaxResource($this->tax),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
