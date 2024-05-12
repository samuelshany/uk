<?php

namespace App\Domains\Clause\Observers;

use App\Domains\Clause\Models\Clause;
use DB;

class ClauseObserver
{

    /**
     * Handle the Clause "created" event.
     *
     * @param \App\Domains\Clause\Models\Clause $Clause
     *
     * @return void
     */
    public function created(Clause $Clause)
    {
        //
    }

    public function updating(Clause $Clause)
    {
    }

    public function updated(Clause $Clause)
    {

    }

    public function deleting(Clause $Clause)
    {
        //
    }

    /**
     * Handle the Clause "deleted" event.
     *
     * @param \App\Domains\Clause\Models\Clause $Clause
     *
     * @return void
     */
    public function deleted(Clause $Clause)
    {
        //
    }

    /**
     * Handle the Clause "restored" event.
     *
     * @param \App\Domains\Clause\Models\Clause $Clause
     *
     * @return void
     */
    public function restored(Clause $Clause)
    {
        //
    }

    /**
     * Handle the Clause "force deleted" event.
     *
     * @param \App\Domains\Clause\Models\Clause $Clause
     *
     * @return void
     */
    public function forceDeleted(Clause $Clause)
    {
        //
    }
}
