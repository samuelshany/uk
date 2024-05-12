<?php

namespace App\Domains\UnitType\Request;

use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use App\Domains\UnitType\Models\UnitType;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUnitTypeRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => "required|alpha|max:50",
            'description' => 'max:200',
            'prefix' => 'nullable|unique:unit_types,prefix,' . $this->route('id') . '|max:10',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $criteria = ProductCodeCriteria::first();
            if ($criteria && $criteria->unitType == 1) {
                $unitType = UnitType::find($this->route('id'));
                if ($unitType->prefix != request()->prefix) {
                    $validator->errors()->add('criteria_exist', __('Can not update, it used in product code criteria'));
                }
            }
        });
    }

    public function messages()
    {
        return [
            'name.regex' => __('The name contins invalid letter'),
            'currency_id.exists' => __('The currency not supported'),
        ];
    }
}
