<?php

namespace App\Domains\ProjectManagementCategory\Observers;

use App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory;
use DB;

class ProjectManagementCategoryObserver
{

    /**
     * Handle the ProjectManagementCategory "created" event.
     *
     * @param \App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory $ProjectManagementCategory
     *
     * @return void
     */
    public function created(ProjectManagementCategory $ProjectManagementCategory)
    {
        //
    }

    public function updating(ProjectManagementCategory $ProjectManagementCategory)
    {
    }

    public function updated(ProjectManagementCategory $ProjectManagementCategory)
    {

    }

    public function deleting(ProjectManagementCategory $ProjectManagementCategory)
    {
        //
    }

    /**
     * Handle the ProjectManagementCategory "deleted" event.
     *
     * @param \App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory $ProjectManagementCategory
     *
     * @return void
     */
    public function deleted(ProjectManagementCategory $ProjectManagementCategory)
    {
        //
    }

    /**
     * Handle the ProjectManagementCategory "restored" event.
     *
     * @param \App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory $ProjectManagementCategory
     *
     * @return void
     */
    public function restored(ProjectManagementCategory $ProjectManagementCategory)
    {
        //
    }

    /**
     * Handle the ProjectManagementCategory "force deleted" event.
     *
     * @param \App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory $ProjectManagementCategory
     *
     * @return void
     */
    public function forceDeleted(ProjectManagementCategory $ProjectManagementCategory)
    {
        //
    }
}
