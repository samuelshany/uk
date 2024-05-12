<?php

namespace App\Domains\SalesOrderTracking\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesOrderTrackingResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'invoice_number' => $this->salesInvoice->invoice_number,
            'delivery_date' => $this->salesInvoice->delivery_date,
            'notes' => $this->salesInvoice->notes,
            'quantity' => $this->salesInvoice->quantity,
            'customer_id' => $this->salesInvoice->customer_id,
            'customer_name' => $this->salesInvoice->customer->name,
            'total' => $this->salesInvoice->total,
            'final_state' =>$this->status_id? $this->status->final_state:null,
            'status_name' =>$this->status_id? $this->status->status_name:null,
            'status_id' => $this->status_id?$this->status->id:null,
            'color' => $this->status_id?$this->status->color:null,
            'creator' => $this->creator,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
