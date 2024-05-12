<?php

namespace App\Domains\RequestQuotation\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequestQuotationRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'supplier_total' => 'required|numeric|gt:0|max:99999999999',
        ];
    }

    public function messages()
    {
        return [
            'supplier_total.required' => __('Field is required'),
            'supplier_total.numeric' => __('Total must be a number greater than 0'),
            'supplier_total.gt' => __('Total must be a number greater than 0'),
        ];
    }
}
