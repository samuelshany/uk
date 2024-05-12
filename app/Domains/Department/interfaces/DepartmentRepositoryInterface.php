<?php

namespace App\Domains\Department\Interfaces;

use App\Domains\Department\Models\Department;
use Illuminate\Database\Eloquent\Collection;

interface DepartmentRepositoryInterface
{
    public function findById(string $id): Department;
    public function departments();

    public function store($request):bool;
    public function update(string $id, $request):bool;
    public function delete(string $id): bool;
}
