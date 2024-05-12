<?php

namespace App\Domains\ProductCodeCriteria\Request;

use App\Domains\Product\Models\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProductCodeCriteriaRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'type' => ['required', Rule::in(['manual', 'numeric', 'alphanumeric'])],
            'start_index' => 'required_if:type,numeric,alphanumeric',
            'delimiter' => 'nullable',
            'supplier' => 'nullable',
            'supplier_delimiter_position' => 'nullable',
            'category' => 'nullable',
            'category_delimiter_position' => 'nullable',
            'brand' => 'nullable',
            'brand_delimiter_position' => 'nullable',
            'unitType' => 'nullable',
            'unitType_delimiter_position' => 'nullable',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $count = Product::count();
            if ($count > 0) {
                $validator->errors()->add('products_exists', __('Can not update criteria'));
                return;
            }
        });
    }

    public function messages()
    {
        return [
            'type.required' => __('Criteria type criteria field is required'),
        ];
    }
}
