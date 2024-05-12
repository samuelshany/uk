<?php

namespace App\Domains\Supplier\Resources;

use App\Domains\Vendor\Resources\AddressResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SupplierFileResource extends JsonResource
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
