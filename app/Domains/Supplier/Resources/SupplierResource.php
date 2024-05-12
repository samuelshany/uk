<?php

namespace App\Domains\Supplier\Resources;

use App\Domains\Vendor\Resources\AddressResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Domains\Supplier\Resources\SupplierFileResource;

class SupplierResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'prefix' => $this->prefix ?? '',
            'tax_id' => $this->tax_id ?? '',
            'tax_name' => $this->tax && $this->tax->name ? $this->tax->name : '',
            'shipping_method' => $this->shipping_method ?? '',
            'contact' => $this->contact,
            'email' => $this->email,
            'currency' => $this->currency->name ?? null,
            'currency_id' => $this->currency_id,
            'files' => $this->getMedia('supplier_attachments') ? SupplierFileResource::collection($this->getMedia('supplier_attachments')) : null,

            'account_code' => $this->account->code ?? null,
            'account_id' => $this->account_id,
            'account_name' => $this->account->name,

            'parent_account_id' => $this->parent_account_id,
            'parent_account_name' => $this->parent->name,

            'total_invoices_amount' => $this->total_invoices_amount,
            //            'address' => new AddressResource($this->address),
            'address' => new AddressResource($this->address),
            'billing_address' => new AddressResource($this->billingAddress),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
