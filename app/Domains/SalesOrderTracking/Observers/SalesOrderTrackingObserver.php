<?php

namespace App\Domains\SalesOrderTracking\Observers;

use App\Domains\SalesOrderTracking\Models\SalesOrderTracking;
use App\Domains\SalesOrderTrackingsPayment\Repositories\SalesOrderTrackingsPaymentMySqlRepository;
use DB;

class SalesOrderTrackingObserver
{

    /**
     * Handle the SalesOrderTracking "created" event.
     *
     * @param \App\Domains\SalesOrderTracking\Models\SalesOrderTracking $SalesOrderTracking
     *
     * @return void
     */
    public function created(SalesOrderTracking $SalesOrderTracking)
    {
        //
    }

    public function updating(SalesOrderTracking $SalesOrderTracking)
    {
    }

    public function updated(SalesOrderTracking $SalesOrderTracking)
    {

    }

    public function deleting(SalesOrderTracking $SalesOrderTracking)
    {
        //
    }

    /**
     * Handle the SalesOrderTracking "deleted" event.
     *
     * @param \App\Domains\SalesOrderTracking\Models\SalesOrderTracking $SalesOrderTracking
     *
     * @return void
     */
    public function deleted(SalesOrderTracking $SalesOrderTracking)
    {
        //
    }

    /**
     * Handle the SalesOrderTracking "restored" event.
     *
     * @param \App\Domains\SalesOrderTracking\Models\SalesOrderTracking $SalesOrderTracking
     *
     * @return void
     */
    public function restored(SalesOrderTracking $SalesOrderTracking)
    {
        //
    }

    /**
     * Handle the SalesOrderTracking "force deleted" event.
     *
     * @param \App\Domains\SalesOrderTracking\Models\SalesOrderTracking $SalesOrderTracking
     *
     * @return void
     */
    public function forceDeleted(SalesOrderTracking $SalesOrderTracking)
    {
        //
    }
}
