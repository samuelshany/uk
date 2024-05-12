<?php

namespace App\Domains\PurchaseInvoicesPayment\Observers;


use App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment;
use DB;

class PurchaseInvoicesPaymentObserver
{

    /**
     * Handle the PurchaseInvoicesPayment "created" event.
     *
     * @param \App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment $PurchaseInvoicesPayment
     *
     * @return void
     */
    public function created(PurchaseInvoicesPayment $PurchaseInvoicesPayment)
    {
        //
    }

    public function updating(PurchaseInvoicesPayment $PurchaseInvoicesPayment)
    {
        //
    }

    public function updated(PurchaseInvoicesPayment $PurchaseInvoicesPayment)
    {
    }

    public function deleting(PurchaseInvoicesPayment $PurchaseInvoicesPayment)
    {
        //
    }

    /**
     * Handle the PurchaseInvoicesPayment "deleted" event.
     *
     * @param \App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment $PurchaseInvoicesPayment
     *
     * @return void
     */
    public function deleted(PurchaseInvoicesPayment $PurchaseInvoicesPayment)
    {
        //
    }

    /**
     * Handle the PurchaseInvoicesPayment "restored" event.
     *
     * @param \App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment $PurchaseInvoicesPayment
     *
     * @return void
     */
    public function restored(PurchaseInvoicesPayment $PurchaseInvoicesPayment)
    {
        //
    }

    /**
     * Handle the PurchaseInvoicesPayment "force deleted" event.
     *
     * @param \App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment $PurchaseInvoicesPayment
     *
     * @return void
     */
    public function forceDeleted(PurchaseInvoicesPayment $PurchaseInvoicesPayment)
    {
        //
    }
}
