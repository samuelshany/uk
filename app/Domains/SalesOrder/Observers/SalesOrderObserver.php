<?php

namespace App\Domains\SalesOrder\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\SalesOrder\Models\SalesOrder;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\RequestQuotation\Models\RequestQuotation;
use App\Domains\RequestQuotation\Models\RequestQuotationMySqlRepository;
use App\Domains\RequestQuotation\Repositories\RequestQuotationMySqlRepository as RepositoriesRequestQuotationMySqlRepository;
use App\Domains\SalesInvoice\Repositories\SalesInvoiceMySqlRepository;
use DB;

class SalesOrderObserver
{

    /**
     * Handle the SalesOrder "created" event.
     *
     * @param \App\Domains\SalesOrder\Models\SalesOrder $salesOrder
     *
     * @return void
     */
    public function created(SalesOrder $salesOrder)
    {
        //
    }

    public function updating(SalesOrder $salesOrder)
    {
    }

    public function updated(SalesOrder $salesOrder)
    {
        if ($salesOrder->status == 'approved') {
            app(SalesInvoiceMySqlRepository::class)->createSalesInvoice($salesOrder,$salesOrder->total,$salesOrder->customer_id);
        }
    }

    public function deleting(SalesOrder $salesOrder)
    {
        //
    }

    /**
     * Handle the SalesOrder "deleted" event.
     *
     * @param \App\Domains\SalesOrder\Models\SalesOrder $salesOrder
     *
     * @return void
     */
    public function deleted(SalesOrder $salesOrder)
    {
        //
    }

    /**
     * Handle the SalesOrder "restored" event.
     *
     * @param \App\Domains\SalesOrder\Models\SalesOrder $salesOrder
     *
     * @return void
     */
    public function restored(SalesOrder $salesOrder)
    {
        //
    }

    /**
     * Handle the SalesOrder "force deleted" event.
     *
     * @param \App\Domains\SalesOrder\Models\SalesOrder $salesOrder
     *
     * @return void
     */
    public function forceDeleted(SalesOrder $salesOrder)
    {
        //
    }
}
