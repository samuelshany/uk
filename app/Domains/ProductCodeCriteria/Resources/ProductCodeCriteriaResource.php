<?php

namespace App\Domains\ProductCodeCriteria\Resources;

use App\Domains\Product\Models\Product;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductCodeCriteriaResource extends JsonResource
{

    public function toArray($request)
    {
        $count = Product::count();
        return [
            'id' => $this->id,
            'type' => $this->type,
            'start_index' => $this->start_index,
            'delimiter' => $this->delimiter,
            'supplier' => $this->supplier,
            'supplier_delimiter_position' => $this->supplier_delimiter_position ?? 'none',
            'category' => $this->category,
            'category_delimiter_position' => $this->category_delimiter_position ?? 'none',
            'brand' => $this->brand,
            'brand_delimiter_position' => $this->brand_delimiter_position ?? 'none',
            'unitType' => $this->unitType,
            'unitType_delimiter_position' => $this->unitType_delimiter_position ?? 'none',
            'creator' => $this->creator->name,
            'is_products_exists' => ($count > 0) ? 1 : 0,
            'created_at' => $this->created_at->format('Y-m-d'),
            'updated_at' => $this->updated_at->format('Y-m-d'),
        ];
    }
}
