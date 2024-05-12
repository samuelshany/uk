<?php

namespace App\Domains\CashManagment\Observers;

use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\CashManagment\Models\CashManagment;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\PaymentType\Models\PaymentType;
use DB;

class CashManagementObserver
{

    /**
     * Handle the CashManagment "created" event.
     *
     * @param \App\Domains\CashManagment\Models\CashManagment $cashManagment
     *
     * @return void
     */
    public function created(CashManagment $cashManagment)
    {
        try {
            DB::beginTransaction();
            $paymentType = PaymentType::findOrFail($cashManagment->payment_type_id);
            //$account = $paymentType->accounts()->where('accounts.id', $cashManagment->payment_account_id)->first();
            $account = $cashManagment->account;

            $title = $description = 'reciept cash';
            if (request()->type == 'creditor') {
                $title = $description = 'payment cash';
            }

            $data = [
                'title' => $title,
                'date' => $cashManagment->date,
                'description' => $description,
                'details' => [],
            ];

            $latestEntry = JournalEntry::latest()->first();
            $data['entry_no'] = $latestEntry ? $latestEntry->entry_no + 1 : 1;
            $entry = journalEntry::create($data + [
                'creator_id' => auth()->user()->id,
            ]);

            if (request()->type == 'debtor') {
                $details = [
                    [
                        'account_id' => $cashManagment->cashable_id,
                        'debit' => 0,
                        'credit' => $cashManagment->amount,
                        'journal_entry_id' => $entry->id,
                        'description' => $description,
                        'created_at' => now(),
                    ],
                    [
                        'account_id' => $account->id,
                        'debit' => $cashManagment->amount,
                        'credit' => 0,
                        'journal_entry_id' => $entry->id,
                        'description' => $description,
                        'created_at' => now(),
                    ],
                ];
            } else if (request()->type == 'creditor') {
                $details = [
                    [
                        'account_id' => $cashManagment->cashable_id,
                        'debit' => $cashManagment->amount,
                        'credit' => 0,
                        'journal_entry_id' => $entry->id,
                        'description' => $description,
                        'created_at' => now(),
                    ],
                    [
                        'account_id' => $account->id,
                        'debit' => 0,
                        'credit' => $cashManagment->amount,
                        'journal_entry_id' => $entry->id,
                        'description' => $description,
                        'created_at' => now(),
                    ],
                ];
            }

            if ($entry) {
                JournalEntryDetail::insert($details);

               /*  if (request()->type == 'debtor') {
                    updateAccountBalance($cashManagment->cashable_id, $account->id, $cashManagment->amount);
                } else if (request()->type == 'creditor') {
                    updateAccountBalance($account->id, $cashManagment->cashable_id, $cashManagment->amount);
                } */

                app(AccountMySqlRepository::class)->updateFromJournalEntry($account);
                app(AccountMySqlRepository::class)->updateFromJournalEntry($cashManagment->cashable);

            }
            DB::commit();
            return true;
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }

    }

    public function updating(CashManagment $cashManagment)
    {
        //
    }

    public function updated(CashManagment $cashManagment)
    {
    }

    public function deleting(CashManagment $cashManagment)
    {
        //
    }

    /**
     * Handle the CashManagment "deleted" event.
     *
     * @param \App\Domains\CashManagment\Models\CashManagment $cashManagment
     *
     * @return void
     */
    public function deleted(CashManagment $cashManagment)
    {
        //
    }

    /**
     * Handle the CashManagment "restored" event.
     *
     * @param \App\Domains\CashManagment\Models\CashManagment $cashManagment
     *
     * @return void
     */
    public function restored(CashManagment $cashManagment)
    {
        //
    }

    /**
     * Handle the CashManagment "force deleted" event.
     *
     * @param \App\Domains\CashManagment\Models\CashManagment $cashManagment
     *
     * @return void
     */
    public function forceDeleted(CashManagment $cashManagment)
    {
        //
    }
}
