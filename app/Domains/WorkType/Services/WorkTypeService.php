<?php

namespace App\Domains\WorkType\Services;

use App\Domains\WorkType\Interfaces\WorkTypeRepositoryInterface;

class WorkTypeService
{
    public function __construct(private WorkTypeRepositoryInterface $WorkTypeRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->WorkTypeRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->WorkTypeRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->WorkTypeRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->WorkTypeRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->WorkTypeRepositoryInterface->update($id, $request);
    }


}
