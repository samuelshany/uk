<?php

namespace App\Domains\Group\Request;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Validation\Rule;

class ImportGroupRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [

            'file' => 'required|file',

        ];

    }
    public function messages()
    {
        return [

        ];

    }
}
