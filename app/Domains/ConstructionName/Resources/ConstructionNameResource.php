<?php

namespace App\Domains\ConstructionName\Resources;

use App\Domains\Account\Resources\AccountResource;
use App\Domains\JournalEntry\Resources\JournalEntryDetailsResource;
use App\Domains\Project\Resources\ProjectResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ConstructionNameResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'creator' => $this->creator,
            'editor' => $this->editor,
            'parent_account_id' =>$this->parent_account_id ,
            'credit_balance' => $this->account?->total_credit_balance,
            'debit_balance' => $this->account?->total_debit_balance,
            'account' => new  AccountResource($this->account),
           /*  'project_id' => $this->project?$this->project->id:null,
            'project_name' => $this->project? $this->project->project_name:null, */
            'journal_entry_details' => $this->account? JournalEntryDetailsResource::collection($this->account->journalEntryDetail):null,
            'balance' => $this->account?->opening_balance,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
