<?php

namespace App\Domains\Account\Exports;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Resources\AccountParentsResource;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\ShouldAutoSize; // Import ShouldAutoSize for auto-sizing columns
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Events\AfterSheet;

class ParentAccountsExport implements FromCollection, WithMapping, WithHeadings, WithEvents,ShouldAutoSize
{

    public function collection()
    {
        return AccountParentsResource::collection( Account::whereRaw('LENGTH(code) = ?', [5])->orderBy('created_at','desc')->get());
    }

    public function map($data): array
    {

        return [
            $data->code,
            $data->old_code??'',
            $data->name,
            $data->is_parent&&$data->is_parent==1?'Parent / مجموعات':'account / حسابات',
        ];


    }

    public function headings(): array
    {
        return [
            ['Accounts / الحسابات'],
            ['Code / كود الحساب','Old Code / الكود القديم','Name / اسم الحساب','Type / التصنيفات ']
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->setRightToLeft(true);
                $event->sheet->getStyle('A:D')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $event->sheet->mergeCells('A1:D1');
                // Set bold style for cells A1:D1
                $event->sheet->getStyle('A1:D1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);

                // Set bold style for cells A2:D2
                $event->sheet->getStyle('A2:D2')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);
            },
        ];
    }

}
