<?php

namespace App\Domains\Clause\Models;


enum EnumPermissionClause: string
{

    case create_clause = 'Create Clause';
    case edit_clause = 'Edit Clause';
    case delete_clause = 'Delete Clause';
    case view_clauses = 'View Clauses';
}
