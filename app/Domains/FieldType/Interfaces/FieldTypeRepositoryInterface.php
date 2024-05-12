<?php

namespace App\Domains\FieldType\Interfaces;

use App\Domains\FieldType\Models\FieldType;

interface FieldTypeRepositoryInterface
{
    public function list();
    public function findById(string $id): FieldType;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
