<?php

namespace App\Domains\Department\Models;


enum EnumPermissionDepartment: string
{

    case create_department = 'Create Account';
    case edit_department = 'Edit Department';
    case delete_department = 'Delete Department';
    case view_departments = 'View Departments';
    case import_departments = 'Import Departments';
    case view_chart_of_departments = 'View Chart Department';

}
