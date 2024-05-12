<?php

namespace App\Domains\JournalEntry\Resources;

use App\Domains\Account\Resources\AccountResource;
use Illuminate\Http\Resources\Json\JsonResource;

class JorrnalEntryDetailsFileResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'path' =>  $this->getFullUrl(),
            'type' =>  $this->mime_type,
            'file_name' =>  $this->file_name ,
        ];
    }
}
