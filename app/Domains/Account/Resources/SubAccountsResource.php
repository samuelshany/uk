<?php

namespace App\Domains\Account\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubAccountsResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'change_currency' => $this->change_currency,
            'name_code' => $this->name . '-' . $this->code,
            'old_code' => $this->old_code ?? '',
            'group' => $this->group ? $this->group->name: $this->findBaseParent($this)->group->name ??'',
            'group_id' => $this->group_id?$this->group_id:$this->findBaseParent($this)->group_id?? '',
            'parent' => $this->parent ? $this->parent->name ?? '' : '',
            'parent_id' => $this->parent ? $this->parent->id ?? '' : '',
            'is_parent' => $this->is_parent,
            'opening_balance_credit' => $this->opening_balance_credit,
            'opening_balance_debit' => $this->opening_balance_debit,
            'credit_journal_entries' => $this->credit_journal_entries,
            'debit_journal_entries' => $this->debit_journal_entries,
            'total_credit' => $this->total_credit,
            'total_debit' => $this->total_debit,
            'total_credit_balance' => $this->total_credit_balance,
            'total_debit_balance' => $this->total_debit_balance,
            'opening_balance' => $this->opening_balance,
            'account_type' => $this->account_type,
            'icon' => $this->icon,
            'children' => AccountResource::collection($this->whenLoaded('children')),
            'creator' => $this->whenLoaded('creator', $this->creator->name ?? ''),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }

    private function findBaseParent($account)
    {
        // Recursive function to find the top-level parent
        if ($account->parent) {
            return $this->findBaseParent($account->parent);
        }

        return $account;
    }
}
