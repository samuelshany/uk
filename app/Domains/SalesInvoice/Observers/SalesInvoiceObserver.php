<?php

namespace App\Domains\SalesInvoice\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\InventoryDeliveryOrder\Repositories\InventoryDeliveryOrderMySqlRepository;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\SalesInvoice\Models\SalesInvoice;
use App\Domains\SalesInvoicesPayment\Repositories\SalesInvoicesPaymentMySqlRepository;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\SalesInvoice\Models\SalesInvoiceMySqlRepository;
use App\Domains\SalesInvoice\Repositories\SalesInvoiceMySqlRepository as RepositoriesSalesInvoiceMySqlRepository;
use DB;

class SalesInvoiceObserver
{

    /**
     * Handle the SalesInvoice "created" event.
     *
     * @param \App\Domains\SalesInvoice\Models\SalesInvoice $SalesInvoice
     *
     * @return void
     */
    public function created(SalesInvoice $SalesInvoice)
    {
        $SalesInvoice->orderTracking()->create(['sales_invoice_id'=>$SalesInvoice->id,'creator_id' => $SalesInvoice->creator_id]);
    }

    public function updating(SalesInvoice $SalesInvoice)
    {
    }

    public function updated(SalesInvoice $SalesInvoice)
    {
        if ($SalesInvoice->paymentType && $SalesInvoice->accountPayment) {
            app(SalesInvoicesPaymentMySqlRepository::class)->store($SalesInvoice, request()->details);
        }
    }

    public function deleting(SalesInvoice $SalesInvoice)
    {
        //
    }

    /**
     * Handle the SalesInvoice "deleted" event.
     *
     * @param \App\Domains\SalesInvoice\Models\SalesInvoice $SalesInvoice
     *
     * @return void
     */
    public function deleted(SalesInvoice $SalesInvoice)
    {
        //
    }

    /**
     * Handle the SalesInvoice "restored" event.
     *
     * @param \App\Domains\SalesInvoice\Models\SalesInvoice $SalesInvoice
     *
     * @return void
     */
    public function restored(SalesInvoice $SalesInvoice)
    {
        //
    }

    /**
     * Handle the SalesInvoice "force deleted" event.
     *
     * @param \App\Domains\SalesInvoice\Models\SalesInvoice $SalesInvoice
     *
     * @return void
     */
    public function forceDeleted(SalesInvoice $SalesInvoice)
    {
        //
    }
}
