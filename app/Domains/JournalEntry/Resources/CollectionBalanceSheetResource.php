<?php

namespace App\Domains\JournalEntry\Resources;

use App\Domains\User\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CollectionBalanceSheetResource extends JsonResource
{

    public function toArray($request)
    {
        $opening_balance_debit_equity = 0;
        $opening_balance_credit_equity = 0;
        $opening_balance_debit_liabilities = 0;
        $opening_balance_credit_liabilities = 0;
        $equity_credit = 0;
        $equity_debit = 0;
        $liabilities_credit = 0;
        $liabilities_debit = 0;
        if($this['equity']&&$this['equity']->groups ){
            foreach ($this['equity']->groups as $group){
                foreach ($group->accounts as $account){
                    if($request->from<$account->created_at){
                        $opening_balance_debit_equity += $account->opening_balance_debit;
                        $opening_balance_credit_equity += $account->opening_balance_credit;
                    }
                }
            }
            $equity_debit =  $this['equity']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('debit');
            $equity_credit =  $this['equity']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('credit');

        }

        if($this['liabilities']&&$this['liabilities']->groups ){
            foreach ($this['liabilities']->groups as $group){
                foreach ($group->accounts as $account){
                    if($request->from<$account->created_at){
                        $opening_balance_debit_liabilities += $account->opening_balance_debzit;
                        $opening_balance_credit_liabilities += $account->opening_balance_credit;
                    }
                }
            }
            $liabilities_debit = $this['liabilities']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('debit');
            $liabilities_credit = $this['liabilities']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('credit');
        }
        return [
            'assets' => new BalanceSheetResource($this['assets']),
            'liabilities' => new BalanceSheetResource($this['liabilities']),
            'equity' => new BalanceSheetResource($this['equity']),
            'liabilities_plus_equity' =>
            number_format((($opening_balance_debit_equity +
                $equity_debit)-
                ($opening_balance_credit_equity +
                $equity_credit)) +
                (($opening_balance_debit_liabilities +
                $liabilities_debit)-
                ($liabilities_credit +
                $opening_balance_credit_liabilities)),2)??null,
        ];
    }
}
