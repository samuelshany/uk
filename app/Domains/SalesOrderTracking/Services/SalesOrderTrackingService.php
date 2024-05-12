<?php

namespace App\Domains\SalesOrderTracking\Services;

use App\Domains\SalesOrderTracking\Interfaces\SalesOrderTrackingRepositoryInterface;

class SalesOrderTrackingService
{
    public function __construct(private SalesOrderTrackingRepositoryInterface $SalesOrderTrackingRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->SalesOrderTrackingRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->SalesOrderTrackingRepositoryInterface->list();
    }


   /*  public function delete($id)
    {
        return $this->SalesOrderTrackingRepositoryInterface->delete($id);
    } */

    public function update($id, $request)
    {
        return $this->SalesOrderTrackingRepositoryInterface->update($id, $request);
    }

}
