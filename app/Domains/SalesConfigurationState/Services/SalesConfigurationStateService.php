<?php

namespace App\Domains\SalesConfigurationState\Services;

use App\Domains\SalesConfigurationState\Interfaces\SalesConfigurationStateRepositoryInterface;

class SalesConfigurationStateService
{
    public function __construct(private SalesConfigurationStateRepositoryInterface $SalesConfigurationStateRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->SalesConfigurationStateRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->SalesConfigurationStateRepositoryInterface->list();
    }
    public function store($request)
    {
        return $this->SalesConfigurationStateRepositoryInterface->store($request);
    }
    public function delete($id)
    {
        return $this->SalesConfigurationStateRepositoryInterface->delete($id);
    }

    public function update($id, $request)
    {
        return $this->SalesConfigurationStateRepositoryInterface->update($id, $request);
    }
}
