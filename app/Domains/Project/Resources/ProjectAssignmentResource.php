<?php

namespace App\Domains\Project\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\DeductionOption\Resources\DeductionOptionResource;
use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectAssignmentResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'reference_number' => $this->reference_number,
            'project_id' => $this->project_id,
            'project_name' => $this->project->project_name,
            'project_phase_id' => $this->project_phase_id,
            'project_phase_name' => $this->projectPhase->name??null,
            'construction_name_id' => $this->construction_name_id,
            'construction_name' => $this->constructionName->name,
            'work_type_id' => $this->workType?$this->work_type_id:null,
            'work_type_name' => $this->workType?$this->workType->name:null,
            'total' => $this->total,
            'total_options' => $this->total_options,
            'total_due' => $this->total_due,

            'work_clauses' => $this->workClauses?WorkClauseResource::collection($this->workClauses):null,
            'deduction_options' => $this->deductionOptions?ProjectAssignmentDeductionOptionResource::collection($this->deductionOptions):null,
            'deduction_options_all' => $this->deductionOptions?DeductionOptionResource::collection($this->deductionOptions):null,
            

            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
