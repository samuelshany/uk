<?php

namespace App\Domains\Project\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Project\Models\Project;
use App\Domains\ProjectsPayment\Repositories\ProjectsPaymentMySqlRepository;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\Project\Models\ProjectMySqlRepository;
use App\Domains\Project\Repositories\ProjectMySqlRepository as RepositoriesProjectMySqlRepository;
use DB;

class ProjectObserver
{

    /**
     * Handle the Project "created" event.
     *
     * @param \App\Domains\Project\Models\Project $project
     *
     * @return void
     */
    public function created(Project $project)
    {
       
    }

    public function updating(Project $project)
    {
    }

    public function updated(Project $project)
    {
       
    }

    public function deleting(Project $project)
    {
        //
    }

    /**
     * Handle the Project "deleted" event.
     *
     * @param \App\Domains\Project\Models\Project $project
     *
     * @return void
     */
    public function deleted(Project $project)
    {
        //
    }

    /**
     * Handle the Project "restored" event.
     *
     * @param \App\Domains\Project\Models\Project $project
     *
     * @return void
     */
    public function restored(Project $project)
    {
        //
    }

    /**
     * Handle the Project "force deleted" event.
     *
     * @param \App\Domains\Project\Models\Project $project
     *
     * @return void
     */
    public function forceDeleted(Project $project)
    {
        //
    }
}
