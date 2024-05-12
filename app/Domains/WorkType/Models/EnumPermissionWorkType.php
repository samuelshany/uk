<?php

namespace App\Domains\WorkType\Models;


enum EnumPermissionWorkType: string
{

    case create_work_type = 'Create Work Type';
    case edit_work_type = 'Edit Work Type';
    case delete_work_type = 'Delete Work Type';
    case view_work_types = 'View Work Types';
}
