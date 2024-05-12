<?php

namespace App\Domains\Customer\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Vendor\Resources\AddressResource;
use App\Domains\Customer\Resources\CustomerFileResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'contact' => $this->contact,
            'email' => $this->email,
            'discount' => $this->discount??0,
           /*  'currency' => $this->currency->name ?? null, */
            /* 'currency_id' => $this->currency_id, */
            'currencies' => $this->currencies?CurrencyResource::collection($this->currencies):null,
            'credit_limit' => $this->credit_limit,
            'available_credit' => $this->available_credit,
            'user_id' => $this->assignTo?$this->assignTo->id??'':'',
            'user_name' => $this->assignTo?$this->assignTo->name??'':'',
            'files' => $this->getMedia('customer_attachments')?CustomerFileResource::collection($this->getMedia('customer_attachments')):null,


            'account_code' => $this->account->code ?? null,
            'account_id' => $this->account_id,
            'account_name' => $this->account->name,
            'opening_balance' => $this->account->opening_balance,
            'payment_types' => $this->account->paymentTypes,

            'parent_account_id' => $this->parent_account_id,
            'parent_account_name' => $this->parent->name,


            'creator' => $this->creator->name,
            'total_invoices_amount' => $this->total_invoices_amount,
            'address' => new AddressResource($this->address),
            'billing_address' => new AddressResource($this->billingAddress),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
