<?php

namespace App\Domains\Project\Request;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class StoreProjectRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'project_name' => 'required|string|max:255',
            'client_information_id' => 'nullable|exists:customers,id',
            'parent_account_id' => 'required|exists:accounts,id',
            'start_date' => 'nullable|string|max:255',
            'end_date' => 'nullable|string|max:255',
            'project_description' => 'nullable|string|max:10000',
            'downpayment_option' => 'nullable|string|max:255',
            'assigned_engineer_id' => 'nullable|exists:users,id',
            'milestone' => 'nullable|string|max:255',
            'deadline' => 'nullable|string|max:255',
            'estimated_cost' => 'nullable|numeric',
            'assigned_budget' => 'nullable|numeric',
            'suppliers.*' => 'nullable|exists:suppliers,id',
            'project_phases.*' => 'nullable|exists:project_phases,id',
            'deduction_options.*' => 'nullable|exists:deduction_options,id',
            'files.*' => 'nullable|file|mimes:jpeg,png,jpg,xlsx,csv,xls,pdf,doc,docx|max:100000',
            
        ];
    }


    public function messages()
    {
        return [
            'project_name.required'=>'Project Name is required',
        ];
    }
}
