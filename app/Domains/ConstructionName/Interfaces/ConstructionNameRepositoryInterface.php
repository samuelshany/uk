<?php

namespace App\Domains\ConstructionName\Interfaces;

use App\Domains\ConstructionName\Models\ConstructionName;

interface ConstructionNameRepositoryInterface
{
    public function list();
    public function findById(string $id): ConstructionName;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
