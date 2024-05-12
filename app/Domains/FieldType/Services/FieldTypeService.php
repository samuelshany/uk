<?php

namespace App\Domains\FieldType\Services;

use App\Domains\FieldType\Interfaces\FieldTypeRepositoryInterface;

class FieldTypeService
{
    public function __construct(private FieldTypeRepositoryInterface $FieldTypeRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->FieldTypeRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->FieldTypeRepositoryInterface->list();
    }

    public function delete($id)
    {
        return $this->FieldTypeRepositoryInterface->delete($id);
    }

    public function store($request)
    {
        return $this->FieldTypeRepositoryInterface->store( $request);
    }
    public function update($id, $request)
    {
        return $this->FieldTypeRepositoryInterface->update($id, $request);
    }


}
