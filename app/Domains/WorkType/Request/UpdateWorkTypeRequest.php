<?php

namespace App\Domains\WorkType\Request;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class UpdateWorkTypeRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:65000',
        ];
    }


    public function messages()
    {
        return [
            'name.required' => __('Name field is required'),
        ];
    }
}
