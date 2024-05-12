<?php

namespace App\Domains\UnitType\Request;

use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Foundation\Http\FormRequest;

class StoreUnitTypeRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => "required|alpha|max:50",
            'description' => 'max:200',
            'prefix' => 'nullable|unique:unit_types,prefix|max:10',
        ];
    }

    public function withValidator($validator)
    {
        $criteria = ProductCodeCriteria::all();
        if (count($criteria) == 0) {
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
