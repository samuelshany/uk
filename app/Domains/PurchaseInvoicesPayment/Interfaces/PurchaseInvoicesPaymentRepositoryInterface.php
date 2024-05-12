<?php

namespace App\Domains\PurchaseInvoicesPayment\Interfaces;

use App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment;



interface PurchaseInvoicesPaymentRepositoryInterface
{
    public function list();
    public function findById(string $id): PurchaseInvoicesPayment;
    public function store($PurchaseInvoice, $details): bool;
    public function update(string $id, $request): bool;

    public function collect(string $id): bool;
}
