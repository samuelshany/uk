<?php

namespace App\Domains\CustomizeReport\Models;


enum EnumPermissionCustomizeReport: string
{

    case create_customize_report = 'Create Project Phase';
    case edit_customize_report = 'Edit Project Phase';
    case delete_customize_report = 'Delete Project Phase';
    case view_customize_reports = 'View Project Phases';
}
