<?php

namespace App\Domains\Account\Request;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Validation\Rule;

class ImportAccountRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'file' => 'required|mimes:xlsx,csv,xls',
        ];
    }

    public function messages()
    {
        return [
            'file.required' => 'Please upload file',
            'file.mimes' => 'Please upload file in .xlsx, .csv, .xls format',
        ];
    }
}
