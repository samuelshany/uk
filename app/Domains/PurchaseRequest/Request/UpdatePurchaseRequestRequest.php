<?php

namespace App\Domains\PurchaseRequest\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePurchaseRequestRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|numeric',
            'delivery_date' => 'nullable',
            'warehouse_id' => 'nullable',
            'notes' => 'nullable|max:2048',
            'status' => 'nullable',
        ];
    }

    public function messages()
    {
        return [
            //
        ];
    }
}
