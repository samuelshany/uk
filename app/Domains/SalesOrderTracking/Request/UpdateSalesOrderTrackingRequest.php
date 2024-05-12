<?php

namespace App\Domains\SalesOrderTracking\Request;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class UpdateSalesOrderTrackingRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'status_id' => 'required|exists:sales_configuration_states,id',
        ];
    }

   

    public function messages()
    {
        return [
            'status_id.required' => __('Satus is required'),
            'status_id.exists' => __('Status does not exist'),
        ];
    }
}
