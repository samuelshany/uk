<?php

namespace App\Domains\BankAccount\Request;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Validation\Rule;

class StoreBankAccountRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'account_number' => 'required|unique:bank_accounts',
            'holder_name' => 'nullable',
            'account_type' => ['required', Rule::in(['current', 'saving', 'loan', 'dollar', 'salary'])],
            //            'account_id' => 'required|exists:accounts,id',
            'parent_account_id' => 'required|exists:accounts,id',
            'parent_expenses_account_id' => 'required|exists:accounts,id',
            'currency_id' => 'required|exists:currencies,id',
            'opening_balance' => 'required|numeric|gt:0',
            'authorized_by' => 'nullable',

        ];

    }
    public function messages()
    {
        return [
            'name.required' => __('The name field is required'),
            'name.regex' => __('The name must only contain letters'),
            'holder_name.regex' => __('The holder_name must be only contain letters'),
            'authorized_by.regex' => __('The authorized_by must be only contain letters'),
            'currency_id.exists' => __('The currency_id not exist'),
            'account_number.required' => __('The account_number field is required'),
            'account_number.numeric' => __('The account_number must be a number'),
            'account_number.unique' => __('The account_number has already been taken'),
            'opening_balance.required' => __('The opening_balance field is required'),
            'opening_balance.numeric' => __('The opening_balance must be a number'),
            'account_type.rule_in' => __('The selected account type is not supported'),
            'chart_of_account.required' => __('You must choose account.'),
            'chart_of_account.exists' => __('The selected account  does not exist.'),


        ];

    }
}
