<?php

namespace App\Domains\Unit\Observers;

use App\Domains\Unit\Models\Unit;
use DB;

class UnitObserver
{

    /**
     * Handle the Unit "created" event.
     *
     * @param \App\Domains\Unit\Models\Unit $Unit
     *
     * @return void
     */
    public function created(Unit $Unit)
    {
        //
    }

    public function updating(Unit $Unit)
    {
    }

    public function updated(Unit $Unit)
    {

    }

    public function deleting(Unit $Unit)
    {
        //
    }

    /**
     * Handle the Unit "deleted" event.
     *
     * @param \App\Domains\Unit\Models\Unit $Unit
     *
     * @return void
     */
    public function deleted(Unit $Unit)
    {
        //
    }

    /**
     * Handle the Unit "restored" event.
     *
     * @param \App\Domains\Unit\Models\Unit $Unit
     *
     * @return void
     */
    public function restored(Unit $Unit)
    {
        //
    }

    /**
     * Handle the Unit "force deleted" event.
     *
     * @param \App\Domains\Unit\Models\Unit $Unit
     *
     * @return void
     */
    public function forceDeleted(Unit $Unit)
    {
        //
    }
}
