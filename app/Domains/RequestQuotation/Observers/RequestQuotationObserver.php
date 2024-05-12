<?php

namespace App\Domains\RequestQuotation\Observers;

use App\Domains\PurchaseInvoice\Repositories\PurchaseInvoiceMySqlRepository;
use App\Domains\RequestQuotation\Models\RequestQuotation;

class RequestQuotationObserver
{

    /**
     * Handle the RequestQuotation "created" event.
     *
     * @param \App\Domains\RequestQuotation\Models\RequestQuotation $RequestQuotation
     *
     * @return void
     */
    public function created(RequestQuotation $RequestQuotation)
    {
        //
    }

    public function updating(RequestQuotation $RequestQuotation)
    {
    }

    public function updated(RequestQuotation $RequestQuotation)
    {
        if ($RequestQuotation->is_approved == 1) {
            $invoiceTotal = $RequestQuotation->supplier_total ;
            app(PurchaseInvoiceMySqlRepository::class)->createPurchaseInvoice($RequestQuotation->purchaseRequest, $invoiceTotal, $RequestQuotation->supplier_id);
        }
    }

    public function deleting(RequestQuotation $RequestQuotation)
    {
        //
    }

    /**
     * Handle the RequestQuotation "deleted" event.
     *
     * @param \App\Domains\RequestQuotation\Models\RequestQuotation $RequestQuotation
     *
     * @return void
     */
    public function deleted(RequestQuotation $RequestQuotation)
    {
        //
    }

    /**
     * Handle the RequestQuotation "restored" event.
     *
     * @param \App\Domains\RequestQuotation\Models\RequestQuotation $RequestQuotation
     *
     * @return void
     */
    public function restored(RequestQuotation $RequestQuotation)
    {
        //
    }

    /**
     * Handle the RequestQuotation "force deleted" event.
     *
     * @param \App\Domains\RequestQuotation\Models\RequestQuotation $RequestQuotation
     *
     * @return void
     */
    public function forceDeleted(RequestQuotation $RequestQuotation)
    {
        //
    }
}
