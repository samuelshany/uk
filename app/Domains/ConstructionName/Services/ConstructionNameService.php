<?php

namespace App\Domains\ConstructionName\Services;

use App\Domains\ConstructionName\Interfaces\ConstructionNameRepositoryInterface;

class ConstructionNameService
{
    public function __construct(private ConstructionNameRepositoryInterface $ConstructionNameRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->ConstructionNameRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->ConstructionNameRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->ConstructionNameRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->ConstructionNameRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->ConstructionNameRepositoryInterface->update($id, $request);
    }


}
