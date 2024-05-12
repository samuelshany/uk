<?php

namespace App\Domains\JournalEntry\Resources;

use App\Domains\Account\Models\Account;
use App\Domains\User\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class GroupsBalanceSheetResource extends JsonResource
{

    public function toArray($request)
    {
        $opening_balance_debit = 0;
        $opening_balance_credit = 0;

        foreach ($this->accounts as $account){
            if($request->from<$account->created_at){
                $opening_balance_debit += $account->opening_balance_debit;
                $opening_balance_credit += $account->opening_balance_credit;
            }

        }

        return [
            'id'       => $this->id,
            'code'       => $this->code,
            'name'     => $this->name,
            //'accounts' => AccountsBalanceSheetResource::collection($this->accounts),
            'total'  => 
            number_format(($opening_balance_debit +
                    $this->accounts->pluck('journalEntryDetail')->flatten()->sum('debit')) -
                    ($this->accounts->pluck('journalEntryDetail')->flatten()->sum('credit') +
                    $opening_balance_credit),2),

        ];
    }
}
