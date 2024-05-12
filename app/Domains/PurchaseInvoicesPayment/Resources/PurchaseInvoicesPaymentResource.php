<?php

namespace App\Domains\PurchaseInvoicesPayment\Resources;

use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseInvoicesPaymentResource extends JsonResource
{

    public function toArray($request)
    {
        // $isFixed = 0;
        // if ($this->status == 'partial' || $this->status == 'paid') {
        //     $isFixed = 1;
        // }
        return [
            'id' => $this->id,
            'purchase_invoice_id' => $this->purchase_invoice_id,
            'total' => $this->total,
            'paid_total' => $this->paid_total,
            'remain_total' => $this->remain_total,
            'payment_date' => $this->payment_date,
            'status' => $this->status,
            // 'isFixed' => $isFixed,
            //'payments' => $this->status == "partial" ? $this->partialInvoicePayments : '',
            'payments' =>  $this->status == "partial" ?PurchaseInvoicesPaymentResource::collection($this->partialInvoicePayments):null
        ];
    }
}
