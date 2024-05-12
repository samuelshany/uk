<?php

namespace App\Domains\Project\Request;

use App\Domains\PaymentType\Models\PaymentType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class StoreProjectAssignmentRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            
            'project_phase_id' => 'nullable|exists:project_phases,id',
            'construction_name_id' => 'required|exists:construction_names,id',
            'work_type_id' => 'required|exists:work_types,id',

            'deduction_options.*.deduction_option_id' => 'required|exists:deduction_options,id',
            'deduction_options.*.journal_entry_detail_id' => 'nullable|exists:journal_entry_details,id',
            'work_clauses.*.quantity' => 'required|numeric',
            'work_clauses.*.ratio' => 'required|string',
            'work_clauses.*.notes' => 'nullable|string',
            'work_clauses.*.price' => 'required|numeric',
            'work_clauses.*.clause_id' => 'required|exists:clauses,id',
            'work_clauses.*.unit_id' => 'nullable|exists:units,id',
            'work_clauses.*.project_management_category_id' => 'nullable|exists:project_management_categories,id',
        ];
    }


    public function messages()
    {
        return [
        ];
    }
}
