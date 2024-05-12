<?php

namespace App\Domains\SalesInvoicesPayment\Observers;


use App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment;
use DB;

class SalesInvoicesPaymentObserver
{

    /**
     * Handle the SalesInvoicesPayment "created" event.
     *
     * @param \App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment $salesInvoicesPayment
     *
     * @return void
     */
    public function created(SalesInvoicesPayment $salesInvoicesPayment)
    {
        //
    }

    public function updating(SalesInvoicesPayment $salesInvoicesPayment)
    {
        //
    }

    public function updated(SalesInvoicesPayment $salesInvoicesPayment)
    {
    }

    public function deleting(SalesInvoicesPayment $salesInvoicesPayment)
    {
        //
    }

    /**
     * Handle the SalesInvoicesPayment "deleted" event.
     *
     * @param \App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment $salesInvoicesPayment
     *
     * @return void
     */
    public function deleted(SalesInvoicesPayment $salesInvoicesPayment)
    {
        //
    }

    /**
     * Handle the SalesInvoicesPayment "restored" event.
     *
     * @param \App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment $salesInvoicesPayment
     *
     * @return void
     */
    public function restored(SalesInvoicesPayment $salesInvoicesPayment)
    {
        //
    }

    /**
     * Handle the SalesInvoicesPayment "force deleted" event.
     *
     * @param \App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment $salesInvoicesPayment
     *
     * @return void
     */
    public function forceDeleted(SalesInvoicesPayment $salesInvoicesPayment)
    {
        //
    }
}
