<?php

namespace App\Domains\InventoryReceiptOrder\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder;
use App\Domains\InventoryReceiptOrdersPayment\Repositories\InventoryReceiptOrdersPaymentMySqlRepository;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrderMySqlRepository;
use App\Domains\InventoryReceiptOrder\Repositories\InventoryReceiptOrderMySqlRepository as RepositoriesInventoryReceiptOrderMySqlRepository;
use DB;

class InventoryReceiptOrderObserver
{

    /**
     * Handle the InventoryReceiptOrder "created" event.
     *
     * @param \App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder $InventoryReceiptOrder
     *
     * @return void
     */
    public function created(InventoryReceiptOrder $InventoryReceiptOrder)
    {
        //
    }

    public function updating(InventoryReceiptOrder $InventoryReceiptOrder)
    {
    }

    public function updated(InventoryReceiptOrder $InventoryReceiptOrder)
    {
        
    }

    public function deleting(InventoryReceiptOrder $InventoryReceiptOrder)
    {
        //
    }

    /**
     * Handle the InventoryReceiptOrder "deleted" event.
     *
     * @param \App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder $InventoryReceiptOrder
     *
     * @return void
     */
    public function deleted(InventoryReceiptOrder $InventoryReceiptOrder)
    {
        //
    }

    /**
     * Handle the InventoryReceiptOrder "restored" event.
     *
     * @param \App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder $InventoryReceiptOrder
     *
     * @return void
     */
    public function restored(InventoryReceiptOrder $InventoryReceiptOrder)
    {
        //
    }

    /**
     * Handle the InventoryReceiptOrder "force deleted" event.
     *
     * @param \App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder $InventoryReceiptOrder
     *
     * @return void
     */
    public function forceDeleted(InventoryReceiptOrder $InventoryReceiptOrder)
    {
        //
    }
}
