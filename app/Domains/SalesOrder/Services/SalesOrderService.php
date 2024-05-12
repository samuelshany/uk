<?php

namespace App\Domains\SalesOrder\Services;


use App\Domains\SalesOrder\Interfaces\SalesOrderRepositoryInterface;

class SalesOrderService
{
    public function __construct(private SalesOrderRepositoryInterface $SalesOrderRepository)
    {
    }
    public function findById($id)
    {
        return $this->SalesOrderRepository->findById($id);
    }

    public function list()
    {
        return $this->SalesOrderRepository->list();
    }

    public function delete($id)
    {
        return $this->SalesOrderRepository->delete($id);
    }

    public function create($request)
    {
        return $this->SalesOrderRepository->store($request);
    }

    public function update($id, $request)
    {
        return $this->SalesOrderRepository->update($id, $request);
    }

    public function approveOrder($id)
    {
        return $this->SalesOrderRepository->approveOrder($id);
    }

    public function cancelOrder($id)
    {
        return $this->SalesOrderRepository->cancelOrder($id);
    }

}
