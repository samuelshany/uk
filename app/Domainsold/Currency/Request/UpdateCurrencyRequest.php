<?php

namespace App\Domains\Currency\Request;

use App\Domains\Currency\Models\EnumCurrencies;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use \Illuminate\Validation\Rule;

class UpdateCurrencyRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'code' => ['required', 'exists:currency_codes,code'],
            'price_rate' => ['required', Rule::in(['Custom', 'Official'])],
            'backup_changes' => ['required_if:price_rate,Official', 'nullable', Rule::in(['Custom', '12_pm_every_day', '12_am_every_day', '24_hours_per_day'])],
            'price' => 'required_if:price_rate,Custom|numeric|nullable|gt:0',
            'from' => 'required_if:backup_changes,Custom|date|nullable',
            'to' => 'required_if:backup_changes,Custom|date|after_or_equal:date_from|nullable',
            'default' => [Rule::in(['0', '1'])],

        ];
    }
    public function messages()
    {
        return [
            'name.required' => __('The name field is required'),
            'name.regex' => __('The name must only contain letters'),
            'code.required' => __('The code field is required'),
            'code.exists' => __('The code not exist'),
            'price_rate.required' => __('The price_rate field is required'),
            'price_rate.in' => __('The price_rate is invalid'),
            'backup_changes.required_if' => __('The backup_changes field is required'),
            'backup_changes.in' => __('The backup_changes is invalid'),
            'price.required_if' => __('The price field is required'),
            'price.numeric' => __('The price must be a number'),
            'from.required_if' => __('The from field is required'),
            'from.date' => __('the date must be valid date'),
            'to.date' => __('the date must be valid date'),
            'to.after_or_equal' => __('the date to must be greater than or equal date from '),
            'to.required_if' => __('The to field is required'),
            'default.in' => __('The default is invalid'),


        ];

    }
}
