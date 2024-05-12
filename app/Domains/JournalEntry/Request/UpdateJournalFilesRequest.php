<?php

namespace App\Domains\JournalEntry\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJournalFilesRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'invoice_image.*' => 'nullable|file|mimes:jpeg,png,jpg,gif,pdf,doc,docx,xls,xlsx|max:2048',
            'mediaId.*' => ['integer'],
        ];
    }
}
