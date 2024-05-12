<?php

namespace App\Domains\PurchaseInvoice\Interfaces;

use App\Domains\PurchaseInvoice\Models\PurchaseInvoice;

interface PurchaseInvoiceRepositoryInterface
{
    public function list();
    public function listInvoiceDetails($id): PurchaseInvoice;
    public function listInvoiceDates($id): PurchaseInvoice;
    public function findById(string $id): PurchaseInvoice;
    public function invoiceInvoicePayments(string $id);
    public function update(string $id, $request);
    public function delete(string $id): bool;
}
