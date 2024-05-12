<?php

namespace App\Domains\Account\Resources;

use App\Domains\Account\Models\Account;
use App\Domains\Group\Resources\GroupResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AccountResource extends JsonResource
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
            'group' => $this->group ? $this->group->name : $this->findBaseParent($this)->group->name ?? '',
            'group_id' => $this->group_id ? $this->group_id : $this->findBaseParent($this)->group_id ?? '',
            'group' => $this->group_id ? $this->group->name :null,
            'parent' => $this->parent ? $this->parent->name ?? '' : '',
            'parent_id' => $this->parent ? $this->parent->id ?? '' : '',
            'is_parent' => $this->is_parent,
            'parent_code' => $this->parent?$this->parent->code:$this->group->code,
            'opening_balance_credit' => $this->is_parent == 0 ? $this->opening_balance_credit : $this->total($this->id, 'opening_balance_credit'),
            'opening_balance_debit' => $this->is_parent == 0 ? $this->opening_balance_debit : $this->total($this->id, 'opening_balance_debit'),
            'credit_journal_entries' => $this->is_parent == 0 ? $this->credit_journal_entries : $this->total($this->id, 'credit_journal_entries'),
            'debit_journal_entries' => $this->is_parent == 0 ? $this->debit_journal_entries : $this->total($this->id, 'debit_journal_entries'),
            'total_credit' => $this->is_parent == 0 ? $this->total_credit : $this->total($this->id, 'total_credit'),
            'total_debit' => $this->is_parent == 0 ? $this->total_debit : $this->total($this->id, 'total_debit'),
            'total_credit_balance' => $this->is_parent == 0 ? $this->total_credit_balance : $this->totalBalance($this->total($this->id, 'total_credit'), $this->total($this->id, 'total_debit')),
            'total_debit_balance' => $this->is_parent == 0 ? $this->total_debit_balance : $this->totalBalance($this->total($this->id, 'total_debit'), $this->total($this->id, 'total_credit')),
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

    private function total($id, $column_name)
    {
        $sum = Account::where('parent_id', $id)->sum($column_name);
        return $sum;
    }

    private function totalBalance($num1, $num2)
    {
        $result = $num1 - $num2;
        if ($result < 0) {
            return 0;
        }
        return $result;
    }
}
