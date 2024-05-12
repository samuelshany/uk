<?php

namespace App\Domains\InventoryDeliveryOrder\Services;

use App\Domains\InventoryDeliveryOrder\Interfaces\InventoryDeliveryOrderRepositoryInterface;

class InventoryDeliveryOrderService
{
    public function __construct(private InventoryDeliveryOrderRepositoryInterface $InventoryDeliveryOrderRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->InventoryDeliveryOrderRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->InventoryDeliveryOrderRepositoryInterface->list();
    }
    public function listInvoiceDetails($id)
    {
        return $this->InventoryDeliveryOrderRepositoryInterface->listInvoiceDetails($id);
    }

    public function confirmReceiptOrder($id)
    {
        return $this->InventoryDeliveryOrderRepositoryInterface->confirmReceiptOrder($id);
    }

/*     public function delete($id)
    {
        return $this->InventoryDeliveryOrderRepositoryInterface->delete($id);
    }
 */
    public function update($id, $request)
    {
        return $this->InventoryDeliveryOrderRepositoryInterface->update($id, $request);
    }


}
