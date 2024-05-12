<?php

namespace App\Domains\Account\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\RevisionHistory\Services\RevisionHistoryService;

class AccountObserver
{

    /**
     * Handle the Account "created" event.
     *
     * @param \App\Domains\Account\Models\Account $account
     *
     * @return void
     */
    public function created(Account $account)
    {
        //
    }

    public function updating(Account $account)
    {
        $changes = [];
        foreach ($account->getDirty() as $key => $value) {
            $original = $account->getOriginal($key);
            $changes['old'][$key] = $original;
            $changes['new'][$key] = $value;
        }

        if (request()->routeIs('account.update')) {
            app(RevisionHistoryService::class)->create(
                request(),
                'App\Domains\Account\Models\Account',
                $changes
            );
        } else {
            // $data = [
            //     'id' => $account->id,
            //     'name' => $account->name,
            //     'opening_balance' => $account->opening_balance,
            //     'account_type' => $account->account_type,
            //     'parent_id' => $account->parent_id,
            // ];
            // // dd(collect($data), $changes);
            // app(RevisionHistoryService::class)->create(
            //     collect($data),
            //     'App\Domains\Account\Models\Account',
            //     $changes
            // );
        }
    }

    public function updated(Account $account)
    {
        /* $total_credit = $account->credit_journal_entries+$account->opening_balance_credit;
        $total_debit = $account->debit_journal_entries+$account->opening_balance_debit;
        $balance = [
            'total_credit' => $total_credit,
            'total_debit' =>$total_debit,
            'total_credit_balance' => $total_credit>$total_debit?$total_credit-$total_debit:0,
            'total_debit_balance' => $total_debit>$total_credit?$total_debit-$total_credit:0,
        ];

        $account->update($balance); */
    }

    public function deleting(Account $account)
    {
        app(RevisionHistoryService::class)->create(
            request(),
            'App\Domains\Account\Models\Account',
            'Row ' . $account->id . ' Deleted'
        );
    }

    /**
     * Handle the Account "deleted" event.
     *
     * @param \App\Domains\Account\Models\Account $account
     *
     * @return void
     */
    public function deleted(Account $account)
    {
        //
    }

    /**
     * Handle the Account "restored" event.
     *
     * @param \App\Domains\Account\Models\Account $account
     *
     * @return void
     */
    public function restored(Account $account)
    {
        //
    }

    /**
     * Handle the Account "force deleted" event.
     *
     * @param \App\Domains\Account\Models\Account $account
     *
     * @return void
     */
    public function forceDeleted(Account $account)
    {
        //
    }
}
