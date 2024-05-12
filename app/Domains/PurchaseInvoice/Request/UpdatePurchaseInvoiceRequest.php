<?php

namespace App\Domains\PurchaseInvoice\Request;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class UpdatePurchaseInvoiceRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'payment_type_id' => 'required|exists:payment_types,id',
            'payment_account_id' => 'required|exists:accounts,id',
            // 'details' => 'required',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function (Validator $validator) {
            $payment = PaymentType::find(request()->payment_type_id);
            if($payment->payment_type){
                if ($payment->payment_type == "credit"  && !request()->details) {
                // Check if the condition for adding the error message is met
                $validator->errors()->add('details', __('Details required'));
                }
            }
        });
    }

    public function messages()
    {
        return [
            'payment_type_id.required' => __('Payment Type is required'),
            'payment_type_id.exists' => __('Payment Type does not exist'),
            'payment_account_id.required' => __('Payment Account is required'),
            'payment_account_id.exists' => __('Payment Account does not exist'),
        ];
    }
}
