<?php

namespace App\Domains\ProjectManagementCategory\Interfaces;

use App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory;

interface ProjectManagementCategoryRepositoryInterface
{
    public function list();
    public function findById(string $id): ProjectManagementCategory;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
