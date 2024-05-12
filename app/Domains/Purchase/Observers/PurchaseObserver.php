<?php

namespace App\Domains\Purchase\Observers;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Purchase\Models\Purchase;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use Carbon\Carbon;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use DB;

class PurchaseObserver
{

    /**
     * Handle the Purchase "created" event.
     *
     * @param \App\Domains\Purchase\Models\Purchase $purchase
     *
     * @return void
     */
    public function created(Purchase $purchase)
    {
        $requestData = request()->all(); // Replace $request with the actual request instance

        $date = Carbon::parse($requestData['date'])->format('d-m-Y');


        try {
            DB::beginTransaction();
            //for cash only
            $paymentType = PaymentType::findOrFail(request()->payment_type_id);
            $paymentTypeAccount = $paymentType->accounts()->where('accounts.id', request()->payment_account_id)->first();

            if (request()->customer_id) {
                $titleOne = $descriptionOne = 'sales invoice from stock to customer for invoice id #' . $purchase->id;
                $titleTwo = $descriptionTwo = 'sales invoice from customer to cash for invoice id #' . $purchase->id;
                $entryOneData = [
                    'title' => $titleOne,
                    'date' => $date,
                    'description' => $descriptionOne,
                    'details' => [],
                ];
                $entryTwoData = [
                    'title' => $titleTwo,
                    'date' => $date,
                    'description' => $descriptionTwo,
                    'details' => [],
                ];
                $latestEntry = journalEntry::latest()->first();
                $entryOneData['entry_no'] = $latestEntry ? $latestEntry->entry_no + 1 : 1;
                $entryTwoData['entry_no'] = $entryOneData ? $entryOneData['entry_no'] + 2 : 1;
                $entryOne = journalEntry::create($entryOneData + [
                    'creator_id' => auth()->user()->id,
                ]);
                $entryTwo = journalEntry::create($entryTwoData + [
                    'creator_id' => auth()->user()->id,
                ]);
                $entryOneDetails = [
                    [
                        'account_id' => Customer::find(request()->customer_id)->account->id,
                        'debit' => 0,
                        'credit' => $purchase->total,
                        'journal_entry_id' => $entryOne->id,
                        'description' => $descriptionOne,
                        'created_at' => now(),
                    ],
                    [
                        'account_id' => Stock::find(request()->stock_id)->warehouse->account->id,
                        'debit' => $purchase->total,
                        'credit' => 0,
                        'journal_entry_id' => $entryOne->id,
                        'description' => $descriptionOne,
                        'created_at' => now(),
                    ],
                ];

                $entryTwoDetails = [
                    [
                        'account_id' => Customer::find(request()->customer_id)->account->id,
                        'debit' => $purchase->total,
                        'credit' => 0,
                        'journal_entry_id' => $entryTwo->id,
                        'description' => $descriptionTwo,
                        'created_at' => now(),
                    ],
                    [
                        'account_id' => $paymentTypeAccount->id,
                        'debit' => 0,
                        'credit' => $purchase->total,
                        'journal_entry_id' => $entryTwo->id,
                        'description' => $descriptionTwo,
                        'created_at' => now(),
                    ],
                ];
                journalEntryDetail::insert($entryOneDetails);
                journalEntryDetail::insert($entryTwoDetails);
                updateCustomerTotalInvoicesAmount(request()->customer_id, $purchase->total);
                // updateAccountBalance($from, $to, $amount);
                DB::commit();
                return true;
            }

            if (request()->supplier_id) {
                $titleOne = $descriptionOne = 'purchase invoice from supplier to stock for invoice id #' . $purchase->id;
                $titleTwo = $descriptionTwo = 'purchase invoice from cash to supplier for invoice id #' . $purchase->id;
                $entryOneData = [
                    'title' => $titleOne,
                    'date' => $date,
                    'description' => $descriptionOne,
                    'details' => [],
                ];
                $entryTwoData = [
                    'title' => $titleTwo,
                    'date' => $date,
                    'description' => $descriptionTwo,
                    'details' => [],
                ];
                $latestEntry = journalEntry::latest('id')->first();
                $entryOneData['entry_no'] = $latestEntry ? $latestEntry->entry_no + 1 : 1;
                $entryTwoData['entry_no'] = $latestEntry ? $latestEntry->entry_no + 2 : 1;
                $entryOne = journalEntry::create($entryOneData + [
                    'creator_id' => auth()->user()->id,
                ]);
                $entryTwo = journalEntry::create($entryTwoData + [
                    'creator_id' => auth()->user()->id,
                ]);
                $entryOneDetails = [
                    [
                        'account_id' => Supplier::find(request()->supplier_id)->account->id,
                        'debit' => $purchase->total,
                        'credit' => 0,
                        'journal_entry_id' => $entryOne->id,
                        'description' => $descriptionOne,
                        'created_at' => now(),
                    ],
                    [
                        'account_id' => Stock::find(request()->stock_id)->warehouse->account->id,
                        'debit' => 0,
                        'credit' => $purchase->total,
                        'journal_entry_id' => $entryOne->id,
                        'description' => $descriptionOne,
                        'created_at' => now(),
                    ],
                ];
                $entryTwoDetails = [
                    [
                        'account_id' => Supplier::find(request()->supplier_id)->account->id,
                        'debit' => 0,
                        'credit' => $purchase->total,
                        'journal_entry_id' => $entryTwo->id,
                        'description' => $descriptionTwo,
                        'created_at' => now(),
                    ],
                    [
                        'account_id' => $paymentTypeAccount->id,
                        'debit' => $purchase->total,
                        'credit' => 0,
                        'journal_entry_id' => $entryTwo->id,
                        'description' => $descriptionTwo,
                        'created_at' => now(),
                    ],
                ];
                journalEntryDetail::insert($entryOneDetails);
                journalEntryDetail::insert($entryTwoDetails);
                updateSupplierTotalInvoicesAmount(request()->supplier_id, $purchase->total);
                // updateAccountBalance($from, $to, $amount);
                DB::commit();
                return true;
            }
            //end of cash
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

    }

    public function updating(Purchase $purchase)
    {
        //
    }

    public function updated(Purchase $purchase)
    {
    }

    public function deleting(Purchase $purchase)
    {
        //
    }

    /**
     * Handle the Purchase "deleted" event.
     *
     * @param \App\Domains\Purchase\Models\Purchase $purchase
     *
     * @return void
     */
    public function deleted(Purchase $purchase)
    {
        //
    }

    /**
     * Handle the Purchase "restored" event.
     *
     * @param \App\Domains\Purchase\Models\Purchase $purchase
     *
     * @return void
     */
    public function restored(Purchase $purchase)
    {
        //
    }

    /**
     * Handle the Purchase "force deleted" event.
     *
     * @param \App\Domains\Purchase\Models\Purchase $purchase
     *
     * @return void
     */
    public function forceDeleted(Purchase $purchase)
    {
        //
    }
}
