<?php

namespace App\Domains\UnitType\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUnitTypeRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => "required|max:50",
            'description' => 'max:200',
        ];
    }
    public function messages()
    {
        return [
            'name.regex' => __('The name contins invalid letter'),
            'currency_id.exists' => __('The currency not supported'),
        ];
    }
}
