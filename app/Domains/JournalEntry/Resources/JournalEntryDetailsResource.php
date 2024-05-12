<?php

namespace App\Domains\JournalEntry\Resources;

use App\Domains\Account\Resources\AccountResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Domains\JournalEntry\Resources\JorrnalEntryDetailsFileResource;

class JournalEntryDetailsResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'account_id' => $this->account_id,
            'account' => AccountResource::make($this->whenLoaded('account')),
            'debit' => $this->debit,
            'credit' => $this->credit,
            'currency_id' => $this->currency_id??null,
            'currency_name' => $this->currency->name??null,
            'currency_rate' => $this->currency_rate??'',
            'saved' => $this->saved,
            'files' => $this->getMedia('journal_entry_details_attachments')?JorrnalEntryDetailsFileResource::collection($this->getMedia('journal_entry_details_attachments')):null,
            'journal_entry_id' => $this->journal_entry_id,
            'description' => $this->description??'',
            'entry_no_credit' => 'entry-no-'.$this->journalEntry->entry_no.'='.$this->credit,
        ];
    }
}
