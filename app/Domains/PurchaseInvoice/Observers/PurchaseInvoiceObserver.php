<?php

namespace App\Domains\PurchaseInvoice\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\InventoryReceiptOrder\Repositories\InventoryReceiptOrderMySqlRepository;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\PurchaseInvoice\Models\PurchaseInvoice;
use App\Domains\PurchaseInvoicesPayment\Repositories\PurchaseInvoicesPaymentMySqlRepository;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\PurchaseInvoice\Models\PurchaseInvoiceMySqlRepository;
use App\Domains\PurchaseInvoice\Repositories\PurchaseInvoiceMySqlRepository as RepositoriesPurchaseInvoiceMySqlRepository;
use DB;

class PurchaseInvoiceObserver
{

    /**
     * Handle the PurchaseInvoice "created" event.
     *
     * @param \App\Domains\PurchaseInvoice\Models\PurchaseInvoice $PurchaseInvoice
     *
     * @return void
     */
    public function created(PurchaseInvoice $PurchaseInvoice)
    {
        app(InventoryReceiptOrderMySqlRepository::class)->createInventoryReceiptOrder($PurchaseInvoice);
    }

    public function updating(PurchaseInvoice $PurchaseInvoice)
    {
    }

    public function updated(PurchaseInvoice $PurchaseInvoice)
    {
        if ($PurchaseInvoice->paymentType && $PurchaseInvoice->accountPayment) {
            app(PurchaseInvoicesPaymentMySqlRepository::class)->store($PurchaseInvoice, request()->details);
        }
    }

    public function deleting(PurchaseInvoice $PurchaseInvoice)
    {
        //
    }

    /**
     * Handle the PurchaseInvoice "deleted" event.
     *
     * @param \App\Domains\PurchaseInvoice\Models\PurchaseInvoice $PurchaseInvoice
     *
     * @return void
     */
    public function deleted(PurchaseInvoice $PurchaseInvoice)
    {
        //
    }

    /**
     * Handle the PurchaseInvoice "restored" event.
     *
     * @param \App\Domains\PurchaseInvoice\Models\PurchaseInvoice $PurchaseInvoice
     *
     * @return void
     */
    public function restored(PurchaseInvoice $PurchaseInvoice)
    {
        //
    }

    /**
     * Handle the PurchaseInvoice "force deleted" event.
     *
     * @param \App\Domains\PurchaseInvoice\Models\PurchaseInvoice $PurchaseInvoice
     *
     * @return void
     */
    public function forceDeleted(PurchaseInvoice $PurchaseInvoice)
    {
        //
    }
}
