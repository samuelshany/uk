<?php

namespace App\Domains\SalesInvoicesPayment\Services;


use App\Domains\SalesInvoicesPayment\Interfaces\SalesInvoicesPaymentRepositoryInterface;

class SalesInvoicesPaymentService
{
    public function __construct(private SalesInvoicesPaymentRepositoryInterface $purchaseInvoicesPaymentRepository)
    {
    }
    public function findById($id)
    {
        return $this->purchaseInvoicesPaymentRepository->findById($id);
    }

    public function list()
    {
        return $this->purchaseInvoicesPaymentRepository->list();
    }

    public function create($PurchaseInvoice, $details)
    {
        return $this->purchaseInvoicesPaymentRepository->store($details);
    }

    public function update($id, $request)
    {
        return $this->purchaseInvoicesPaymentRepository->update($id, $request);
    }

    public function collect($id)
    {
        return $this->purchaseInvoicesPaymentRepository->collect($id);
    }

}
