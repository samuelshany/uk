<?php

namespace App\Domains\JournalEntry\Resources;

use App\Domains\User\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class JournalEntryResource extends JsonResource
{

    public function toArray($request)
    {
        $invoiceFiles = [];

        foreach ($this->getMedia('journalEntryImages') as $media) {
            $invoiceFiles[] = (object)[
                'url' => $media->getFullUrl(),
                'id' => $media->id,
                'mime_type' => $media->mime_type,
            ];
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'entry_no' => $this->entry_no,
            'date' => $this->date,
            'editable' => $this->editable,
            'description' => $this->description??'',
            'creator' => UserResource::make($this->whenLoaded('creator')),
            'creator_id' => $this->creator_id,
            'details' => JournalEntryDetailsResource::collection($this->whenLoaded('details')),
            'total_debit' => $this->total_debit,
            'total_credit' => $this->total_credit,
            'invoice_image' => $invoiceFiles,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
