<?php

namespace App\Domains\SalesInvoice\Resources;

use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\SalesInvoice\Resources\SalesInvoiceProductsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesInvoiceDetailsResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'customer' => new CustomerResource($this->customer),
            'products' => SalesInvoiceProductsResource::collection($this->salesInvoiceProducts),
            'invoice_number' => $this->invoice_number,
            'quantity' => $this->quantity,
            'total' => $this->total,
            'currency_id' => $this->currency_id,
            'tax_id' => $this->tax_id,
            'tax_amount' => $this->tax_amount,
            'status' => $this->status,
            'delivery_date' => $this->status,
            'notes' => $this->status,
            /* 'is_credit' => $this->is_credit, */
            'payment_type_id' => $this->payment_type_id,
            'payment_account_id' => $this->payment_account_id,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
