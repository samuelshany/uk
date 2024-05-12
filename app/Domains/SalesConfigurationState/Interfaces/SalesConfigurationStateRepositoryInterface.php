<?php

namespace App\Domains\SalesConfigurationState\Interfaces;

use App\Domains\SalesConfigurationState\Models\SalesConfigurationState;

interface SalesConfigurationStateRepositoryInterface
{
    public function list();
    public function findById(string $id): SalesConfigurationState;
    public function store($request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
