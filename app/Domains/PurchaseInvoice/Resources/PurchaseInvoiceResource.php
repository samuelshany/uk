<?php

namespace App\Domains\PurchaseInvoice\Resources;

use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseInvoiceResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'invoice_number' => $this->invoice_number,
            'product_id' => $this->product_id,
            'product_name' => $this->product->name,
            'quantity' => $this->quantity,
            'supplier_id' => $this->supplier_id,
            'supplier_name' => $this->supplier->name,
            'total' => $this->total,
            'notes' => $this->notes,
            'status' => $this->status,
            /* 'is_credit' => $this->is_credit, */
            'payment_type_id' => $this->payment_type_id ?? '',
            'payment_type_name' => $this->paymentType->name ?? '',
            'payment_account_id' => $this->payment_account_id,
            'type' => $this->paymentType->payment_type ?? '',
            'creator' => $this->creator,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
