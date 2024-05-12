<?php

namespace App\Domains\PurchaseRequest\Interfaces;

use App\Domains\PurchaseRequest\Models\PurchaseRequest;



interface PurchaseRequestRepositoryInterface
{
    public function list();
    public function findById(string $id): PurchaseRequest;
    public function store($request): bool;
    public function update(string $id, $request): bool;
    public function approveRequest(string $id): bool;
    public function cancelRequest(string $id): bool;
    public function delete(string $id): bool;
    public function sendNotificationToSuppliers(string $id, $suppliers): bool;
}
