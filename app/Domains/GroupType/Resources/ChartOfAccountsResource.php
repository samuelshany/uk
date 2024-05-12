<?php

namespace App\Domains\GroupType\Resources;

use App\Domains\Group\Resources\GroupResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ChartOfAccountsResource extends JsonResource
{

    public function toArray($request)
    {
        $group_type = null;
        if($this->id<10){
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
        }
        return [
            'id' => $this->id,
            'label' => $group_type??$this->name,
            'icon' => $this->icon,
            'children' => ChartOfAccountsResource::collection($this->whenLoaded('children')),
        ];
    }
}
