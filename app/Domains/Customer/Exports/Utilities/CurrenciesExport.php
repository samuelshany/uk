<?php

namespace App\Domains\Customer\Exports\Utilities;

use App\Domains\Currency\Models\Currency;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\ShouldAutoSize; // Import ShouldAutoSize for auto-sizing columns


class CurrenciesExport  implements FromCollection, WithHeadings,WithEvents, ShouldAutoSize
{

    public function collection()
    {
        return Currency::all([
            'id',
            'name',
            'code',
            'price_rate',
            'price',
            'from',
            'to'
        ]);
    }

    public function headings(): array
    {
        return [
            'id',
            'name',
            'code',
            'price_rate',
            'price',
            'from',
            'to'
        ];
    }

    
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                // Set bold style for cells A1:D1
                $event->sheet->getStyle('A1:G1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);
                $event->sheet->setTitle('Currencies');
            },
        ];
    }

}
