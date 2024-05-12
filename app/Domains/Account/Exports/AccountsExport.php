<?php

namespace App\Domains\Account\Exports;

use App\Domains\Account\Models\Account;
use App\Domains\GroupType\Models\GroupType;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\ShouldAutoSize; // Import ShouldAutoSize for auto-sizing columns
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Events\AfterSheet;

use App\Domains\Account\Resources\AccountParentsResource;
use App\Domains\Account\Resources\AccountResource;
use App\Domains\GroupType\Resources\GroupTypeResource;

class AccountsExport implements FromCollection, WithMapping, WithHeadings, WithEvents,ShouldAutoSize
{

    public function collection()
    {
        return GroupTypeResource::collection( GroupType::orderBy('code')->get());

    }

    public function map($data): array
    {
        $group_type = '';
        switch($data->name){
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
                $group_type = $data->name;
                break;
        }
        $accounts = [
            [
                $data->code,
                ' ',
                $group_type,
                'group Type / الحسابات الرئيسية',
            ],

        ];
        foreach($data->groups as $group){
            array_push($accounts,[
                $group->code,
                $group->old_code??'',
                $group->name,
                'groups / مجموعات',
            ]);
            foreach ($group->accounts as $account) {
                if (strlen($account->code) == 5) {
                    if ($account->is_parent != 1) {
                        $accounts[] = [
                            $account->code,
                            $account->old_code??'',
                            $account->name,
                            'accounts / حسابات',
                        ];
                    } else {
                        $accounts[] = [
                            $account->code,
                            $account->old_code??'',
                            $account->name,
                            'groups / مجموعات',
                        ];
                        if ($account->children && count($account->children) > 0) {
                            foreach ($account->children as $child) {
                                $children = $this->subAccounts($child); // No need to pass an empty array
                                $accounts = array_merge($accounts, $children);
                            }
                        }
                    }
                }
            }
        }
        return $accounts;


    }

    public function headings(): array
    {
        return [
            ['Chart Of Accounts / شجرة الحسابات'],
            ['Code / كود الحساب','Old Code / الكود القديم', 'Name / اسم الحساب', 'Type / التصنيف']
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

    public function subAccounts($account){
        $accounts = [];

    if ($account->is_parent != 1) {
        $accounts[] = [
            $account->code,
            $account->old_code??'',
            $account->name,
            'accounts / حسابات',
        ];
    } else {
        $accounts[] = [
            $account->code,
            $account->old_code??'',
            $account->name,
            'groups / مجموعات',
        ];
        if ($account->children && count($account->children) > 0) {
            foreach ($account->children as $child) {
                $accounts = array_merge($accounts, $this->subAccounts($child));
            }
        }
    }

    return $accounts;
}



        


}
