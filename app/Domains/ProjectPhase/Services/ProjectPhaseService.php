<?php

namespace App\Domains\ProjectPhase\Services;

use App\Domains\ProjectPhase\Interfaces\ProjectPhaseRepositoryInterface;

class ProjectPhaseService
{
    public function __construct(private ProjectPhaseRepositoryInterface $ProjectPhaseRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->ProjectPhaseRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->ProjectPhaseRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->ProjectPhaseRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->ProjectPhaseRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->ProjectPhaseRepositoryInterface->update($id, $request);
    }


}
