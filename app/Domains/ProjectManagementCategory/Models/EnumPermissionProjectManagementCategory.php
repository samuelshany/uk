<?php

namespace App\Domains\ProjectManagementCategory\Models;


enum EnumPermissionProjectManagementCategory: string
{

    case create_project_management_category = 'Create Project Management Category';
    case edit_project_management_category = 'Edit Project Management Category';
    case delete_project_management_category = 'Delete Project Management Category';
    case view_project_management_categories = 'View Project Management Categories';
}
