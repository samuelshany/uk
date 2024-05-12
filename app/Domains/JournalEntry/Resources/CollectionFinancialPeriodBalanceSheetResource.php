<?php

namespace App\Domains\JournalEntry\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionFinancialPeriodBalanceSheetResource extends JsonResource
{

    public function toArray($request)
    {
        $data = collect(['assets' => $this['assets'], 'liabilities' => $this['liabilities'], 'equity' => $this['equity']]);
        
        return [
            'financial_period' => $this['financial_period'],
            'year_number' => $this['year_number'],
           /*  'assets' => $this['assets'],
            'liabilities' => $this['liabilities'],
            'equity' => $this['equity'], */
            'group_type'=> new CollectionBalanceSheetResource($data),
        ];
    }
}