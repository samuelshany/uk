<?php

namespace App\Domains\SalesOrder\Request;

use Illuminate\Foundation\Http\FormRequest;

class StoreSalesOrderRequest extends FormRequest
{

    protected $product;

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'customer_id' => 'required',
            'currency_id' => 'required',
            'tax_id' => 'nullable',
            'delivery_date' => 'nullable',
            'entry_no' => 'nullable',
            'notes' => 'nullable|max:2048',
            'file.*' => 'nullable|file|mimes:jpeg,png,jpg,gif,pdf,doc,docx,xls,xlsx|max:2048',
            'products' => 'required|array',
        ];
    }

    public function messages()
    {
        return [
            //
        ];
    }
}
