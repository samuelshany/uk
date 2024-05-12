<?php

namespace App\Domains\Category\Request;

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
        ];
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
