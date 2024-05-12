<?php

namespace App\Domains\CustomizeReport\Observers;

use App\Domains\CustomizeReport\Models\CustomizeReport;
use DB;

class CustomizeReportObserver
{

    /**
     * Handle the CustomizeReport "created" event.
     *
     * @param \App\Domains\CustomizeReport\Models\CustomizeReport $CustomizeReport
     *
     * @return void
     */
    public function created(CustomizeReport $CustomizeReport)
    {
        //
    }

    public function updating(CustomizeReport $CustomizeReport)
    {
    }

    public function updated(CustomizeReport $CustomizeReport)
    {

    }

    public function deleting(CustomizeReport $CustomizeReport)
    {
        //
    }

    /**
     * Handle the CustomizeReport "deleted" event.
     *
     * @param \App\Domains\CustomizeReport\Models\CustomizeReport $CustomizeReport
     *
     * @return void
     */
    public function deleted(CustomizeReport $CustomizeReport)
    {
        //
    }

    /**
     * Handle the CustomizeReport "restored" event.
     *
     * @param \App\Domains\CustomizeReport\Models\CustomizeReport $CustomizeReport
     *
     * @return void
     */
    public function restored(CustomizeReport $CustomizeReport)
    {
        //
    }

    /**
     * Handle the CustomizeReport "force deleted" event.
     *
     * @param \App\Domains\CustomizeReport\Models\CustomizeReport $CustomizeReport
     *
     * @return void
     */
    public function forceDeleted(CustomizeReport $CustomizeReport)
    {
        //
    }
}
