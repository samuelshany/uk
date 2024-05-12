<?php

namespace App\Domains\Purchase\Request;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePurchaseRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $paymentType = PaymentType::findOrFail(request()->payment_type_id);
            $account = $paymentType->accounts()->where('accounts.id', request()->payment_account_id)->first();

            if (!$account) {
                $validator->errors()->add('account_id', __('Can not creat invoice, This account not related to this payment type.'));
                return;
            }
        });
    }

    public function rules()
    {

        return [
            'invoice_number' => 'required|string|max:250',
            'date' => 'required|date',
            'invoice_image.*' => 'nullable|file|mimes:jpeg,png,jpg,gif,pdf,doc,docx,xls,xlsx|max:2048',
            'mediaId.*' => ['integer'],
            'supplier_id' => 'nullable|exists:suppliers,id',
            'vendor_id' => 'nullable|exists:vendors,id',
            'customer_id' => 'nullable|exists:customers,id',
            'stock_id' => 'required|exists:stocks,id',
            'products' => 'required|array',
            'products.*.product_id' => 'required|exists:products,id',
            'products.*.quantity' => 'required|numeric|min:1',
            'products.*.discount' => 'required|numeric|min:0',
            'taxes' => 'nullable|array',
            'taxes.*.tax_id' => 'exists:taxes,id',
            'payment_type_id' => 'required|exists:payment_types,id',
            'payment_account_id' => 'required|exists:accounts,id',
            'collection_date' => 'required|date',
        ];
    }

    public function messages()
    {
        return [
            'quantity.min' => __("The quantity must be one or more ."),
            'date.date' => __('The purchase date  must be in Date format.'),
            'products.required' => __('Add at least on product '),
            'products.*.product_id' => __('wrong product'),
            'products.*.quantity' => __('wrong quantity'),
            'products.*.discount' => __('wrong discount'),
            'stock_id.required' => __("It's mandatory to choose specific stock."),
            'supplier_id.required' => __("It's mandatory to choose specific purchase supplier."),
            'stock_id.exists' => __("The stock you selected doesn't exist."),
            'supplier_id.exists' => __("The supplier you selected doesn't exist."),
            'payment_type_id.required' => __("Payment type must be selected"),
            'payment_account_id.required' => __('Account must be selected'),
            'payment_account_id.exists' => __('Account must be valid'),
            'payment_type_id.exists' => __("Payment type must must be valid"),
            'collection_date.required' => __("Collection date required"),
            'collection_date.date' => __('The collection date must be in Date format.'),
        ];
    }
}
