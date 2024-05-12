<?php

namespace App\Domains\InventoryDeliveryOrder\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder;
use App\Domains\InventoryDeliveryOrdersPayment\Repositories\InventoryDeliveryOrdersPaymentMySqlRepository;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrderMySqlRepository;
use App\Domains\InventoryDeliveryOrder\Repositories\InventoryDeliveryOrderMySqlRepository as RepositoriesInventoryDeliveryOrderMySqlRepository;
use DB;

class InventoryDeliveryOrderObserver
{

    /**
     * Handle the InventoryDeliveryOrder "created" event.
     *
     * @param \App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder $InventoryDeliveryOrder
     *
     * @return void
     */
    public function created(InventoryDeliveryOrder $InventoryDeliveryOrder)
    {
        //
    }

    public function updating(InventoryDeliveryOrder $InventoryDeliveryOrder)
    {
    }

    public function updated(InventoryDeliveryOrder $InventoryDeliveryOrder)
    {
        
    }

    public function deleting(InventoryDeliveryOrder $InventoryDeliveryOrder)
    {
        //
    }

    /**
     * Handle the InventoryDeliveryOrder "deleted" event.
     *
     * @param \App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder $InventoryDeliveryOrder
     *
     * @return void
     */
    public function deleted(InventoryDeliveryOrder $InventoryDeliveryOrder)
    {
        //
    }

    /**
     * Handle the InventoryDeliveryOrder "restored" event.
     *
     * @param \App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder $InventoryDeliveryOrder
     *
     * @return void
     */
    public function restored(InventoryDeliveryOrder $InventoryDeliveryOrder)
    {
        //
    }

    /**
     * Handle the InventoryDeliveryOrder "force deleted" event.
     *
     * @param \App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder $InventoryDeliveryOrder
     *
     * @return void
     */
    public function forceDeleted(InventoryDeliveryOrder $InventoryDeliveryOrder)
    {
        //
    }
}
