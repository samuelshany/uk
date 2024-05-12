<?php

namespace App\Domains\PaymentType\Resources;

use App\Domains\Account\Resources\AccountResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentTypeResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->payment_type,
            'accounts' => AccountResource::collection($this->accounts),
            'created_at' => $this->created_at ? $this->created_at->format('Y-m-d H:i:s') : null,
            'updated_at' => $this->updated_at ? $this->updated_at->format('Y-m-d H:i:s') : null,
        ];
    }
}
