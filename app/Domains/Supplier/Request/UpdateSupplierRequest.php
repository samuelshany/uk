<?php

namespace App\Domains\Supplier\Request;

use App\Domains\Product\Models\Product;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use App\Domains\Supplier\Models\Supplier;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSupplierRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => "required",
            'email' => 'required|email|max:100',
            'contact' => 'required|min:5|max:20|unique:suppliers,contact,'.$this->id,
            'address' => 'required|min:5|max:100',
            'zip_code'=>'required|min:2|max:50',
            'currency_id' => 'nullable|exists:currencies,id',
            'city_id' => 'required|exists:cities,id',
            'state_id' => 'required|exists:states,id',
            'country_id' => 'required|exists:countries,id',
            'tax_id' => 'nullable|exists:taxes,id',
            'parent_account_id' => 'required|numeric|exists:accounts,id',
            'prefix' => 'nullable|alpha|unique:suppliers,prefix,' . $this->route('id') . '|max:10',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $criteria = ProductCodeCriteria::first();
            if ($criteria && $criteria->supplier == 1) {
                $supplier = Supplier::find($this->route('id'));
                if ($supplier->prefix != request()->prefix) {
                    $validator->errors()->add('criteria_exist', __('Can not update, it used in product code criteria'));
                }
            }
        });
    }

    public function messages()
    {
        return [
            'name.regex' => __('The name contins invalid letter'),
            'currency_id.exists' => __('The currency not supported'),
        ];
    }
}
