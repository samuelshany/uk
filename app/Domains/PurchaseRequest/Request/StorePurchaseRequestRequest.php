<?php

namespace App\Domains\PurchaseRequest\Request;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Foundation\Http\FormRequest;

class StorePurchaseRequestRequest extends FormRequest
{

    protected $product;

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
            'product_id.required' => __("The quantity must be one or more ."),
        ];
    }
}
