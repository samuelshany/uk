<?php

namespace App\Domains\PurchaseRequest\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\PurchaseRequest\Models\PurchaseRequest;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\RequestQuotation\Models\RequestQuotation;
use App\Domains\RequestQuotation\Models\RequestQuotationMySqlRepository;
use App\Domains\RequestQuotation\Repositories\RequestQuotationMySqlRepository as RepositoriesRequestQuotationMySqlRepository;
use DB;

class PurchaseRequestObserver
{

    /**
     * Handle the PurchaseRequest "created" event.
     *
     * @param \App\Domains\PurchaseRequest\Models\PurchaseRequest $PurchaseRequest
     *
     * @return void
     */
    public function created(PurchaseRequest $PurchaseRequest)
    {
        //
    }

    public function updating(PurchaseRequest $PurchaseRequest)
    {
    }

    public function updated(PurchaseRequest $PurchaseRequest)
    {
        if ($PurchaseRequest->is_suppliers_notified == 1 && request()->suppliers) {

            app(RepositoriesRequestQuotationMySqlRepository::class)->createRequestQuotaion($PurchaseRequest->id, $PurchaseRequest->total, request()->suppliers);
        }
    }

    public function deleting(PurchaseRequest $PurchaseRequest)
    {
        //
    }

    /**
     * Handle the PurchaseRequest "deleted" event.
     *
     * @param \App\Domains\PurchaseRequest\Models\PurchaseRequest $PurchaseRequest
     *
     * @return void
     */
    public function deleted(PurchaseRequest $PurchaseRequest)
    {
        //
    }

    /**
     * Handle the PurchaseRequest "restored" event.
     *
     * @param \App\Domains\PurchaseRequest\Models\PurchaseRequest $PurchaseRequest
     *
     * @return void
     */
    public function restored(PurchaseRequest $PurchaseRequest)
    {
        //
    }

    /**
     * Handle the PurchaseRequest "force deleted" event.
     *
     * @param \App\Domains\PurchaseRequest\Models\PurchaseRequest $PurchaseRequest
     *
     * @return void
     */
    public function forceDeleted(PurchaseRequest $PurchaseRequest)
    {
        //
    }
}
