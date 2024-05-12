<?php

namespace App\Domains\DeductionOption\Resources;

use App\Domains\Account\Resources\AccountResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DeductionOptionResource extends JsonResource
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
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
