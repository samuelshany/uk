<?php

namespace App\Domains\Project\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectFileResource extends JsonResource
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
