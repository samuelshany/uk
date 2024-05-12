<?php

namespace App\Domains\JournalEntry\Resources;

use App\Domains\User\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AccountsTrialBalanceSheetResource extends JsonResource
{

    public function toArray($request)
    {
        $opening_balance_credit = 0;
        $opening_balance_debit = 0;
        if($request->from<=$this->created_at){
            $opening_balance_credit= $this->opening_balance_credit;
            $opening_balance_debit= $this->opening_balance_debit;
        }
        $credit_journal_entries = $this->journalEntryDetail->sum('credit');
        $debit_journal_entries = $this->journalEntryDetail->sum('debit');

        $total_credit = $credit_journal_entries +$opening_balance_credit;
        $total_debit = $debit_journal_entries +$opening_balance_debit;
        
        $debit_balance = 0;
        $credit_balance = 0;
        if($total_credit>$total_debit){
            $credit_balance = $total_credit - $total_debit;
        }else{
            $debit_balance = $total_debit - $total_credit;

        }

        return [
            'id'      => $this->id,
            'code'    => $this->code,
            'name'    => $this->name,
            'opening_balance_credit'=> $opening_balance_credit,
            'opening_balance_debit'=> $opening_balance_debit,
            'credit_journal_entries'=> number_format($credit_journal_entries,2),
            'debit_journal_entries'=> number_format($debit_journal_entries,2),
//            'balance' => $this->opening_balance
//                + $this->journalEntryDetail->sum('credit')
//                - $this->journalEntryDetail->sum('debit'),
//            'opening_balance' => $this->opening_balance,
            'total_credit' =>number_format( $total_credit,2),
            'total_debit' => number_format($total_debit,2),
            'total_credit_balance'=> number_format($credit_balance,2),
            'total_debit_balance'=> number_format($debit_balance,2),
        ];
    }
}
