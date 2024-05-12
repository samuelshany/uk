<?php

namespace App\Domains\PurchaseInvoice\Services;

use App\Domains\PurchaseInvoice\Interfaces\PurchaseInvoiceRepositoryInterface;

class PurchaseInvoiceService
{
    public function __construct(private PurchaseInvoiceRepositoryInterface $PurchaseInvoiceRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->PurchaseInvoiceRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->PurchaseInvoiceRepositoryInterface->list();
    }
    public function listInvoiceDetails($id)
    {
        return $this->PurchaseInvoiceRepositoryInterface->listInvoiceDetails($id);
    }

    public function listInvoiceDates($id)
    {
        return $this->PurchaseInvoiceRepositoryInterface->listInvoiceDates($id);
    }

    public function delete($id)
    {
        return $this->PurchaseInvoiceRepositoryInterface->delete($id);
    }

    public function update($id, $request)
    {
        return $this->PurchaseInvoiceRepositoryInterface->update($id, $request);
    }

    public function invoiceInvoicePayments($id)
    {
        return $this->PurchaseInvoiceRepositoryInterface->invoiceInvoicePayments($id);
    }
}
