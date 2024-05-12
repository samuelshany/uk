<?php

namespace App\Domains\JournalEntry\Request;

use App\Domains\Tax\Models\Tax;
use Illuminate\Foundation\Http\FormRequest;

class StoreJournalEntryRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        return [
            'title' => ['required', 'string', 'max:255'],
            //            'entry_no'               => ['required', 'numeric'],
            'invoice_image.*' => 'nullable|file|mimes:jpeg,png,jpg,gif,pdf,doc,docx,xls,xlsx|max:2048',
            'date' => ['required', 'date'],
            'description' => ['nullable', 'string'],
            'details' => ['required', 'array'],
            'details.*.account_id' => ['required', 'exists:accounts,id'],
            'details.*.debit' => ['required_without:accounts.*.credit', 'numeric','max:99999999999'],
            'details.*.credit' => ['required_without:accounts.*.debit', 'numeric','max:99999999999'],
            'details.*.description' => ['nullable', 'string', 'max:255'],
            'details.*.files.*' => 'file|mimes:jpeg,png,jpg,xlsx,csv,xls,pdf,doc,docx|max:100000',
            'details.*.currency_id' => ['nullable','exists:currencies,id'],
            'details.*.currency_rate' => ['nullable','numeric']
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $details = collect($this->details)->map(fn($detail) => [
                'account_id' => $detail['account_id'],
                'debit' => $detail['debit'],
                'credit' => $detail['credit'],
            ])->toArray();
            // $unique = collect($details)->unique('account_id');
            // if ($unique->count() != count($details)) {
            //     $validator->errors()->add('details', __('validation.unique'));
            // }
            $details = collect($details);
            $debit = $details->sum('debit');
            $credit = $details->sum('credit');
            if ($debit != $credit) {
                $validator->errors()->add('details', __('validation.not_equal'));
            }
        });
    }

    public function messages()
    {
        return [
            'title' => __('validation.required'),
            'entry_no' => __('validation.required'),
            'date' => __('validation.required'),
            'description' => __('validation.required'),
            'details.required' => __('validation.required'),
            'details.*.account_id.required' => __('validation.required'),
            'details.*.account_id.exists' => __('validation.exists'),
            'details.*.debit.required_without' => __('validation.required_without'),
            'details.*.credit.required_without' => __('validation.required_without'),
            'details.*.debit.numeric' => __('validation.numeric'),
            'details.*.credit.numeric' => __('validation.numeric'),
            'details.*.description.string' => __('validation.string'),
            'details.*.description.max' => __('validation.max'),


        ];
    }
}
