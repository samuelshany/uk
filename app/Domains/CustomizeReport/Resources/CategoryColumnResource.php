<?php

namespace App\Domains\CustomizeReport\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryColumnResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            "key"=> $this['id'],
            "label"=> $this['label'],       
            "value"=> $this['label'],
        ];
    }
}
