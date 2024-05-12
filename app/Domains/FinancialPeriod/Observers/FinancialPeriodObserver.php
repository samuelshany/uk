<?php

namespace App\Domains\FinancialPeriod\Observers;

use App\Domains\FinancialPeriod\Models\FinancialPeriod;
use App\Domains\RevisionHistory\Services\RevisionHistoryService;

class FinancialPeriodObserver
{

    
    public function created(FinancialPeriod $FinancialPeriod)
    {
        //
    }



    public function updated(FinancialPeriod $FinancialPeriod)
    {
        if($FinancialPeriod->status == 'closed'){
            if($FinancialPeriod->journalEntries&&count($FinancialPeriod->journalEntries)>0){
                $FinancialPeriod->journalEntries()->update([
                    'editable' => false,
                ]);
            }
        }else if($FinancialPeriod->status == 'open'){
            if($FinancialPeriod->journalEntries&&count($FinancialPeriod->journalEntries)>0){
                $FinancialPeriod->journalEntries()->update([
                    'editable' => true,
                ]);
            }

        }
    }



    /**
     * Handle the FinancialPeriod "deleted" event.
     *
     * @param \App\Domains\FinancialPeriod\Models\FinancialPeriod $FinancialPeriod
     *
     * @return void
     */
    public function deleted(FinancialPeriod $FinancialPeriod)
    {
        //
    }

    /**
     * Handle the FinancialPeriod "restored" event.
     *
     * @param \App\Domains\FinancialPeriod\Models\FinancialPeriod $FinancialPeriod
     *
     * @return void
     */
    public function restored(FinancialPeriod $FinancialPeriod)
    {
        //
    }

    /**
     * Handle the FinancialPeriod "force deleted" event.
     *
     * @param \App\Domains\FinancialPeriod\Models\FinancialPeriod $FinancialPeriod
     *
     * @return void
     */
    public function forceDeleted(FinancialPeriod $FinancialPeriod)
    {
        //
    }
}
