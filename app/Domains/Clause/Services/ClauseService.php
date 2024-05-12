<?php

namespace App\Domains\Clause\Services;

use App\Domains\Clause\Interfaces\ClauseRepositoryInterface;

class ClauseService
{
    public function __construct(private ClauseRepositoryInterface $clauseRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->clauseRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->clauseRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->clauseRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->clauseRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->clauseRepositoryInterface->update($id, $request);
    }


}
