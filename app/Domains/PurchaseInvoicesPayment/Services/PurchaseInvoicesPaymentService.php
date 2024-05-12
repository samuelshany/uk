<?php

namespace App\Domains\PurchaseInvoicesPayment\Services;


use App\Domains\PurchaseInvoicesPayment\Interfaces\PurchaseInvoicesPaymentRepositoryInterface;

class PurchaseInvoicesPaymentService
{
    public function __construct(private PurchaseInvoicesPaymentRepositoryInterface $PurchaseInvoicesPaymentRepository)
    {
    }
    public function findById($id)
    {
        return $this->PurchaseInvoicesPaymentRepository->findById($id);
    }

    public function list()
    {
        return $this->PurchaseInvoicesPaymentRepository->list();
    }

    public function create($PurchaseInvoice, $details)
    {
        return $this->PurchaseInvoicesPaymentRepository->store($details);
    }

    public function update($id, $request)
    {
        return $this->PurchaseInvoicesPaymentRepository->update($id, $request);
    }

    public function collect($id)
    {
        return $this->PurchaseInvoicesPaymentRepository->collect($id);
    }

}
