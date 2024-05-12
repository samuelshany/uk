<?php

namespace App\Domains\PurchaseInvoice\Resources;

use App\Domains\Product\Resources\ProductResource;
use App\Domains\Supplier\Resources\SupplierResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseInvoiceDetailsResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'supplier' => new SupplierResource($this->supplier),
            'product' => new ProductResource($this->product),
            'invoice_number' => $this->invoice_number,
            'quantity' => $this->quantity,
            'total' => $this->total,
            'status' => $this->status,
            /* 'is_credit' => $this->is_credit, */
            'payment_type_id' => $this->payment_type_id,
            'payment_type_name' => $this->paymentType->name ?? '',
            'type' => $this->paymentType->payment_type ?? '',
            'payment_account_id' => $this->payment_account_id,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
