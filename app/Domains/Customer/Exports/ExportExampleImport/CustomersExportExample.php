<?php

namespace App\Domains\Customer\Exports\ExportExampleImport;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\ShouldAutoSize; // Import ShouldAutoSize for auto-sizing columns


class CustomersExportExample  implements FromCollection, WithHeadings,WithEvents, ShouldAutoSize
{

    public function collection()
    {
        return new Collection( [
            [
                'test1',
                '48789',
                'test@example.com',
                '1',
                '10101',
                'abc',
                '1',
                '1',
                '1',
                '11584',
                'new',
                '124564',
                '1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
            	'100',
            ],
            [
                'test2',
                '48789',
                'test2@example.com',
                '1',
                '10101',
                'abc',
                '1',
                '1',
                '1',
                '11584',
                'new',
                '124564',
                '0',
                'abc',
                '1',
                '1',
                '1',
                '11584',
                'new',
                '124564',
            	'102',
            ],
        ]);

        
    }

    public function headings(): array
    {
        return [
            'name',
            'contact',
            'email',
            'parent_account_code',
            'address',
        	'city_id',
        	'state_id',
        	'zip_code',
        	'address_name',
        	'address_phone',
        	'is_same_shipping_address',
        	'billing_address',
        	'billing_country_id',
        	'billing_city_id',
        	'billing_state_id',
        	'billing_zip_code',
        	'billing_address_name',
        	'billing_address_phone',
        	'old_code'
        ];
    }

    
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                // Set bold style for cells A1:D1
                $event->sheet->getStyle('A1:U1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);
                $event->sheet->setTitle('Customers');
            },
        ];
    }

}
