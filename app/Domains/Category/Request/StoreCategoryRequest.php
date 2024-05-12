<?php

namespace App\Domains\Category\Request;

use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Validation\Rule;

class StoreCategoryRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|max:50',
            'description' => 'max:200',
            'parent_id' => [
                'nullable',
                'exists:categories,id',
            ],
            'prefix' => 'nullable|alpha|unique:categories,prefix|max:10',
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
            'name.regex' => __('The name contain invalid letters'),
            'name.required' => __('The name field is required'),
            'parent_id.exists' => __('The parent not exist'),

        ];
    }
}
