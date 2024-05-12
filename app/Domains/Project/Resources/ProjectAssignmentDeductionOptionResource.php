<?php

namespace App\Domains\Project\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\DeductionOption\Resources\DeductionOptionResource;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectAssignmentDeductionOptionResource extends JsonResource
{

    public function toArray($request)
    {
        $journal_entry_detail_name= null;
        if($this->pivot->journal_entry_detail_id){
            $journal_entry_detail_name =  JournalEntryDetail::find($this->pivot->journal_entry_detail_id);
        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->pivot->value,
            'journal_entry_detail_id' => $this->pivot->journal_entry_detail_id,
            'journal_entry_detail_name' => $journal_entry_detail_name,

            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
