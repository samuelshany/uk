<?php

namespace App\Domains\Department\Repositories;


use App\Domains\Department\Models\Department;

use App\Domains\Department\Interfaces\DepartmentRepositoryInterface;

use Exception;
use Illuminate\Support\Facades\DB;

class DepartmentRepository implements DepartmentRepositoryInterface
{

    public function __construct(private Department $Department)
    {
    }

    public function departments()
    {
        dd('in repo');
    }

    public function findById(string $id): Department
    {
        return $this->Department::findOrFail($id);
    }

    public function store($request): bool
    {

    }


    public function update(string $id, $request): bool
    {
        $account = $this->Department::findOrFail($id);


        return true;
    }

    public function delete(string $id): bool
    {
        $Department = $this->Department::findOrFail($id);
        if ($Department->is_parent == 1) {
            if ($Department->children->count() > 0) {
                return false;
            } else {
                $Department->delete();
                return true;
            }
        }else
        {
            $Department->delete();
                return true;
        }
    }

}
