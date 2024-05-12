<?php

namespace App\Domains\Project\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\DeductionOption\Resources\DeductionOptionResource;
use App\Domains\Product\Resources\ProductResource;
use App\Domains\ProjectPhase\Resources\ProjectPhaseResource;
use App\Domains\Supplier\Resources\SupplierResource;
use App\Domains\User\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'project_name' =>$this->project_name ,
            'parent_account_id' =>$this->parent_account_id ,
            'client_information_id' =>$this->client_information_id ,
            'client_information_name' =>$this->clientInformation?$this->clientInformation->name:null ,
            'client_information_code' =>$this->clientInformation?$this->clientInformation->code:null ,
            'start_date' =>$this->start_date ,
            'end_date' =>$this->end_date ,
            'project_description' => $this->project_description ,
            'downpayment_option' =>$this->downpayment_option ,
            'downpayment' =>$this->downpayment ,
            'assigned_engineer_id' =>$this->assignedEngineer?$this->assignedEngineer->id:null  ,
            'assigned_engineer_name' =>$this->assignedEngineer?$this->assignedEngineer->name:null ,
            'milestone' =>$this->milestone  ,
            'deadline' =>$this->deadline  ,
            'price' =>$this->price  ,
            'estimated_cost' =>$this->estimated_cost  ,
            'assigned_budget' =>$this->assigned_budget  ,
            /* 'construction_name' =>$this->constructionName?$this->constructionName->name:null,
            'construction_name_id' =>$this->construction_name_id, */
            
            'files' => $this->getMedia('project_attachments')?ProjectFileResource::collection($this->getMedia('project_attachments')):null,
            //'project_assignments' => $this->projectAssignments? ProjectAssignmentResource::collection($this->projectAssignments):null,
            'suppliers' =>$this->suppliers?SupplierResource::collection($this->suppliers):null,
            
            'deduction_options' => $this->projectDeductionOptions? DeductionOptionResource::collection($this->projectDeductionOptions):null,
            'project_phases' => $this->projectPhases? ProjectPhaseResource::collection($this->projectPhases):null,
            'creator' => UserResource::make($this->whenLoaded('creator')),
            'editor' => UserResource::make($this->whenLoaded('editor')),


            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
