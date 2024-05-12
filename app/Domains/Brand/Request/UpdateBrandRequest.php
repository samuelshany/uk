<?php

namespace App\Domains\Brand\Request;

use App\Domains\Brand\Models\Brand;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Foundation\Http\FormRequest;

class UpdateBrandRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => "required|max:255",
            'prefix' => 'nullable|unique:brands,prefix,' . $this->route('id') . '|max:10',
            'description' => 'max:200'
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $criteria = ProductCodeCriteria::first();
            if ($criteria && $criteria->brand == 1) {
                $brand = Brand::find($this->route('id'));
                if ($brand->prefix != request()->prefix) {
                    $validator->errors()->add('criteria_exist', __('Can not update, it used in product code criteria'));
                }
            }
        });
    }

    public function messages()
    {
        return [
            'name.regex' => __('The name contins invalid letter'),
            'prefix.unique' => __('The prefix must be unique'),
        ];
    }
}
