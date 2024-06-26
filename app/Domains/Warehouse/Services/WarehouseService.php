<?php

namespace App\Domains\Warehouse\Services;

use App\Domains\Warehouse\Imports\WarehouseImport;
use App\Domains\Warehouse\Interfaces\WarehouseRepositoryInterface;
use Maatwebsite\Excel\Facades\Excel;

class WarehouseService
{
    public function __construct(private WarehouseRepositoryInterface $warehouseRepository)
    {
    }

    public function list()
    {
        return $this->warehouseRepository->list();
    }
    public function findById($id)
    {
        return $this->warehouseRepository->findById($id);
    }

    public function delete($id)
    {
        return $this->warehouseRepository->delete($id);
    }

    public function create($request)
    {
        return $this->warehouseRepository->store($request);
    }

    public function update($id,$request)
    {
        return $this->warehouseRepository->update($id,$request);
    }

    public function import()
    {
        $import = new WarehouseImport();
        Excel::import($import, request()->file);
        return $import;
    }
}
