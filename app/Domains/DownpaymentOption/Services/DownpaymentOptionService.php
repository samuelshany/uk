<?php

namespace App\Domains\DownpaymentOption\Services;

use App\Domains\DownpaymentOption\Interfaces\DownpaymentOptionRepositoryInterface;

class DownpaymentOptionService
{
    public function __construct(private DownpaymentOptionRepositoryInterface $downpaymentOptionRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->downpaymentOptionRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->downpaymentOptionRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->downpaymentOptionRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->downpaymentOptionRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->downpaymentOptionRepositoryInterface->update($id, $request);
    }


}
