<?php

namespace App\Domains\Account\Request;

use App\Domains\Account\Models\Account;
use App\Domains\Group\Models\Group;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use \Illuminate\Validation\Rule;

class UpdateAccountRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules(Request $request)
    {
        return [
            'name' => 'required',
            // 'group_id'        => 'required_if:is_parent,eq,1|nullable|exists:groups,id',
            'opening_balance' => 'numeric',
            'account_type' => ['required', Rule::in(['debit', 'credit', 'both'])],
            // 'parent_id'       => 'required_if:is_parent,eq,0|nullable|exists:accounts,id',
            'is_parent' => ['nullable', Rule::in([0, 1])],
            'icon' => 'nullable',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            
            if (request()->is_parent == 1) {
                if (request()->group_id) {
                    $parentAccount = Account::where('group_id', request()->group_id)->first();
                    if ($parentAccount->children) {
                        if (count($parentAccount->children) > 0) {
                            $validator->errors()->add('account_id', 'Can not update account, because it has children');
                        }
                    }
                } elseif (request()->parent_account_id) {
                    $parentAccount = Account::find(request()->parent_account_id);

                    if ($parentAccount->children) {
                        if ( count($parentAccount->children)  > 0) {
                            $validator->errors()->add('account_id', 'Can not update account, because it has children');
                        }
                    }
                }
            } else {
                $account = Account::findOrFail($this->id);
                if ($account->journalEntryDetail->count() > 0) {
                    $validator->errors()->add('account_id', 'Can not update account, because it has transactions');
                    return;
                }
            }
        });
    }

    public function messages()
    {
        return [
            'name.required' => 'Account name is required',
            'group_id.required' => 'Account group is required',
            'group_id.exists' => 'Account group is invalid',
            'opening_balance.numeric' => 'Opening balance must be a number',
            'account_type.required' => 'Account type is required',
            'account_type.in' => 'Account type is invalid',
            'parent_id.exists' => 'Parent account is invalid',
            'is_parent.in' => 'Invalid Parent format',
        ];
    }
}
