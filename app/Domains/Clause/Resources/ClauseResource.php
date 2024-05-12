<?php

namespace App\Domains\Clause\Resources;

use App\Domains\Account\Resources\AccountResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ClauseResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'creator' => $this->creator,
            'editor' => $this->editor,
            'account' => new  AccountResource($this->account),
            'parent_account_id' =>$this->parent_account_id ,
            'credit_balance' => $this->account?->total_credit_balance,
            'debit_balance' => $this->account?->total_debit_balance,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
