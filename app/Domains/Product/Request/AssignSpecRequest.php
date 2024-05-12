<?php

namespace App\Domains\Product\Request;

use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AssignSpecRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rules = [
            'code' => 'max:20',
            // 'specs.selling_price' => 'required',
        ];

        return $rules;
    }

    public function withValidator($validator)
    {
        $criteria = ProductCodeCriteria::first();
        if ($criteria->type == 'manual' && !request()->code) {
            $validator->after(function ($validator) {
                $validator->errors()->add('criteria_type', __('Code required because product code criteria type is manual'));
            });
        }
    }

    public function messages()
    {
        return [
            'specs.required' => __('Please add specification'),
        ];
    }
}
