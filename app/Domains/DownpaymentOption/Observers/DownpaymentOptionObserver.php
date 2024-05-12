<?php

namespace App\Domains\DownpaymentOption\Observers;

use App\Domains\DownpaymentOption\Models\DownpaymentOption;
use DB;

class DownpaymentOptionObserver
{

    /**
     * Handle the DownpaymentOption "created" event.
     *
     * @param \App\Domains\DownpaymentOption\Models\DownpaymentOption $DownpaymentOption
     *
     * @return void
     */
    public function created(DownpaymentOption $DownpaymentOption)
    {
        //
    }

    public function updating(DownpaymentOption $DownpaymentOption)
    {
    }

    public function updated(DownpaymentOption $DownpaymentOption)
    {

    }

    public function deleting(DownpaymentOption $DownpaymentOption)
    {
        //
    }

    /**
     * Handle the DownpaymentOption "deleted" event.
     *
     * @param \App\Domains\DownpaymentOption\Models\DownpaymentOption $DownpaymentOption
     *
     * @return void
     */
    public function deleted(DownpaymentOption $DownpaymentOption)
    {
        //
    }

    /**
     * Handle the DownpaymentOption "restored" event.
     *
     * @param \App\Domains\DownpaymentOption\Models\DownpaymentOption $DownpaymentOption
     *
     * @return void
     */
    public function restored(DownpaymentOption $DownpaymentOption)
    {
        //
    }

    /**
     * Handle the DownpaymentOption "force deleted" event.
     *
     * @param \App\Domains\DownpaymentOption\Models\DownpaymentOption $DownpaymentOption
     *
     * @return void
     */
    public function forceDeleted(DownpaymentOption $DownpaymentOption)
    {
        //
    }
}
