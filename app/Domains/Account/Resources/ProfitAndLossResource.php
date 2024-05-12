<?php

namespace App\Domains\Account\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfitAndLossResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'account_for'=>$this->account_for,
            'current_amount'=>$this->current_amount,
            'total_amount'=>$this->total_amount,
            'code' => $this->code,
            'name' => $this->name,
            'change_currency' => $this->change_currency,
            'name_code' => $this->name . '-' . $this->code,
            'old_code' => $this->old_code ?? '',
            'group' => $this->account->group->name ?? '',
            'group_id' => $this->account->group_id ?? '',
            'parent' => $this->parent_account_id ? $this->parent->name ?? '' : '',
            'parent_id' => $this->parent_account_id ??'',
            'is_parent' => $this->account->is_parent,
            'opening_balance_credit' => $this->account->opening_balance_credit,
            'opening_balance_debit' => $this->account->opening_balance_debit,
            'credit_journal_entries' => $this->account->credit_journal_entries,
            'debit_journal_entries' => $this->account->debit_journal_entries,
            'total_credit' => $this->account->total_credit,
            'total_debit' => $this->account->total_debit,
            'total_credit_balance' => $this->account->total_credit_balance,
            'total_debit_balance' => $this->account->total_debit_balance,
            'opening_balance' => $this->account->opening_balance,
            'account_type' => $this->account->account_type,
            'creator' => $this->account->creator->name ?? '',
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }

  
}
