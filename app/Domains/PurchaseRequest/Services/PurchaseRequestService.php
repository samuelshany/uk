<?php

namespace App\Domains\PurchaseRequest\Services;


use App\Domains\PurchaseRequest\Interfaces\PurchaseRequestRepositoryInterface;

class PurchaseRequestService
{
    public function __construct(private PurchaseRequestRepositoryInterface $PurchaseRequestRepository)
    {
    }
    public function findById($id)
    {
        return $this->PurchaseRequestRepository->findById($id);
    }

    public function list()
    {
        return $this->PurchaseRequestRepository->list();
    }

    public function delete($id)
    {
        return $this->PurchaseRequestRepository->delete($id);
    }

    public function create($request)
    {
        return $this->PurchaseRequestRepository->store($request);
    }

    public function update($id, $request)
    {
        return $this->PurchaseRequestRepository->update($id, $request);
    }

    public function approveRequest($id)
    {
        return $this->PurchaseRequestRepository->approveRequest($id);
    }

    public function cancelRequest($id)
    {
        return $this->PurchaseRequestRepository->cancelRequest($id);
    }
    public function sendNotificationToSuppliers($id, $suppliers)
    {
        return $this->PurchaseRequestRepository->sendNotificationToSuppliers($id, $suppliers);
    }
}
