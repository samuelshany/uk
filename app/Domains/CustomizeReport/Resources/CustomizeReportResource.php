<?php

namespace App\Domains\CustomizeReport\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomizeReportResource extends JsonResource
{
    
    public function toArray($request)
    {
        return [
            "key"=> $this->id,
            "label"=> $this->name,
            "value"=> $this->name,
            "children" => ModuleCategoryResource::collection($this->permissionCategories),

        ];
    }
}
