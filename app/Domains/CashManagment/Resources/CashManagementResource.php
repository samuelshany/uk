<?php

namespace App\Domains\CashManagment\Resources;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Http\Resources\Json\JsonResource;

class CashManagementResource extends JsonResource
{

    public function toArray($request)
    {
        $paymentType = PaymentType::findOrFail($this->payment_type_id);
        $account = $paymentType->accounts()->where('accounts.id', $this->payment_account_id)->first();

        return [
            'id' => $this->id,
            'date' => $this->date,
            'description' => $this->description,
            'amount' => $this->amount,
            'payment_method_name' => $paymentType->name,
            'payment_method_id' => $paymentType->id,
            'payment_account_name' => $account->name,
            'payment_account_id' => $account->id,
            // 'payment_acount_' => $account,

            'cashable_id' => $this->cashable_id,
            'cashable_name' => $this->whenLoaded('cashable')->name ?? null,
            'account_id' => $this->git ,
            'account_name' => $this->whenLoaded('account')->name ?? null,
            'creator_id' => $this->creator_id,
            'creator' => $this->whenLoaded('creator')->name ?? null,

            'created_at' => $this->created_at->format('Y-m-d'),
            'updated_at' => $this->updated_at->format('Y-m-d'),
        ];
    }
}
