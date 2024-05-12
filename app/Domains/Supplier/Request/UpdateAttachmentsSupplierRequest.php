<?php

namespace App\Domains\Supplier\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAttachmentsSupplierRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'files.*' => 'file|mimes:jpeg,png,jpg,xlsx,csv,xls,pdf,doc,docx|max:100000',
        ];
    }
    public function messages()
    {
        return [
        ];
    }
}
