<?php

namespace App\Domains\Currency\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HistoryChangeRateResource extends JsonResource
{

    public function toArray($request)
    {
    
        return [
            'id' => $this->id,
            'name' => $this->currency->name,
            'code' => $this->currency->code,
            'symbol' => $this->symbol,
            'price_rate' => $this->price_rate,
            'backup_changes' => $this->backup_changes,
            'price' => $this->price,
            'editor' => $this->editor->name ?? null,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
