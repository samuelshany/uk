<?php

namespace App\Domains\InventoryDeliveryOrder\Interfaces;

use App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder;

interface InventoryDeliveryOrderRepositoryInterface
{
    public function list();
    public function listInvoiceDetails($id): InventoryDeliveryOrder;
    public function findById(string $id): InventoryDeliveryOrder;
    public function update(string $id, $request);
    public function confirmReceiptOrder(string $id);
    /* public function delete(string $id): bool; */
}
