<?php

namespace App\Domains\Department\Services;



use App\Domains\Department\Interfaces\DepartmentRepositoryInterface;


class DepartmentService
{
    public function __construct(private DepartmentRepositoryInterface $departmentRepository)
    {
    }

    public function departments()
    {
        return $this->departmentRepository->departments();
    }


       public function findById($id)
    {
        return $this->departmentRepository->findById($id);
    }

    public function delete($id)
    {
        return $this->departmentRepository->delete($id);
    }


    public function create($request)
    {

        return $this->departmentRepository->store($request);
    }

    public function update($id,$request)
    {

        return $this->departmentRepository->update($id,$request);
    }




}
