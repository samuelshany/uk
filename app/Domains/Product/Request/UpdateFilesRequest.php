<?php

namespace App\Domains\Product\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFilesRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'specs_images.*' => 'nullable|file|mimes:jpeg,png,jpg,gif,pdf,doc,docx,xls,xlsx|max:2048',
            'mediaId.*' => ['integer'],
        ];
    }
}
