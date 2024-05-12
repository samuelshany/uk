<?php

namespace App\Domains\Purchase\Resources;

use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseResource extends JsonResource
{

    public function toArray($request)
    {
        $invoiceFiles = [];

        foreach ($this->getMedia('Purchase&Sales') as $media) {
            $invoiceFiles[] = (object) [
                'url' => $media->original_url,
                'id' => $media->id,
                'mime_type' => $media->mime_type,
            ];
        }

        return [
            'id' => $this->id,
            'invoice_number' => $this->invoice_number,
            'total' => $this->total,
            'date' => $this->date,
            'creator' => $this->creator,
            // 'products' => ProductResource::collection($this->whenLoaded('products')),
            'products' => $this->whenLoaded('products', function () {
                return $this->products->map(function ($product) {
                    return [
                        'id' => $product->id,
                        "code" => $product->code,
                        'name' => $product->name,
                        "description" => $product->description,
                        "quantity" => $product->quantity,
                        "opening_stock" => $product->opening_stock,
                        "selling_price" => $product->spec->selling_price,
                        "purchase_price" => $product->spec->purchase_pricee,
                        "unit_id" => $product->unit_id,
                        "category_id" => $product->category_id,
                        'pivot' => [
                            'discount' => $product->pivot->discount,
                            'quantity' => $product->pivot->quantity,
                        ],
                    ];
                });
            }),
            'stock' => $this->stock,
            'payment_type' => $this->paymentType->name,
            'payment_type_id' => $this->paymentType->id,
            'payment_account' => $this->account->name,
            'payment_account_id' => $this->account->id,
            'collection_date' => $this->collection_date,
            'is_collected' => $this->is_collected,
            'purchasable' => $this->purchasable,
            //            'taxes'          => $this->taxes,
            'invoice_image' => $invoiceFiles,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
