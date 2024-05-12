<?php

namespace App\Domains\Account\Resources;

use App\Domains\Group\Resources\GroupResource;
use Illuminate\Http\Resources\Json\JsonResource;

class GroupAccountParentsResource extends JsonResource
{

    public function toArray($request)
    {
        $groups = GroupResource::collection($this->resource['groups']);
        $parents = AccountParentsResource::collection($this->resource['parents']);

        $combinedData = $groups->merge($parents);

        return $combinedData;
    }
}
