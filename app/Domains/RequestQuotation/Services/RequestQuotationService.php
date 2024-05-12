<?php

namespace App\Domains\RequestQuotation\Services;

use App\Domains\RequestQuotation\Interfaces\RequestQuotationRepositoryInterface;

class RequestQuotationService
{
    public function __construct(private RequestQuotationRepositoryInterface $RequestQuotationRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->RequestQuotationRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->RequestQuotationRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->RequestQuotationRepositoryInterface->delete($id);
    }

    public function update($id, $request)
    {
        return $this->RequestQuotationRepositoryInterface->update($id, $request);
    }
    public function approvedRequestQuotation($id)
    {
        return $this->RequestQuotationRepositoryInterface->approvedRequestQuotation($id);
    }
    public function canceledRequestQuotation($id)
    {
        return $this->RequestQuotationRepositoryInterface->canceledRequestQuotation($id);
    }
}
