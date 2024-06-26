<?php

namespace App\Domains\JournalEntry\Exports;

use App\Domains\JournalEntry\Models\JournalEntryDetail;
use FontLib\Table\Type\name;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;

class JournalEntryDetailsExport implements FromCollection, WithMapping, WithHeadings, WithEvents, ShouldQueue
{
    use Exportable;

    public function __construct(private $id)
    {
    }
    public function collection()
    {
        return JournalEntryDetail::with('account')->where('journal_entry_id', $this->id)->get();
    }

    public function map($data): array
    {
        return [
            $data->account_id,
            $data->account->name,
            $data->account->code,
            $data->debit,
            $data->credit,
            $data->journal_entry_id,
            $data->description,

        ];
    }

    public function headings(): array
    {
        return [
            'Account Id',
            'Account Name',
            'Code',
            'Debit',
            'Credit',
            'Journal Entry Id',
            'Description',
        ];
    }

    public function registerEvents(): array
    {
        return [];
    }
}
