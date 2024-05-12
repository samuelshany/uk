<?php

namespace App\Domains\Supplier\Request;

use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Foundation\Http\FormRequest;

class StoreSupplierRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => "required",
            'email' => 'required|email|max:100|unique:suppliers',
            'contact' => 'required|min:5|max:20|unique:suppliers',
            'address' => 'required|min:5|max:100',
            'zip_code' => 'required|min:2|max:50',
            'currency_id' => 'required|exists:currencies,id',
            'city_id' => 'required|exists:cities,id',
            'state_id' => 'required|exists:states,id',
            'country_id' => 'nullable|exists:countries,id',
            'tax_id' => 'nullable|exists:taxes,id',
            'parent_account_id' => 'required|numeric|exists:accounts,id',
            'prefix' => 'nullable|alpha|unique:suppliers,prefix|max:10',
        ];
    }

    public function withValidator($validator)
    {
        $criteria = ProductCodeCriteria::first();
        if (!$criteria) {
            $validator->after(function ($validator) {
                $validator->errors()->add('criteria_not_exist', __('Can not create, Set product code criteria first'));
            });
        }

    }

    public function messages()
    {
        return [
            'name.regex' => __('The name contins invalid letter'),
            'currency_id.exists' => __('The currency not supported'),
        ];
    }
}
