<?php

namespace App\Domains\ProjectManagementCategory\Services;

use App\Domains\ProjectManagementCategory\Interfaces\ProjectManagementCategoryRepositoryInterface;

class ProjectManagementCategoryService
{
    public function __construct(private ProjectManagementCategoryRepositoryInterface $projectManagementCategoryRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->projectManagementCategoryRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->projectManagementCategoryRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->projectManagementCategoryRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->projectManagementCategoryRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->projectManagementCategoryRepositoryInterface->update($id, $request);
    }


}
