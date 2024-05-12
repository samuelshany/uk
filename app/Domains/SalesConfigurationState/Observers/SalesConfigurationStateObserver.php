<?php

namespace App\Domains\SalesConfigurationState\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\SalesConfigurationState\Models\SalesConfigurationState;
use App\Domains\SalesConfigurationStatesPayment\Repositories\SalesConfigurationStatesPaymentMySqlRepository;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\SalesConfigurationState\Models\SalesConfigurationStateMySqlRepository;
use App\Domains\SalesConfigurationState\Repositories\SalesConfigurationStateMySqlRepository as RepositoriesSalesConfigurationStateMySqlRepository;
use DB;

class SalesConfigurationStateObserver
{

    /**
     * Handle the SalesConfigurationState "created" event.
     *
     * @param \App\Domains\SalesConfigurationState\Models\SalesConfigurationState $SalesConfigurationState
     *
     * @return void
     */
    public function created(SalesConfigurationState $SalesConfigurationState)
    {
        //
    }

    public function updating(SalesConfigurationState $SalesConfigurationState)
    {
    }

    public function updated(SalesConfigurationState $SalesConfigurationState)
    {
        if ($SalesConfigurationState->paymentType && $SalesConfigurationState->accountPayment) {
            app(SalesConfigurationStatesPaymentMySqlRepository::class)->store($SalesConfigurationState, request()->details);
        }
    }

    public function deleting(SalesConfigurationState $SalesConfigurationState)
    {
        //
    }

    /**
     * Handle the SalesConfigurationState "deleted" event.
     *
     * @param \App\Domains\SalesConfigurationState\Models\SalesConfigurationState $SalesConfigurationState
     *
     * @return void
     */
    public function deleted(SalesConfigurationState $SalesConfigurationState)
    {
        //
    }

    /**
     * Handle the SalesConfigurationState "restored" event.
     *
     * @param \App\Domains\SalesConfigurationState\Models\SalesConfigurationState $SalesConfigurationState
     *
     * @return void
     */
    public function restored(SalesConfigurationState $SalesConfigurationState)
    {
        //
    }

    /**
     * Handle the SalesConfigurationState "force deleted" event.
     *
     * @param \App\Domains\SalesConfigurationState\Models\SalesConfigurationState $SalesConfigurationState
     *
     * @return void
     */
    public function forceDeleted(SalesConfigurationState $SalesConfigurationState)
    {
        //
    }
}
