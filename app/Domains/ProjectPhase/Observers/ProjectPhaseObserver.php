<?php

namespace App\Domains\ProjectPhase\Observers;

use App\Domains\ProjectPhase\Models\ProjectPhase;
use DB;

class ProjectPhaseObserver
{

    /**
     * Handle the ProjectPhase "created" event.
     *
     * @param \App\Domains\ProjectPhase\Models\ProjectPhase $ProjectPhase
     *
     * @return void
     */
    public function created(ProjectPhase $ProjectPhase)
    {
        //
    }

    public function updating(ProjectPhase $ProjectPhase)
    {
    }

    public function updated(ProjectPhase $ProjectPhase)
    {

    }

    public function deleting(ProjectPhase $ProjectPhase)
    {
        //
    }

    /**
     * Handle the ProjectPhase "deleted" event.
     *
     * @param \App\Domains\ProjectPhase\Models\ProjectPhase $ProjectPhase
     *
     * @return void
     */
    public function deleted(ProjectPhase $ProjectPhase)
    {
        //
    }

    /**
     * Handle the ProjectPhase "restored" event.
     *
     * @param \App\Domains\ProjectPhase\Models\ProjectPhase $ProjectPhase
     *
     * @return void
     */
    public function restored(ProjectPhase $ProjectPhase)
    {
        //
    }

    /**
     * Handle the ProjectPhase "force deleted" event.
     *
     * @param \App\Domains\ProjectPhase\Models\ProjectPhase $ProjectPhase
     *
     * @return void
     */
    public function forceDeleted(ProjectPhase $ProjectPhase)
    {
        //
    }
}
