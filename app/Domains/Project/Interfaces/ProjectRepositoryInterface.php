<?php

namespace App\Domains\Project\Interfaces;

use App\Domains\Project\Models\Project;
use App\Domains\Project\Models\ProjectAssignment;

interface ProjectRepositoryInterface
{
    public function list();
    public function findById(string $id): Project;
    public function findPorjectAssignment(string $id): ProjectAssignment;
    public function listPorjectAssignments(string $id);
    public function exportProjectManagementPDF(string $id);
    public function exportProjectManagementPDFAr(string $id);
    public function store($request): bool;
    public function update(string $id, $request): bool;
    public function storePorjectAssignment(string $id, $request): bool;
    public function updatePorjectAssignment(string $id, $request): bool;
    public function delete(string $id): bool;
}
