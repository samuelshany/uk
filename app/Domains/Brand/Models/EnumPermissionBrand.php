<?php

namespace App\Domains\Brand\Models;


enum EnumPermissionBrand: string
{

    case create_unit_type = 'Create Brand';
    case edit_unit_type = 'Edit Brand';
    case delete_unit_type = 'Delete Brand';
    case view_unit_type = 'View Brand';

}
