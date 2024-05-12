<?php

namespace App\Domains\ProjectPhase\Models;


enum EnumPermissionProjectPhase: string
{

    case create_project_phase = 'Create Project Phase';
    case edit_project_phase = 'Edit Project Phase';
    case delete_project_phase = 'Delete Project Phase';
    case view_project_phases = 'View Project Phases';
}
