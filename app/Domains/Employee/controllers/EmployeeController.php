<?php

namespace App\Domains\Employee\controllers;

use App\Domains\Employee\Services\EmployeeService;
use App\Http\Controllers\Controller;

use App\Http\Requests\EmployeeRequest;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    //
    public function __construct(private EmployeeService $EmployeeService)
    {

    }
    public function findById($id){

    }
    public function list(){
        $this->EmployeeService->list();
    }
    public function store(EmployeeRequest $request)
    {

        $this->EmployeeService->create($request);
        return response()->json([
            'message' => __('Created Successfully'),
            'status' => true,
        ], 200);
    }
}
