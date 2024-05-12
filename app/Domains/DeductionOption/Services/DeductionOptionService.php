<?php

namespace App\Domains\DeductionOption\Services;

use App\Domains\DeductionOption\Interfaces\DeductionOptionRepositoryInterface;

class DeductionOptionService
{
    public function __construct(private DeductionOptionRepositoryInterface $deductionOptionRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->deductionOptionRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->deductionOptionRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->deductionOptionRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->deductionOptionRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->deductionOptionRepositoryInterface->update($id, $request);
    }


}
