<?php

namespace App\Domains\SalesInvoicesPayment\Interfaces;

use App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment;



interface SalesInvoicesPaymentRepositoryInterface
{
    public function list();
    public function findById(string $id): SalesInvoicesPayment;
    public function store($salesInvoice, $details): bool;
    public function update(string $id, $request): bool;

    public function collect(string $id): bool;
}
