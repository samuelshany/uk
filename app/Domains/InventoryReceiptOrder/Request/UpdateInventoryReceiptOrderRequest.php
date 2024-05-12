<?php

namespace App\Domains\InventoryReceiptOrder\Request;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class UpdateInventoryReceiptOrderRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'receipt_quantity' => 'required|gt:0',
        ];
    }

    public function messages()
    {
        return [
            'receipt_quantity.required' => __('Receipt quantity is required'),
            'receipt_quantity.gt' => __('Receipt quantity must be greater than zero'),
        ];
    }
}
