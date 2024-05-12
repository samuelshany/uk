<?php

namespace App\Domains\Unit\Interfaces;

use App\Domains\Unit\Models\Unit;

interface UnitRepositoryInterface
{
    public function list();
    public function findById(string $id): Unit;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
