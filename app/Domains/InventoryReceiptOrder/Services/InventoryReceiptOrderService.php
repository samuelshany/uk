<?php

namespace App\Domains\InventoryReceiptOrder\Services;

use App\Domains\InventoryReceiptOrder\Interfaces\InventoryReceiptOrderRepositoryInterface;

class InventoryReceiptOrderService
{
    public function __construct(private InventoryReceiptOrderRepositoryInterface $InventoryReceiptOrderRepositoryInterface)
    {
    }
    public function findById($id)
    {
        return $this->InventoryReceiptOrderRepositoryInterface->findById($id);
    }

    public function list()
    {
        return $this->InventoryReceiptOrderRepositoryInterface->list();
    }
    public function listInvoiceDetails($id)
    {
        return $this->InventoryReceiptOrderRepositoryInterface->listInvoiceDetails($id);
    }

    public function confirmReceiptOrder($id)
    {
        return $this->InventoryReceiptOrderRepositoryInterface->confirmReceiptOrder($id);
    }

/*     public function delete($id)
    {
        return $this->InventoryReceiptOrderRepositoryInterface->delete($id);
    }
 */
    public function update($id, $request)
    {
        return $this->InventoryReceiptOrderRepositoryInterface->update($id, $request);
    }


}
