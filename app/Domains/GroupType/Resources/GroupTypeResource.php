<?php

namespace App\Domains\GroupType\Resources;

use App\Domains\Group\Resources\GroupResource;
use Illuminate\Http\Resources\Json\JsonResource;

class GroupTypeResource extends JsonResource
{

    public function toArray($request)
    {
        $group_type = '';
        switch($this->name){
            case 'Assets':
                $group_type = __('group-type.assets');
                break;
            case 'Liabilities':
                $group_type = __('group-type.liabilities');
                break;
            case 'Equity':
                $group_type = __('group-type.equity');
                break;
            case 'Revenue':
                $group_type = __('group-type.revenue');
                break;
            case 'Expenses':
                $group_type = __('group-type.expenses');
                break;

            default:
                $group_type = $this->name;
                break;
        }
        return [
            'id' => $this->id,
            'name' => $group_type,
            'isFixed' => $this->is_fixed,
            'code' => $this->code,
            'creator' => $this->creator->name ?? null,
            'children' => GroupResource::collection($this->whenLoaded('groups')),
            'icon' => $this->icon,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
