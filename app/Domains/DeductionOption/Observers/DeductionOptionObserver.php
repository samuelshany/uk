<?php

namespace App\Domains\DeductionOption\Observers;

use App\Domains\DeductionOption\Models\DeductionOption;
use DB;

class DeductionOptionObserver
{

    /**
     * Handle the DeductionOption "created" event.
     *
     * @param \App\Domains\DeductionOption\Models\DeductionOption $DeductionOption
     *
     * @return void
     */
    public function created(DeductionOption $DeductionOption)
    {
        //
    }

    public function updating(DeductionOption $DeductionOption)
    {
    }

    public function updated(DeductionOption $DeductionOption)
    {

    }

    public function deleting(DeductionOption $DeductionOption)
    {
        //
    }

    /**
     * Handle the DeductionOption "deleted" event.
     *
     * @param \App\Domains\DeductionOption\Models\DeductionOption $DeductionOption
     *
     * @return void
     */
    public function deleted(DeductionOption $DeductionOption)
    {
        //
    }

    /**
     * Handle the DeductionOption "restored" event.
     *
     * @param \App\Domains\DeductionOption\Models\DeductionOption $DeductionOption
     *
     * @return void
     */
    public function restored(DeductionOption $DeductionOption)
    {
        //
    }

    /**
     * Handle the DeductionOption "force deleted" event.
     *
     * @param \App\Domains\DeductionOption\Models\DeductionOption $DeductionOption
     *
     * @return void
     */
    public function forceDeleted(DeductionOption $DeductionOption)
    {
        //
    }
}
