<?php

namespace App\Domains\DeductionOption\Interfaces;

use App\Domains\DeductionOption\Models\DeductionOption;

interface DeductionOptionRepositoryInterface
{
    public function list();
    public function findById(string $id): DeductionOption;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
