<?php

namespace App\Domains\Supplier\Request;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Validation\Rule;

class ImportSupplierRequest extends FormRequest
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
