<?php

namespace App\Domains\SalesOrderTracking\Interfaces;

use App\Domains\SalesOrderTracking\Models\SalesOrderTracking;

interface SalesOrderTrackingRepositoryInterface
{
    public function list();
    public function findById(string $id): SalesOrderTracking;
    public function update(string $id, $request): bool;
    /* public function delete(string $id): bool; */
}
