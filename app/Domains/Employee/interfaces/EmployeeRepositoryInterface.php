<?php

namespace App\Domains\Employee\Interfaces;

use App\Domains\Employee\Models\Employee;
use Illuminate\Database\Eloquent\Collection;

interface EmployeeRepositoryInterface
{
    public function findById(string $id): Employee;
    public function list();

    public function store($request):bool;
    public function update(string $id, $request):bool;
    public function delete(string $id): bool;
}
