<?php

namespace App\Domains\WorkType\Observers;

use App\Domains\WorkType\Models\WorkType;
use DB;

class WorkTypeObserver
{

    /**
     * Handle the WorkType "created" event.
     *
     * @param \App\Domains\WorkType\Models\WorkType $WorkType
     *
     * @return void
     */
    public function created(WorkType $WorkType)
    {
        //
    }

    public function updating(WorkType $WorkType)
    {
    }

    public function updated(WorkType $WorkType)
    {

    }

    public function deleting(WorkType $WorkType)
    {
        //
    }

    /**
     * Handle the WorkType "deleted" event.
     *
     * @param \App\Domains\WorkType\Models\WorkType $WorkType
     *
     * @return void
     */
    public function deleted(WorkType $WorkType)
    {
        //
    }

    /**
     * Handle the WorkType "restored" event.
     *
     * @param \App\Domains\WorkType\Models\WorkType $WorkType
     *
     * @return void
     */
    public function restored(WorkType $WorkType)
    {
        //
    }

    /**
     * Handle the WorkType "force deleted" event.
     *
     * @param \App\Domains\WorkType\Models\WorkType $WorkType
     *
     * @return void
     */
    public function forceDeleted(WorkType $WorkType)
    {
        //
    }
}
