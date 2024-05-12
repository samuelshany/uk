<?php

namespace App\Domains\Customer\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAssignUserCustomerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'user_id' => 'required|exists:users,id',
        ];
    }
    public function messages()
    {
        return [
            'user_id.required' => __('The name field is required'),
        ];
    }
}
