<?php

namespace App\Domains\FieldType\Observers;

use App\Domains\FieldType\Models\FieldType;
use DB;

class FieldTypeObserver
{

    /**
     * Handle the FieldType "created" event.
     *
     * @param \App\Domains\FieldType\Models\FieldType $FieldType
     *
     * @return void
     */
    public function created(FieldType $FieldType)
    {
        //
    }

    public function updating(FieldType $FieldType)
    {
    }

    public function updated(FieldType $FieldType)
    {

    }

    public function deleting(FieldType $FieldType)
    {
        //
    }

    /**
     * Handle the FieldType "deleted" event.
     *
     * @param \App\Domains\FieldType\Models\FieldType $FieldType
     *
     * @return void
     */
    public function deleted(FieldType $FieldType)
    {
        //
    }

    /**
     * Handle the FieldType "restored" event.
     *
     * @param \App\Domains\FieldType\Models\FieldType $FieldType
     *
     * @return void
     */
    public function restored(FieldType $FieldType)
    {
        //
    }

    /**
     * Handle the FieldType "force deleted" event.
     *
     * @param \App\Domains\FieldType\Models\FieldType $FieldType
     *
     * @return void
     */
    public function forceDeleted(FieldType $FieldType)
    {
        //
    }
}
