<?php

namespace App\Domains\Product\Request;

use App\Domains\Product\Models\Product;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class UpdateProductRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rules = [
            // 'code' => 'required',
            'name' => 'required|max:255',
            'description' => 'nullable|max:500',
            'taxes_id' => 'nullable|exists:taxes,id',

            'category_id' => 'nullable|exists:categories,id',
            'unit_id' => 'nullable|exists:unit_types,id',
            'brand_id' => 'nullable|exists:brands,id',
            'suppliers' => 'nullable|exists:suppliers,id',

            'specs' => 'nullable',
            // 'specs.*.name' => 'string',
            // 'specs.*.value' => 'string',
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
        $product = Product::find(request()->id);
        if ($product) {
            $usedInPurchases = DB::table('purchase_products')
                ->where('product_id', request()->id)
                ->exists();

            if ($usedInPurchases) {
                $validator->after(function ($validator) {
                    $validator->errors()->add('product_used_in_purchase', __('The product has been used in at least one purchase.'));
                });
            }
        }
    }

    public function messages()
    {
        return [
            'category_id.required' => __('category field is required'),
            'category_id.exists' => __('The selected category does not exist'),
            'brand_id.exists' => __('The selected brand does not exist'),
            'taxes_id.required' => __('taxes field is required'),
            'unit_id.required' => __('units field is required'),
            'decimal' => __('The field must be decimal and in format 00.00'),
            'specs.required' => __('Add at least on product specification'),
        ];
    }
}
