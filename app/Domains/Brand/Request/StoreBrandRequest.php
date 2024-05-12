<?php

namespace App\Domains\Brand\Request;

use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Foundation\Http\FormRequest;

class StoreBrandRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => "required|max:255",
            'prefix' => 'nullable|unique:brands,prefix|max:10',
            'description' => 'max:200'
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
            'prefix.unique' => __('The prefix must be unique'),
        ];
    }
}
