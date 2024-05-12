<?php

namespace App\Domains\Project\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkClauseResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'project_assignment_id' => $this->project_assignment_id,
            'quantity' => $this->quantity,
            'clause_id' => $this->clause_id,
            'clause_name' => $this->clause->name,
            'unit_id' => $this->unit_id,
            'unit_name' => $this->unit->name,
            'project_management_category_id' => $this->project_management_category_id,
            'project_management_category_name' => $this->projectManagementCategory->name,
            'ratio' => $this->ratio,
            'previous_amount' => $this->previous_amount,
            'current_amount' => $this->current_amount,
            'total_amount' => $this->total_amount,
            'price' => $this->price,
            'total_price' => $this->total_price,
            'notes' => $this->notes??'',
            

            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
