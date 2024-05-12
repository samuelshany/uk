<?php

namespace App\Domains\ConstructionName\Models;


enum EnumPermissionConstructionName: string
{

    case create_construction_name = 'Create Construction Name';
    case edit_construction_name = 'Edit Construction Name';
    case delete_construction_name = 'Delete Construction Name';
    case view_construction_names = 'View Construction Names';
}
