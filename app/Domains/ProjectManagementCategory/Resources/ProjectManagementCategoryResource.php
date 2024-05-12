<?php

namespace App\Domains\ProjectManagementCategory\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectManagementCategoryResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'creator' => $this->creator,
            'editor' => $this->editor,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
