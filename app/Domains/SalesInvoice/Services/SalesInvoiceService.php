<?php

namespace App\Domains\SalesInvoice\Services;

use App\Domains\SalesInvoice\Interfaces\SalesInvoiceRepositoryInterface;

class SalesInvoiceService
{
    public function __construct(private SalesInvoiceRepositoryInterface $SalesInvoiceRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->SalesInvoiceRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->SalesInvoiceRepositoryInterface->list();
    }
    public function listInvoiceDetails($id)
    {
        return $this->SalesInvoiceRepositoryInterface->listInvoiceDetails($id);
    }

    public function listInvoiceDates($id)
    {
        return $this->SalesInvoiceRepositoryInterface->listInvoiceDates($id);
    }

    public function delete($id)
    {
        return $this->SalesInvoiceRepositoryInterface->delete($id);
    }

    public function update($id, $request)
    {
        return $this->SalesInvoiceRepositoryInterface->update($id, $request);
    }

    public function invoiceInvoicePayments($id)
    {
        return $this->SalesInvoiceRepositoryInterface->invoiceInvoicePayments($id);
    }
}
