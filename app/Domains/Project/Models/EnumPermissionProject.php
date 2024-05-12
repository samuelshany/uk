<?php

namespace App\Domains\Project\Models;


enum EnumPermissionProject: string
{

    case create_project = 'Create Project';
    case edit_project = 'Edit Project';
    case delete_project = 'Delete Project';
    case view_projects = 'View Projects';
}
