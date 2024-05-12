<?php

namespace App\Domains\SafeMovement\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\SafeMovement\Models\SafeMovement;
use DB;

class SafeMovementObserver
{

    /**
     * Handle the CashManagment "created" event.
     *
     * @param \App\Domains\SafeMovement\Models\SafeMovement $safeMovement
     *
     * @return void
     */
    public function created(SafeMovement $safeMovement)
    {
        try {
            DB::beginTransaction();
            $data = [
                'title' => 'safe monvement',
                'date' => $safeMovement->date,
                'description' => $safeMovement->description,
                'details' => [],
            ];

            $latestEntry = JournalEntry::latest()->first();
            $data['entry_no'] = $latestEntry ? $latestEntry->entry_no + 1 : 1;
            $entry = journalEntry::create($data + [
                'creator_id' => auth()->user()->id,
            ]);

            $details = [
                [
                    'account_id' => $safeMovement->source_id,
                    'debit' => 0,
                    'credit' => $safeMovement->amount,
                    'journal_entry_id' => $entry->id,
                    'description' => $safeMovement->description,
                    'created_at' => now(),
                ],
                [
                    'account_id' => $safeMovement->destination_id,
                    'debit' => $safeMovement->amount,
                    'credit' => 0,
                    'journal_entry_id' => $entry->id,
                    'description' => $safeMovement->description,
                    'created_at' => now(),
                ],
            ];

            if ($entry) {
                JournalEntryDetail::insert($details);

                updateAccountBalance($safeMovement->source_id, $safeMovement->destination_id, $safeMovement->amount);
            }
            DB::commit();
            return true;
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }

    }

    public function updating(SafeMovement $safeMovement)
    {
        //
    }

    public function updated(SafeMovement $safeMovement)
    {
    }

    public function deleting(SafeMovement $safeMovement)
    {
        //
    }

    /**
     * Handle the CashManagment "deleted" event.
     *
     * @param \App\Domains\CashManagment\Models\SafeMovement $safeMovement
     *
     * @return void
     */
    public function deleted(SafeMovement $safeMovement)
    {
        //
    }

    /**
     * Handle the CashManagment "restored" event.
     *
     * @param \App\Domains\CashManagment\Models\SafeMovement $safeMovement
     *
     * @return void
     */
    public function restored(SafeMovement $safeMovement)
    {
        //
    }

    /**
     * Handle the CashManagment "force deleted" event.
     *
     * @param \App\Domains\CashManagment\Models\SafeMovement $safeMovement
     *
     * @return void
     */
    public function forceDeleted(SafeMovement $safeMovement)
    {
        //
    }
}
