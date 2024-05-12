<?php

namespace App\Domains\DeductionOption\Models;


enum EnumPermissionDeductionOption: string
{

    case create_deduction_option = 'Create Deduction Option';
    case edit_deduction_option = 'Edit Deduction Option';
    case delete_deduction_option = 'Delete Deduction Option';
    case view_deduction_options = 'View Deduction Options';
}
