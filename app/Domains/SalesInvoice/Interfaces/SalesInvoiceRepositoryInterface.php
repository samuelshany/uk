<?php

namespace App\Domains\SalesInvoice\Interfaces;

use App\Domains\SalesInvoice\Models\SalesInvoice;

interface SalesInvoiceRepositoryInterface
{
    public function list();
    public function listInvoiceDetails($id): SalesInvoice;
    public function listInvoiceDates($id): SalesInvoice;
    public function findById(string $id): SalesInvoice;
    public function invoiceInvoicePayments(string $id);
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
