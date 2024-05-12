<?php

namespace App\Domains\Group\Exports;

use App\Domains\Group\Models\Group;
use App\Domains\Group\Resources\GroupResource;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;

class GroupsExport implements FromCollection, WithMapping, WithHeadings, WithEvents
{


    public function collection()
    {
        return GroupResource::collection( Group::with('creator','group_type')->get());

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
            $data->id,
            $data->name,
            $group_type??null,
            $data->creator->name??null,
            $data->created_at,
            $data->parent,

        ];


    }

    public function headings(): array
    {
        return ['Code','Name','Group Type','Created By','Created Date','Parent'];
    }


    public function registerEvents(): array
    {
        return [

        ];
    }

}
