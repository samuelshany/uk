<?php

namespace App\Domains\FieldType\Models;


enum EnumPermissionFieldType: string
{

    case create_field_type = 'Create Field Type';
    case edit_field_type = 'Edit Field Type';
    case delete_field_type = 'Delete Field Type';
    case view_field_types = 'View Field Types';
}
