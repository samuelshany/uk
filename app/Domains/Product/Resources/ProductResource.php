<?php

namespace App\Domains\Product\Resources;

use App\Domains\Brand\Resources\BrandResource;
use App\Domains\Category\Resources\CategoryResource;
use App\Domains\Supplier\Resources\SupplierResource;
use App\Domains\Tax\Resources\TaxResource;
use App\Domains\UnitType\Models\UnitType;
use App\Domains\UnitType\Resources\UnitTypeResource;
use App\Domains\User\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{

    public function toArray($request)
    {
        $productFiles = [];

        foreach ($this->getMedia('ProductSpecImages') as $media) {
            $productFiles[] = (object) [
                'url' => $media->getFullUrl(),
                'id' => $media->id,
                'mime_type' => $media->mime_type,
            ];
        }

        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'description' => $this->description ?? '',

            'quantity' => $this->spec->quantity ?? '',
            'opening_stock' => $this->spec->opening_stock ?? '',
            'selling_price' => $this->spec->selling_price ?? '',
            'purchase_price' => $this->spec->purchase_price ?? '',

            'creator' => UserResource::make($this->whenLoaded('creator')),
            'category' => CategoryResource::make($this->whenLoaded('category')),
            'brand' => $this->brand ?? '',
            'suppliers' => $this->suppliers ?? '',
            'tax' => TaxResource::make($this->whenLoaded('taxes')),
            'unit' => UnitTypeResource::make($this->whenLoaded('unit')),
            'specs' => $this->spec,
            'specs_images' => $productFiles,
            'tax_id' => $this->tax_id ?? '',
            'unit_id' => $this->unit_id,
            'category_id' => $this->category_id,
            'created_at' => $this->created_at ? $this->created_at->format('Y-m-d') : '',
            'updated_at' => $this->updated_at ? $this->updated_at->format('Y-m-d') : '',
        ];
    }
}
