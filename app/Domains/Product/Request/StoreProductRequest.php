<?php

namespace App\Domains\Product\Request;

use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProductRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        $rules = [
            'name' => 'required|max:255',
            'description' => 'nullable|max:500',
            'taxes_id' => 'nullable|exists:taxes,id',

            'category_id' => 'nullable|exists:categories,id',
            'unit_id' => 'nullable|exists:unit_types,id',
            'brand_id' => 'nullable|exists:brands,id',
            'suppliers' => 'nullable|exists:suppliers,id',

            // 'specs' => 'required|array',
            // 'specs.selling_price' => 'required',
        ];

        $checkCodeCriteriaCategory = ProductCodeCriteria::where('type', 'alphanumeric')->where('category', 1)->first();
        $checkCodeCriteriaUnit = ProductCodeCriteria::where('type', 'alphanumeric')->where('unitType', 1)->first();
        $checkCodeCriteriaBrand = ProductCodeCriteria::where('type', 'alphanumeric')->where('brand', 1)->first();
        $checkCodeCriteriaSupplier = ProductCodeCriteria::where('type', 'alphanumeric')->where('supplier', 1)->first();
        if ($checkCodeCriteriaCategory) {
            $rules['category_id'] .= '|required';
        }
        if ($checkCodeCriteriaUnit) {
            $rules['unit_id'] .= '|required';
        }
        if ($checkCodeCriteriaBrand) {
            $rules['brand_id'] .= '|required';
        }
        if ($checkCodeCriteriaSupplier) {
            $rules['suppliers'] .= '|required';
        }

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
            'name.required' => __('Name field is required'),
            'category_id.exists' => __('The selected category does not exist'),
            'brand_id.exists' => __('The selected brand does not exist'),
            'supplier_id.exists' => __('The selected supplier does not exist'),
            'opening_stock.required' => __('Opening stock field is required'),
            'decimal' => __('The field must be decimal and in format 00.00'),
            'specs.required' => __('Add at least on product specification'),
        ];
    }
}
