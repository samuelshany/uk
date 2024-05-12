<?php

namespace App\Domains\PaymentType\Request;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePaymentTypeRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|unique:payment_types,name',
            'accounts' => [
                'required',
                // Rule::exists('accounts', 'id'),
            ],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => __('The name field is required'),
            'name.regex' => __('The name must only contain letters'),
            'name.unique' => __('The name field must be unique'),
            'accounts.required' => __('The account field is required'),
            'accounts.exists' => __('The account must be exists'),
        ];
    }
}
