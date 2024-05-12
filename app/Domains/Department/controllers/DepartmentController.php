<?php

namespace App\Domains\Department\controllers;

use App\Domains\Department\Services\DepartmentService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    //
    public function __construct(private DepartmentService $departmentService){

    }
    public function departments()
    {
        $this->departmentService->departments();
    }
}
