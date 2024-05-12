<?php

namespace App\Domains\InventoryReceiptOrder\Interfaces;

use App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder;

interface InventoryReceiptOrderRepositoryInterface
{
    public function list();
    public function listInvoiceDetails($id): InventoryReceiptOrder;
    public function findById(string $id): InventoryReceiptOrder;
    public function update(string $id, $request);
    public function confirmReceiptOrder(string $id);
    /* public function delete(string $id): bool; */
}
