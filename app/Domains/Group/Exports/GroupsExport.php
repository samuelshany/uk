<?php

namespace App\Domains\Group\Exports;

use App\Domains\Group\Models\Group;
use App\Domains\Group\Resources\GroupResource;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize; // Import ShouldAutoSize for auto-sizing columns
use Maatwebsite\Excel\Concerns\WithEvents;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Events\AfterSheet;

class GroupsExport implements FromCollection, WithMapping, WithHeadings, WithEvents,ShouldAutoSize
{


    public function collection()
    {

        return GroupResource::collection( Group::with('creator','group_type')->orderBy('created_at',"desc")->get());

    }

    public function map($data): array
    {
        $group_type = '';
        switch($data->group_type->name){
            case 'Assets':
                $group_type = __('group-type.assets');
                break;
            case 'Liabilities':
                $group_type = __('group-type.liabilities');
                break;
            case 'Equity':
                $group_type = __('group-type.equity');
                break;
            case 'Revenue':
                $group_type = __('group-type.revenue');
                break;
            case 'Expenses':
                $group_type = __('group-type.expenses');
                break;
            default:
                $group_type = $data->group_type->name;
                break;
        }
        return [
            [

                $data->code,
                $data->old_code??'',
                $data->name,
                $group_type??'',
                $data->group_type->code,
            ]

        ];


    }

    public function headings(): array
    {
        return [
            ['Groups / المجموعات'],
            ['Code / كود الحساب','Old Code / الكود القديم','Name / اسم الحساب','Groups type / التصنيفات الرئسية','Code Groups Type / كود التصنيفات الرئيسية']
        ];
    }


    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->setRightToLeft(true);
                $event->sheet->getStyle('A:E')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $event->sheet->mergeCells('A1:E1');
                // Set bold style for cells A1:E1
                $event->sheet->getStyle('A1:E1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);

                // Set bold style for cells A2:E2
                $event->sheet->getStyle('A2:E2')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);
            },
        ];
    }

}
