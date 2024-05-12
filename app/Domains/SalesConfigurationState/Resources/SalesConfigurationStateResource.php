<?php

namespace App\Domains\SalesConfigurationState\Resources;

use App\Domains\Currency\Resources\CurrencyResource;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\Product\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesConfigurationStateResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'status_name'=>$this->status_name,
            'color'=>$this->color,
            'final_state'=>$this->final_state,
            'creator' => $this->creator,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
