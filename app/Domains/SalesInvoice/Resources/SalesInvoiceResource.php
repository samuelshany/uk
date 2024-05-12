<?php

namespace App\Domains\SalesInvoice\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesInvoiceResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'invoice_number' => $this->invoice_number,
            'delivery_date' => $this->delivery_date,
            'notes' => $this->notes,
            'quantity' => $this->quantity,
            'customer_id' => $this->customer_id,
            'customer_name' => $this->customer->name,
            'customer' => new CustomerResource($this->customer),
            'currency' => new CurrencyResource($this->currency),
            'total' => $this->total,
            'currency_id' => $this->currency_id,
            'tax_id' => $this->tax_id,
            'tax_amount' => $this->tax_amount,
            'status' => $this->status,
            /* 'is_credit' => $this->is_credit, */
            'payment_type_id' => $this->payment_type_id ?? '',
            'payment_type_name' => $this->paymentType->name ?? '',
            'type' => $this->paymentType->payment_type ?? '',
            'payment_account_id' => $this->payment_account_id,
            'creator' => $this->creator,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
