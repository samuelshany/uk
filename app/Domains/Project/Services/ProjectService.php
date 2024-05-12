<?php

namespace App\Domains\Project\Services;

use App\Domains\Project\Interfaces\ProjectRepositoryInterface;

class ProjectService
{
    public function __construct(private ProjectRepositoryInterface $projectRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->projectRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->projectRepositoryInterface->list();
    }
    public function listPorjectAssignments($id)
    {
        return $this->projectRepositoryInterface->listPorjectAssignments($id);
    }
    public function exportProjectManagementPDF($id)
    {
        return $this->projectRepositoryInterface->exportProjectManagementPDF($id);
    }
    public function exportProjectManagementPDFAr($id)
    {
        return $this->projectRepositoryInterface->exportProjectManagementPDFAr($id);
    }
    public function findPorjectAssignment($id)
    {
        return $this->projectRepositoryInterface->findPorjectAssignment($id);
    }
    public function delete($id)
    {
        return $this->projectRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->projectRepositoryInterface->store($request);
    }
    public function update($id, $request)
    {
        return $this->projectRepositoryInterface->update($id, $request);
    }
    public function storePorjectAssignment($id, $request)
    {
        return $this->projectRepositoryInterface->storePorjectAssignment($id, $request);
    }
    public function updatePorjectAssignment($id, $request)
    {
        return $this->projectRepositoryInterface->updatePorjectAssignment($id, $request);
    }

}
