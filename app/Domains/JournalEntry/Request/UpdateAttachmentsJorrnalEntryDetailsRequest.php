<?php

namespace App\Domains\Customer\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAttachmentsJorrnalEntryDetailsRequest extends FormRequest
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
