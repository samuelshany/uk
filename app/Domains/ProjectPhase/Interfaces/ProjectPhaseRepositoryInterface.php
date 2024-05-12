<?php

namespace App\Domains\ProjectPhase\Interfaces;

use App\Domains\ProjectPhase\Models\ProjectPhase;

interface ProjectPhaseRepositoryInterface
{
    public function list();
    public function findById(string $id): ProjectPhase;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
