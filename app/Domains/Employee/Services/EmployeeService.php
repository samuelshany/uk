<?php

namespace App\Domains\Employee\Services;



use App\Domains\Employee\Interfaces\EmployeeRepositoryInterface;


class EmployeeService
{
    public function __construct(private EmployeeRepositoryInterface $employeeRepository)
    {
    }

    public function list()
    {
        return $this->employeeRepository->list();
    }


       public function findById($id)
    {
        return $this->employeeRepository->findById($id);
    }

    public function delete($id)
    {
        return $this->employeeRepository->delete($id);
    }


    public function create($request)
    {

        return $this->employeeRepository->store($request);
    }

    public function update($id,$request)
    {

        return $this->employeeRepository->update($id,$request);
    }




}
