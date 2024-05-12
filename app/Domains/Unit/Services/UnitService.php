<?php

namespace App\Domains\Unit\Services;

use App\Domains\Unit\Interfaces\UnitRepositoryInterface;

class UnitService
{
    public function __construct(private UnitRepositoryInterface $UnitRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->UnitRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->UnitRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->UnitRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->UnitRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->UnitRepositoryInterface->update($id, $request);
    }


}
