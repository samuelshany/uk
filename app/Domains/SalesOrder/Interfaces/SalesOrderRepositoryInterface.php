<?php

namespace App\Domains\SalesOrder\Interfaces;

use App\Domains\SalesOrder\Models\SalesOrder;



interface SalesOrderRepositoryInterface
{
    public function list();
    public function findById(string $id): SalesOrder;
    public function store($request): bool;
    public function update(string $id, $request): bool;
    public function approveOrder(string $id): bool;
    public function cancelOrder(string $id): bool;
    public function delete(string $id): bool;
}
