<?php

namespace App\Domains\SalesConfigurationState\Request;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class StoreSalesConfigurationStateRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'status_name' => 'required|string|max:255',
            'color' => 'required|string|max:60000',
            'final_state' => 'nullable|between: 0,1',
        ];
    }

    public function messages()
    {
        return [
            'status_name.required' => __('Status name is required'),
            'status_name.string' => __('Status name must be string'),
            'color.required' => __('Color is required'),
            'color.string' => __('Color does must be string'),
        ];
    }
}
