<?php

namespace App\Domains\Clause\Request;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class UpdateClauseRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'name' => 'required|string|max:255',
            'parent_account_id' => 'required|exists:accounts,id',
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
