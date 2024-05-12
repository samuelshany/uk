<?php

namespace App\Domains\Unit\Models;


enum EnumPermissionUnit: string
{

    case create_unit = 'Create Unit';
    case edit_unit = 'Edit Unit';
    case delete_unit = 'Delete Unit';
    case view_units = 'View Units';
}
