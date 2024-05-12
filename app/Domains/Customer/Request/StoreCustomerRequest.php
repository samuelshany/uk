<?php

namespace App\Domains\Customer\Request;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rule = [];
        if (!request()->is_same_shipping_address) {
            $rule = [
                'billing_address' => 'required_if:is_same_shipping_address,=,0|max:200',
                'billing_country_id' => 'required_if:is_same_shipping_address,=,0|exists:countries,id',
                'billing_state_id' => 'required_if:is_same_shipping_address,=,0|exists:states,id',
                'billing_city_id' => 'required_if:is_same_shipping_address,=,0|exists:cities,id',
                'billing_zip_code' => 'required_if:is_same_shipping_address,=,0',
            ];
        }
        return $rule + [
            'name' => 'required',
            'contact' => 'required|digits:11|starts_with:010,011,012,015|numeric|unique:customers',
            'email' => 'required|email',
          /*   'currency_id' => 'required|exists:currencies,id', */
            'discount' =>'nullable|string',
            'address' => 'required|max:200',
            'state_id' => 'required|exists:states,id',
            'country_id' => 'nullable|exists:countries,id',
            'city_id' => 'required|exists:cities,id',
            'zip_code' => 'required',
            'parent_account_id' => 'required|exists:accounts,id',
            'is_same_shipping_address' => 'required|integer|between:0,1',
            'credit_limit' => 'nullable|max:9999999999999',
            'user_id'=>'nullable|exists:users,id',
            'files.*' => 'file|mimes:jpeg,png,jpg,xlsx,csv,xls,pdf,doc,docx|max:100000',
            'currencies.*' => 'exists:currencies,id',
            'payment_types.*' => 'exists:payment_types,id',
            
        ];
    }

    public function messages()
    {
        return [
            'name.required' => __('The name field is required'),
            'name.regex' => __('The name must only contain letters'),
            'contact.required' => __('The contact field is required'),
            'email.required' => __('The email field is required'),
            /* 'currency_id.required' => __('The currency field is required'), */
            'address.required' => __('The address field is required'),
            'parent_account_id.required' => __('The parent account field is required'),

        ];
    }
}
