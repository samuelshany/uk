<?php

namespace App\Domains\ProductCodeCriteria\Models;


enum EnumPermissionProductCodeCriteria: string
{

    case create_productCodeCriteria = 'Create ProductCodeCriteria';
    case edit_productCodeCriteria = 'Edit ProductCodeCriteria';
    case delete_productCodeCriteria = 'Delete ProductCodeCriteria';
    case view_productCodeCriterias = 'View ProductCodeCriteria';

}
