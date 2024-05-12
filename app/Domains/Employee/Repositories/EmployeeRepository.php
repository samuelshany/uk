<?php

namespace App\Domains\Employee\Repositories;


use App\Domains\Employee\Models\Employee;

use App\Domains\Employee\Interfaces\EmployeeRepositoryInterface;

use Exception;
use Illuminate\Support\Facades\DB;

class EmployeeRepository implements EmployeeRepositoryInterface
{

    public function __construct(private Employee $employee)
    {
    }

    public function list()
    {
        dd('in repo');
    }

    public function findById(string $id): Employee
    {
        return $this->employee::findOrFail($id);
    }

    public function store($request):bool
    {

        $this->employee->create([
            'name'=>$request->email,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'department_id'=>'1'
        ]);
        return true;

    }


    public function update(string $id, $request): bool
    {
        $account = $this->employee::findOrFail($id);


        return true;
    }

    public function delete(string $id): bool
    {
        $employee = $this->employee::findOrFail($id);
        if ($employee->is_parent == 1) {
            if ($employee->children->count() > 0) {
                return false;
            } else {
                $employee->delete();
                return true;
            }
        }else
        {
            $employee->delete();
                return true;
        }
    }

}
