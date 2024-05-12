<?php

namespace App\Domains\PurchaseInvoicesPayment\Request;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePurchaseInvoicesPaymentRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'details' => 'required|array',
            'payment_date' => 'required',
        ];
    }

    public function messages()
    {
        return [
            //
        ];
    }
}
