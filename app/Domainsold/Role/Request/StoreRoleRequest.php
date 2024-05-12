<?php

namespace App\Domains\Role\Request;

use Illuminate\Foundation\Http\FormRequest;

class StoreRoleRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|unique:roles',
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,id',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => __('The name field is required'),
            'name.regex' => __('The name must only contain letters'),
            'name.unique' => __('messages.The_name_has_already_been_taken'),
            'permissions.required' => __('The permissions is required'),
            'permissions.array' => __('The permissions must be of type array'),
            'permissions.*.exists' => __('The permissions not exist'),

        ];
    }
}
