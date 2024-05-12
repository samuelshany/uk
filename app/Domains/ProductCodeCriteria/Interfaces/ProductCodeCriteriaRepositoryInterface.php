<?php

namespace App\Domains\ProductCodeCriteria\Interfaces;

use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;

interface ProductCodeCriteriaRepositoryInterface
{
    public function findById(string $id): ProductCodeCriteria;
    public function list();
    public function store($request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
