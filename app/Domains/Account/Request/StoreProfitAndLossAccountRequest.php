<?php

namespace App\Domains\Account\Request;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Validation\Rule;

class StoreProfitAndLossAccountRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'profit_loss' => 'required|string|max:255',
            'profit_loss_parent_id' => 'required|exists:accounts,id',
            'retained_earning' => 'required|string|max:255',
            'retained_earning_parent_id' => 'required|exists:accounts,id',
        ];

    }
    public function messages()
    {
        return [
            'profit_loss.required' => 'Account profit and loss name is required',
            'retained_earning.required' => 'Account retained earning name is required',
            'profit_loss_parent_id.required' => 'Perent account for profit and loss is required',
            'profit_loss_parent_id.exists' => 'Perent account for profit and loss is invalid',
            'retained_earning_parent_id.required' => 'Perent account for retained earning required',
            'retained_earning_parent_id.exists' => 'Perent account for retained earning is invalid',
        ];

    }
}
