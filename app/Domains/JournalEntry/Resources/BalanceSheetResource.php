<?php

namespace App\Domains\JournalEntry\Resources;

use App\Domains\User\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class BalanceSheetResource extends JsonResource
{

    public function toArray($request)
    {
        $opening_balance_debit = 0;
        $opening_balance_credit = 0;
        $group_credit = 0;
        $group_debit = 0;
        if($this->groups){
            foreach ($this->groups as $group){
                foreach ($group->accounts as $account){
                    if($request->from<$account->created_at){
                        $opening_balance_debit += $account->opening_balance_debit;
                        $opening_balance_credit += $account->opening_balance_credit;
                    }
                }
            }
            $group_debit =  $this->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('debit');
            $group_credit =  $this->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('credit');
        }

        return [
            'groups' => GroupsBalanceSheetResource::collection($this->groups),
            'total'  => 
                number_format(($opening_balance_debit +
           $group_debit) -
            ($group_credit +
            $opening_balance_credit),2) , 
        ];
    }
}
