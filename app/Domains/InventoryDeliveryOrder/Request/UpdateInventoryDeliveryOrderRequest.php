<?php

namespace App\Domains\InventoryDeliveryOrder\Request;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class UpdateInventoryDeliveryOrderRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'delivery_quantity' => 'required|gt:0',
        ];
    }

    public function messages()
    {
        return [
            'delivery_quantity.required' => __('Receipt quantity is required'),
            'delivery_quantity.gt' => __('Receipt quantity must be greater than zero'),
        ];
    }
}
