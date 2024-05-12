<?php

namespace App\Domains\JournalEntry\Resources;

use App\Domains\User\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TrialBalanceSheetResource extends JsonResource
{

    public function toArray($request)
    {
        $opening_balance_credit = 0;
        $opening_balance_debit =0;
        
        $credit_journal_entries = $this->pluck('journalEntryDetail')->flatten()->sum('credit');
        $debit_journal_entries = $this->pluck('journalEntryDetail')->flatten()->sum('debit');

       
        $debit_balance = 0;
        $credit_balance = 0;
        $debit_balance_all = 0;
        $credit_balance_all = 0;
        /* if($total_credit>$total_debit){
            $credit_balance = $total_credit - $total_debit;
        }else{
            $debit_balance = $total_debit - $total_credit;
            
        } */
        
        foreach($this->resource as $account){
            $credit_balance_all = $account->journalEntryDetail->sum('credit');
            $debit_balance_all = $account->journalEntryDetail->sum('debit');
            if($request->from<=$account->created_at){
                $opening_balance_credit += $account->opening_balance_credit;
                $opening_balance_debit += $account->opening_balance_debit;

                $credit_balance_all +=  $account->opening_balance_credit;
                $debit_balance_all += $account->opening_balance_debit;
            }

            if($credit_balance_all>$debit_balance_all){
                $credit_balance += $credit_balance_all - $debit_balance_all;
            }else{
                $debit_balance += $debit_balance_all - $credit_balance_all;

            }

        }
        $total_credit =$opening_balance_credit + $credit_journal_entries;
        $total_debit =$opening_balance_debit + $debit_journal_entries;
        
        return [
            'accounts' => AccountsTrialBalanceSheetResource::collection($this),
            'opening_balance_credit' =>number_format( $opening_balance_credit,2),
            'opening_balance_debit' => number_format($opening_balance_debit,2),
            'credit_journal_entries' => number_format($credit_journal_entries,2),
            'debit_journal_entries' => number_format($debit_journal_entries,2),
            'total_credit' => number_format($total_credit,2),
            'total_debit' => number_format($total_debit,2),
            'total_credit_balance'=> $credit_balance,
            'total_debit_balance'=> $debit_balance

        ];
    }
}
