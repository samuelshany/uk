<?php

namespace App\Domains\PaymentType\Request;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePaymentTypeRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $id = request()->id;
        return [
            'name' => "required|unique:payment_types,name,$id",
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
            'account_id.required' => __('The account field is required'),
            'account_id.exists' => __('The account must be exists'),
        ];
    }
}
