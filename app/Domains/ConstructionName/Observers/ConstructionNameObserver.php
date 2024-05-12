<?php

namespace App\Domains\ConstructionName\Observers;

use App\Domains\ConstructionName\Models\ConstructionName;
use DB;

class ConstructionNameObserver
{

    /**
     * Handle the ConstructionName "created" event.
     *
     * @param \App\Domains\ConstructionName\Models\ConstructionName $ConstructionName
     *
     * @return void
     */
    public function created(ConstructionName $ConstructionName)
    {
        //
    }

    public function updating(ConstructionName $ConstructionName)
    {
    }

    public function updated(ConstructionName $ConstructionName)
    {

    }

    public function deleting(ConstructionName $ConstructionName)
    {
        //
    }

    /**
     * Handle the ConstructionName "deleted" event.
     *
     * @param \App\Domains\ConstructionName\Models\ConstructionName $ConstructionName
     *
     * @return void
     */
    public function deleted(ConstructionName $ConstructionName)
    {
        //
    }

    /**
     * Handle the ConstructionName "restored" event.
     *
     * @param \App\Domains\ConstructionName\Models\ConstructionName $ConstructionName
     *
     * @return void
     */
    public function restored(ConstructionName $ConstructionName)
    {
        //
    }

    /**
     * Handle the ConstructionName "force deleted" event.
     *
     * @param \App\Domains\ConstructionName\Models\ConstructionName $ConstructionName
     *
     * @return void
     */
    public function forceDeleted(ConstructionName $ConstructionName)
    {
        //
    }
}
