<?php

namespace App\Domains\Clause\Interfaces;

use App\Domains\Clause\Models\Clause;

interface ClauseRepositoryInterface
{
    public function list();
    public function findById(string $id): Clause;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
