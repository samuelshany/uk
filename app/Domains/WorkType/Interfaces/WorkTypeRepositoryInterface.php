<?php

namespace App\Domains\WorkType\Interfaces;

use App\Domains\WorkType\Models\WorkType;

interface WorkTypeRepositoryInterface
{
    public function list();
    public function findById(string $id): WorkType;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
