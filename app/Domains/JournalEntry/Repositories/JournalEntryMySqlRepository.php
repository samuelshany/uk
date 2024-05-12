<?php

namespace App\Domains\JournalEntry\Repositories;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\Customer\Request\UpdateAttachmentsJorrnalEntryDetailsRequest;
use App\Domains\FinancialPeriod\Models\FinancialPeriod;
use App\Domains\GroupType\Models\GroupType;
use App\Domains\JournalEntry\Exports\JournalEntriesExport;
use App\Domains\JournalEntry\Exports\JournalEntryDetailsExport;
use App\Domains\JournalEntry\Imports\JournalEntriesImport;
use App\Domains\JournalEntry\Imports\JournalEntryDetailsImport;
use App\Domains\JournalEntry\Interfaces\JournalEntryRepositoryInterface;
use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use niklasravnsborg\LaravelPdf\Facades\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Collection as SupportCollection;
use Illuminate\Support\Facades\URL;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class JournalEntryMySqlRepository implements JournalEntryRepositoryInterface
{

    public function __construct(private JournalEntry $journalEntry, private JournalEntryDetail $journalEntryDetail)
    {
    }

    public function findById(string $id): JournalEntry
    {
        $entry = $this->journalEntry::findOrFail($id);
        $entry->load([
            'details' => function ($q) {
                $q->with(['account']);
            },
            'creator'
        ]);

        return $entry;
    }

    public function list()
    {

        $limit =request('limit', config('app.pagination_count'));

        $query = $this->journalEntry::when(request()->title, function ($q) {
            $q->where('title', 'like', '%' . request()->title . '%');
        })->when(request()->entry_no, function ($q) {
            $q->where('entry_no', request()->entry_no);
        })->when(request()->date, function ($q) {
            $q->whereDate('date', '>=', request()->date);
        })->when(request()->description, function ($q) {
            $q->where('description', 'LIKE', '%' . request()->description . '%');
        })
            ->when(request()->total_credit, function ($q) {
                $q->joinSub(function ($query) {
                    $query->from('journal_entry_details')
                        ->selectRaw('journal_entry_id, SUM(credit) as total_credit')
                        ->groupBy('journal_entry_id');
                }, 'sub', 'journal_entries.id', '=', 'sub.journal_entry_id')
                    ->where('sub.total_credit', '=', request()->total_credit);
            })
            ->when(request()->creator_id, function ($q) {
                $q->where('creator_id', request()->creator_id);
            })->when(request()->from, function ($q) {
                $q->whereDate('created_at', '>=', request()->from);
            })->when(request()->to, function ($q) {
                $q->whereDate('created_at', '<=', request()->to);
            })->when(request()->sort_by || request()->sort_type, function ($q) {
                if (in_array(request()->sort_by, ['id', 'title', 'entry_no', 'date', 'description', 'created_at', 'updated_at', 'creator_id'])) {
                    $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
                }
            })->orderBy('updated_at', 'desc')->with(['details', 'creator']);

            if ($limit === 'all') {
                return $query->get();
            } else {
                return $query->paginate($limit);
            }
    }

    public function store($request): bool
    {
        try {
            DB::beginTransaction();
            $data = $request->only('title', 'description', 'entry_no', 'date', 'details');
            $latestEntry = $this->journalEntry::latest()->first();
            $data['entry_no'] = $latestEntry ? $latestEntry->entry_no + 1 : 1;
            $entry = $this->journalEntry::create($data + [
                'creator_id' => auth()->user()->id,
            ]);

            $financialPeriod = FinancialPeriod::where('start','<=',$entry->date)->where('end','>=',$entry->date)->where('status','open')->first();
           $financialPeriod->journalEntries()->attach($entry->id);

           //$financialPeriod->journalEntry()->sync($entry->id);
            // Add a single media (image) from Request
            // if ($request->has('invoice_image')) {
            //     $entry->addMediaFromRequest('invoice_image')->toMediaCollection('journalEntryImages');
            // }

            // Add a multi media (image) from Request
            if ($images = $request->file('invoice_image')) {
                foreach ($images as $file) {
                    $entry->addMedia($file)->toMediaCollection('journalEntryImages','upload_je');
                }
            }

            foreach ($data['details'] as $detail) {
                $obDetail = $this->journalEntryDetail::create([
                    'account_id' => $detail['account_id'],
                    'debit' => $detail['debit'],
                    'credit' => $detail['credit'],
                    'currency_id' => $detail['currency_id']??null,
                    'currency_rate' => $detail['currency_rate']??null,
                    'description' => $detail['description'] ?? '',
                    'saved' => $detail['saved'],
                    'journal_entry_id' => $entry->id,
                    'created_at' => now(),
                ]);

                if (isset($detail['files'])) {
                    foreach ($detail['files'] as $file) {
                        $obDetail->addMedia($file)->toMediaCollection('journal_entry_details_attachments','upload_je');
                    }
                }
                app(AccountMySqlRepository::class)->updateFromJournalEntry($obDetail->account);
            }

/*             $details = collect($data['details'])->map(fn ($detail) => [
                'account_id' => $detail['account_id'],
                'debit' => $detail['debit'],
                'credit' => $detail['credit'],
                'journal_entry_id' => $entry->id,
                'description' => $detail['description'] ?? '',
                'created_at' => now(),
            ])->toArray();
            $this->journalEntryDetail::insert($details); */

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        }
    }

    public function updateFiles($request): bool
    {
        // return true;
        // if ($request->hasFile('invoice_image')) {
        //     $journalEntry->clearMediaCollection('journalEntryImages'); // Clear existing media
        //     $journalEntry->addMediaFromRequest('invoice_image')->toMediaCollection('journalEntryImages');
        // }
        $journalEntry = $this->journalEntry::findOrFail($request->id);

        // Add a multi media (image) from Request
        if ($images = $request->file('invoice_image')) {
            foreach ($images as $file) {
                $journalEntry->addMedia($file)->toMediaCollection('journalEntryImages','upload_je');
            }
        }
        // return true;
        if ($request->mediaId) {
            foreach ($request->mediaId as $id) {
                $mediaItem = Media::findOrFail($id);

                // Move the current media item to the 'Purchase&Sales' collection
                $mediaItem->move($mediaItem->model, 'journalEntryArchive');

                // Optionally, if you want to delete the original media item after moving
                // $mediaItem->delete();
            }
        }
        return true;
    }

    public function update(string $id, $request): bool
    {
        // return false;
        try {
            DB::beginTransaction();
            $journalEntry = $this->journalEntry::findOrFail($id);

            // if ($images = $request->file('invoice_image')) {
            //     foreach ($images as $file) {
            //         $journalEntry->addMedia($file)->toMediaCollection('journalEntryImages');
            //     }
            // }


            $data = $request->only('title', 'description', 'date', 'details');
            $journalEntry->update([
                'title' => $data['title'],
                'description' => $data['description'],
                'date' => $data['date'],
            ]);
            $journalEntry->financiables()->detach();
            $financialPeriod = FinancialPeriod::where('start','<=',$journalEntry->date)->where('end','>=',$journalEntry->date)->where('status','open')->first();
            $financialPeriod->journalEntries()->attach($journalEntry->id);

            //$journalEntry->details()->delete();
            foreach ($data['details'] as $detail) {
                $obDetail = null;
                if(isset($detail['id'])&&$detail['id']!=null){
                    $obDetail = $this->journalEntryDetail::find($detail['id']);
                }else{

                    $obDetail = $this->journalEntryDetail::create([
                        'account_id' => $detail['account_id'],
                        'debit' => $detail['debit'],
                        'credit' => $detail['credit'],
                        'currency_id' => $detail['currency_id']??null,
                        'currency_rate' => $detail['currency_rate']??null,
                        'description' => $detail['description'] ?? '',
                        'saved' => $detail['saved'],
                        'journal_entry_id' => $id,
                    ]);
                }
                if (isset($detail['files'])) {
                    foreach ($detail['files'] as $file) {
                        $obDetail->addMedia($file)->toMediaCollection('journal_entry_details_attachments','upload_je');
                    }
                }




                // Add new media
                app(AccountMySqlRepository::class)->updateFromJournalEntry($obDetail->account);
            }
            /* $journalEntry->details()->createMany($request->details); */
       /*      collect($request->details)->map(function ($q) use ($id) {
                $detail = $this->journalEntryDetail::updateOrCreate([
                    'account_id' => $q['account_id'],
                ], [
                    'debit' => $q['debit'],
                    'credit' => $q['credit'],
                    'description' => $q['description'] ?? '',
                    'journal_entry_id' => $id,
                ]);
                $detail = $this->journalEntryDetail::updateOrCreate(
                    [
                        'id' => $q['id'],
                    ],[
                    'account_id' => $q['account_id'],
                    'debit' => $q['debit'],
                    'credit' => $q['credit'],
                    'description' => $q['description'] ?? '',
                    'journal_entry_id' => $id,
                ]);
                if ($q['files']) {

                    if($detail->getMedia('journal_entry_details_attachments')){
                        $detail->clearMediaCollection('journal_entry_details_attachments');
                    }
                    $detail->addMultipleMediaFromRequest(['files']) ->each(function ($file) {

                        $file->storingConversionsOnDisk('upload_je')->toMediaCollection('journal_entry_details_attachments','upload_je');
                    });
                }
            })->toArray(); */
            /* foreach($journalEntry->details as $detail){
                app(AccountMySqlRepository::class)->updateFromJournalEntry($detail->account);
            } */
            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollBack();
            return false;
        }
    }



    public function detailsUpdate(string $id,$request): bool
    {
        $detail = $this->journalEntryDetail::find($id);
        if ($request->has('files')) {
            if($detail->getMedia('journal_entry_details_attachments')){
                $detail->clearMediaCollection('journal_entry_details_attachments');
            }
            $detail->addMultipleMediaFromRequest(['files']) ->each(function ($file) {

                $file->storingConversionsOnDisk('upload_je')->toMediaCollection('journal_entry_details_attachments','upload_je');
            });
        }

        return true;
    }
    public function delete(string $id): bool
    {
        $this->journalEntry::findOrFail($id)?->delete();
        $this->journalEntryDetail::where('journal_entry_id', $id)->delete();

        return true;
    }


    public function importJournalEntryDetailsFromFile(string $id, $request): bool
    {
        Excel::import(new JournalEntryDetailsImport($id), $request->file('file'));

        return true;
    }

    public function exportJournalEntryDetailsToFile(string $id)
    {
        $entry = $this->journalEntry::findOrFail($id);
        $fileName = 'journal_entry_details_' . $entry->entry_no . '_' . Carbon::now()->format('YmdHis') . '.xlsx';

        (new JournalEntryDetailsExport($id))->queue($fileName)->chain([
            logger('Exported Journal Entry Details'),
        ]);

        return true;
    }

    public function exportJournalEntries()
    {
        $fileName = 'journal_entries_' . Carbon::now()->format('YmdHis') . '.xlsx';
        (new JournalEntriesExport())->queue($fileName)->chain([
            logger('Exported Journal Entries'),
        ]);

        return true;
    }

    public function importJournalEntries()
    {
        (new JournalEntriesImport)->queue(request()->file('file'));

        return true;
    }

  /*   public function balanceSheet()
    {
        $assets = GroupType::where(
            'id',
            1
        )
        ->with('groups.accounts.journalEntryDetail.journalEntry')->whereHas(
            'groups.accounts.journalEntryDetail.journalEntry',
            function ($q) {
                $q->when(request()->from, function ($q) {
                    $q->whereDate('date', '>=', request()->from);
                })->when(request()->to, function ($q) {
                    $q->whereDate('date', '<=', request()->to);
                });
            }
        )->first();
        $liabilities = GroupType::where(
            'id',
            2
        )->with('groups.accounts.journalEntryDetail.journalEntry')->whereHas(
            'groups.accounts.journalEntryDetail.journalEntry',
            function ($q) {
                $q->when(request()->from, function ($q) {
                    $q->whereDate('date', '>=', request()->from);
                })->when(request()->to, function ($q) {
                    $q->whereDate('date', '<=', request()->to);
                });
            }
        )->first();

        $equity = GroupType::where(
            'id',
            3
        )->with('groups.accounts.journalEntryDetail.journalEntry')->whereHas(
            'groups.accounts.journalEntryDetail.journalEntry',
            function ($q) {
                $q->when(request()->from, function ($q) {
                    $q->whereDate('date', '>=', request()->from);
                })->when(request()->to, function ($q) {
                    $q->whereDate('date', '<=', request()->to);
                });
            }
        )->first();

        return collect(['assets' => $assets, 'liabilities' => $liabilities, 'equity' => $equity]);
    }
 */
    public function balanceSheet()
    {
        $financialPeriods = FinancialPeriod::with(['journalEntries.details.account.group.group_type'])
            ->whereHas('journalEntries.details.account.group.group_type', function ($q) {
                $q->whereIn('id', [1, 2, 3]); // Assuming 1 = assets, 2 = liabilities, 3 = equity
            })
            ->whereHas('journalEntries', function ($q) {
                $q->when(request()->from, function ($q) {
                    $q->whereDate('date', '>=', request()->from);
                })->when(request()->to, function ($q) {
                    $q->whereDate('date', '<=', request()->to);
                });
            })
            ->orderBy('id')
            ->get();

        $data = [];
        $counter = 0;
        foreach ($financialPeriods as $period) {
            $counter++;

            $assets = GroupType::where('id', 1)
                ->with(['groups.accounts.journalEntryDetail.journalEntry' => function ($q) use ($period) {
                    $q->whereIn('id', $period->journalEntries->pluck('id'));
                }])
                ->first();

            $liabilities = GroupType::where('id', 2)
                ->with(['groups.accounts.journalEntryDetail.journalEntry' => function ($q) use ($period) {
                    $q->whereIn('id', $period->journalEntries->pluck('id'));
                }])
                ->first();

            $equity = GroupType::where('id', 3)
                ->with(['groups.accounts.journalEntryDetail.journalEntry' => function ($q) use ($period) {
                    $q->whereIn('id', $period->journalEntries->pluck('id'));
                }])
                ->first();

            $data[] = [
                'financial_period' => $period->title,
                'year_number' => $counter,
                'assets' => $assets,
                'liabilities' => $liabilities,
                'equity' => $equity,
            ];
        }
        return $data;
    }


    public function profitLoss()
    {
        $groups = GroupType::whereIn('code', [
            4,
            5,
        ])->with('groups.accounts.journalEntryDetail.journalEntry')->whereHas(
            'groups.accounts.journalEntryDetail.journalEntry',
            function ($q) {
                $q->when(request()->from, function ($q) {
                    $q->whereDate('date', '>=', request()->from);
                })->when(request()->to, function ($q) {
                    $q->whereDate('date', '<=', request()->to);
                });
            }
        )->get();

        return $groups;
    }

  /*   public function trialBalanceSheet2()
    {
        $groups = Account::with('journalEntryDetail.journalEntry')->whereHas(
            'journalEntryDetail.journalEntry',
            function ($q) {
                $q->when(request()->from, function ($q) {
                    $q->whereDate('date', '>=', request()->from);
                })->when(request()->to, function ($q) {
                    $q->whereDate('date', '<=', request()->to);
                });
            }
        )->get();

          $financialPeriods = FinancialPeriod::with(['journalEntries.details.account.group'])
            ->whereHas('journalEntries', function ($q) {
                $q->when(request()->from, function ($q) {
                    $q->whereDate('date', '>=', request()->from);
                })->when(request()->to, function ($q) {
                    $q->whereDate('date', '<=', request()->to);
                });
            })
            ->orderBy('id')
            ->get();

        $data = [];
        $counter = 0;
        foreach ($financialPeriods as $period) {
            $counter++;

            $groups = Account::with(['journalEntryDetail.journalEntry' => function ($q) use ($period) {
                    $q->whereIn('id', $period->journalEntries->pluck('id'));
                }])
                ->get();

            $data[] = [
                'financial_period' => $period->title,
                'year_number' => $counter,
                'groups' => $groups,
            ];
        }
        dd($data);
        return $data;
    } */
    public function trialBalanceSheet()
    {
        $groups = Account::with('journalEntryDetail.journalEntry')->whereHas(
            'journalEntryDetail.journalEntry',
            function ($q) {
                $q->when(request()->from, function ($q) {
                    $q->whereDate('date', '>=', request()->from);
                })->when(request()->to, function ($q) {
                    $q->whereDate('date', '<=', request()->to);
                });
            }
        )->get();

        return $groups;
    }

    public function exportTrialBalanceSheetPDF()
    {


        //$data = new TrialBalanceSheetResource($this->trialBalanceSheet());
        $data = $this->getDataForTrialbalanceSheetPDF();

        // Render the view with data
        $title = "Trial Balance";
       // $filePath = 'pdf/downloads/trial-balance/trial_balance_sheet.pdf';
        $filePath = 'tenant'.tenant('id').'/pdf/downloads/trial-balance/trial_balance_sheet.pdf';
       /*  if(Storage::exists($filePath)){
            Storage::delete($filePath);
        } */

        if(Storage::exists('public/'.$filePath)){
            unlink('public/'.$filePath);
        }

        $pdf = PDF::loadView('pdf.trial-balance', compact('data', 'title'), [], [
            'format' => 'A4',
            'display_mode' => 'fullpage',
            'font_path' => storage_path('fonts/'),
            'orientation' => 'landscape',
            'font_data' => [
                    'cairo' =>[
                        'R'=> 'Cairo-Regular.ttf',
                    ]
                ]
        ]);




        Storage::disk('export')->put($filePath, $pdf->output());


        // Serve the file for download
        return response()->json([
            'file_path' => asset($filePath),
            'status' => true,
        ], 200);

        // Serve the file for download
        //return response()->download(storage_path('app/public/' . $filePath));
    }


    public function getDataForTrialbalanceSheetPDF(){

        $trialBalance = $this->trialBalanceSheet()->sortBy('created_at');
        $from = "2024-01-01";
        $to = Carbon::now()->format('Y-m-d');
        if(request()->from){
            $from = request()->from;
        }
        if(request()->to){
            $to = request()->to;
        }
        $accounts = [];
        $total_opening_credit = 0;
        $total_opening_debit = 0;
        $total_credit_with_opening = 0;
        $total_debit_with_opening = 0;
        $debit_balance_all = 0;
        $credit_balance_all = 0;
        foreach ($trialBalance as $account){
            /*  return $account; */
            $credit_journal_entries = $account->journalEntryDetail->sum('credit');
            $debit_journal_entries = $account->journalEntryDetail->sum('debit');
            $debit_balance = 0;
            $credit_balance = 0;
            if($credit_journal_entries>$debit_journal_entries){
                $credit_balance = $credit_journal_entries - $debit_journal_entries;
            }else if($credit_journal_entries<$debit_journal_entries){
                $debit_balance = $debit_journal_entries - $credit_journal_entries;

            }

            $balance = [
                "code"=>$account->code,
                "name"=>$account->name,
                "opening_balance_credit"=>0,
                "opening_balance_debit"=>0,
                "credit_journal_entries"=>$credit_journal_entries,
                "debit_journal_entries"=>$debit_journal_entries,
                "total_credit"=>$credit_journal_entries,
                "total_debit"=>$debit_journal_entries,
                "total_credit_balance"=>$credit_balance,
                "total_debit_balance"=>$debit_balance,
            ];

            if($account->created_at>=$from){
                $total_opening_credit +=$account->opening_balance_credit;
                $total_opening_debit +=$account->opening_balance_debit;

                $total_credit = $account->opening_balance_credit+$credit_journal_entries;
                $total_debit = $account->opening_balance_debit+$debit_journal_entries;

                $total_credit_with_opening += $total_credit;
                $total_debit_with_opening += $total_debit;

                if($total_credit>$total_debit){
                    $credit_balance = $total_credit - $total_debit;
                }else if($total_credit<$total_debit){
                    $debit_balance = $total_debit - $total_credit;
                }

                $balance = [
                    "code"=>$account->code,
                    "name"=>$account->name,
                    "opening_balance_credit"=> $account->opening_balance_credit,
                    "opening_balance_debit"=>$account->opening_balance_debit,
                    "credit_journal_entries"=>$credit_journal_entries,
                    "debit_journal_entries"=>$debit_journal_entries,
                    "total_credit"=>$total_credit,
                    "total_debit"=>$total_debit,
                    "total_credit_balance"=>$credit_balance,
                    "total_debit_balance"=>$debit_balance,
                ];
            }

            array_push($accounts,$balance);
            $debit_balance_all += $debit_balance;
            $credit_balance_all += $credit_balance;
        }
        $total_credit_all = $trialBalance->pluck('journalEntryDetail')->flatten()->sum('credit');
        $total_debit_all = $trialBalance->pluck('journalEntryDetail')->flatten()->sum('debit');

        $total = [
            "opening_balance_credit"=>$total_opening_credit,
            "opening_balance_debit"=>$total_opening_debit,
            "credit_journal_entries"=>$total_credit_all,
            "debit_journal_entries"=>$total_debit_all,
            "total_credit"=>$total_credit_with_opening,
            "total_debit"=>$total_debit_with_opening,
            "total_credit_balance"=>$credit_balance_all,
            "total_debit_balance"=>$debit_balance_all,
        ];

        return ["accounts"=>$accounts,"total"=>$total,"from"=>$from,"to"=>$to];

    }

    public function exportBalanceSheetPDF()
    {


        $data = $this->getDataForbalanceSheetPDF();
        $title = __('journal-entry.title_balance_sheet');
        $file_name = __('journal-entry.balance_sheet');
        $filePath = 'tenant'.tenant('id')."/pdf/downloads/balance/".$file_name.'.pdf';

        if(Storage::exists('public/'.$filePath)){
            unlink('public/'.$filePath);
        }

        $pdf = PDF::loadView('pdf.balance-sheet', compact('data', 'title'), [], [
            'format' => 'A4',
            'display_mode' => 'fullpage',
            'font_path' => storage_path('fonts/'),
            'orientation' => 'landscape',
            'font_data' => [
                    'cairo' =>[
                        'R'=> 'Cairo-Regular.ttf',
                    ]
                ]
        ]);




        Storage::disk('export')->put($filePath, $pdf->output());

        // Serve the file for download
        return response()->json([
            'file_path' => asset($filePath),
            'status' => true,
        ], 200);

    }


    public function getDataForbalanceSheetPDF(){

        $balanceSheet = $this->balanceSheet();
        $data = [];
        $years = [];
        $from = "2024-01-01";
        $to = Carbon::now()->format('Y-m-d');
        if(request()->from){
            $from = request()->from;
        }
        if(request()->to){
            $to = request()->to;
        }

        $assetsGroupsWithYears = [];
        $liabilitiesGroupsWithYears = [];
        $equityGroupsWithYears = [];
        foreach($balanceSheet as $financialPeriod){
            $years[] = $financialPeriod['year_number'];
            $assets =[];
            $liabilities =[];
            $equity =[];
            $total_assets_year = 0;
            $total_liabilities_year = 0;
            $total_equity_year = 0;
            $opening_balance_debit_equity = 0;
            $opening_balance_credit_equity = 0;
            $opening_balance_debit_liabilities = 0;
            $opening_balance_credit_liabilities = 0;
            $equity_debit = 0;
            $equity_credit = 0;
            $liabilities_debit = 0;
            $liabilities_credit = 0;

            if($financialPeriod['assets']->groups){

                $total_opening_balance_debit = 0;
                $total_opening_balance_credit = 0;
                $groups = [];
                foreach($financialPeriod['assets']->groups as $group){
                    $opening_balance_debit = 0;
                    $opening_balance_credit = 0;

                    foreach ($group->accounts as $account){
                        if($from<$account->created_at){
                            $opening_balance_debit += $account->opening_balance_debit;
                            $opening_balance_credit += $account->opening_balance_credit;
                        }

                    }
                    $total =  number_format(($opening_balance_debit +
                                            $group->accounts->pluck('journalEntryDetail')->flatten()->sum('debit')) -
                                            ($group->accounts->pluck('journalEntryDetail')->flatten()->sum('credit') +
                                            $opening_balance_credit),2);
                    array_push($groups,[
                        "name" => $group->name,
                        "code" => $group->code,
                        "total" =>$total,
                    ]);
                    $total_opening_balance_debit += $opening_balance_debit;
                    $total_opening_balance_credit += $opening_balance_credit;
                    $codeExists = false;
                    foreach ($assetsGroupsWithYears as &$item) {
                        if ($item['code'] == $group->code) {
                            $codeExists = true;
                            $yearValueExists = false;
                            foreach ($item['year_value'] as &$yearValue) {
                                if ($yearValue['year_number'] == $financialPeriod['year_number']) {
                                    $yearValueExists = true;
                                    break;
                                }
                            }
                            if (!$yearValueExists) {
                                $item['year_value'][] = [
                                    "year_number" => $financialPeriod['year_number'],
                                    "value" => $total,
                                ];
                            }
                            break;
                        }
                    }
                    if (!$codeExists) {
                        $data = [
                            "name" => $group->name,
                            "code" => $group->code,
                            "year_value" => [
                                [
                                    "year_number" => $financialPeriod['year_number'],
                                    "value" => $total,
                                ],
                            ],
                        ];
                        array_push($assetsGroupsWithYears, $data);
                    }
                }
                $group_debit =  $financialPeriod['assets']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('debit');
                $group_credit =  $financialPeriod['assets']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('credit');
                $total = number_format(($total_opening_balance_debit +
                                        $group_debit) -
                                        ($group_credit +
                                        $total_opening_balance_credit),2) ;
                array_push($assets,[
                    "groups"=>$groups,
                    'total'  =>
                        $total,
                ]);
                $total_assets_year = $total;
            }
            if($financialPeriod['liabilities']->groups){
                $groups = [];
                foreach($financialPeriod['liabilities']->groups as $group){
                    $opening_balance_debit = 0;
                    $opening_balance_credit = 0;

                    foreach ($group->accounts as $account){
                        if($from<$account->created_at){
                            $opening_balance_debit += $account->opening_balance_debit;
                            $opening_balance_credit += $account->opening_balance_credit;
                        }

                    }
                    $total =  number_format(($opening_balance_debit +
                                            $group->accounts->pluck('journalEntryDetail')->flatten()->sum('debit')) -
                                            ($group->accounts->pluck('journalEntryDetail')->flatten()->sum('credit') +
                                            $opening_balance_credit),2);
                    array_push($groups,[
                        "name" => $group->name,
                        "code" => $group->code,
                        "total" =>$total
                    ]);
                    $opening_balance_debit_liabilities += $opening_balance_debit;
                    $opening_balance_credit_liabilities += $opening_balance_credit;
                    $codeExists = false;
                    foreach ($liabilitiesGroupsWithYears as &$item) {
                        if ($item['code'] == $group->code) {
                            $codeExists = true;
                            $yearValueExists = false;
                            foreach ($item['year_value'] as &$yearValue) {
                                if ($yearValue['year_number'] == $financialPeriod['year_number']) {
                                    $yearValueExists = true;
                                    break;
                                }
                            }
                            if (!$yearValueExists) {
                                $item['year_value'][] = [
                                    "year_number" => $financialPeriod['year_number'],
                                    "value" => $total,
                                ];
                            }
                            break;
                        }
                    }
                    if (!$codeExists) {
                        $data = [
                            "name" => $group->name,
                            "code" => $group->code,
                            "year_value" => [
                                [
                                    "year_number" => $financialPeriod['year_number'],
                                    "value" => $total,
                                ],
                            ],
                        ];
                        array_push($liabilitiesGroupsWithYears, $data);
                    }


                }
                $liabilities_debit =  $financialPeriod['liabilities']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('debit');
                $liabilities_credit =  $financialPeriod['liabilities']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('credit');
                $total = number_format(($opening_balance_debit_liabilities +
                        $liabilities_debit) -
                        ($liabilities_credit +
                        $opening_balance_credit_liabilities),2);
                array_push($liabilities,[
                    "groups"=>$groups,
                    'total' =>
                        $total ,
                ]);
                $total_liabilities_year = $total;
            }
            if($financialPeriod['equity']->groups){

                $groups = [];
                foreach($financialPeriod['equity']->groups as $group){
                    $opening_balance_debit = 0;
                    $opening_balance_credit = 0;

                    foreach ($group->accounts as $account){
                        if($from<$account->created_at){
                            $opening_balance_debit += $account->opening_balance_debit;
                            $opening_balance_credit += $account->opening_balance_credit;
                        }

                    }
                    $total =  number_format(($opening_balance_debit +
                                $group->accounts->pluck('journalEntryDetail')->flatten()->sum('debit')) -
                                ($group->accounts->pluck('journalEntryDetail')->flatten()->sum('credit') +
                                $opening_balance_credit),2);
                    array_push($groups,[
                        "name" => $group->name,
                        "code" => $group->code,
                        "total" =>$total,
                    ]);
                    $opening_balance_debit_equity += $opening_balance_debit;
                    $opening_balance_credit_equity += $opening_balance_credit;
                    foreach ($equityGroupsWithYears as &$item) {
                        if ($item['code'] == $group->code) {
                            $codeExists = true;
                            $yearValueExists = false;
                            foreach ($item['year_value'] as &$yearValue) {
                                if ($yearValue['year_number'] == $financialPeriod['year_number']) {
                                    $yearValueExists = true;
                                    break;
                                }
                            }
                            if (!$yearValueExists) {
                                $item['year_value'][] = [
                                    "year_number" => $financialPeriod['year_number'],
                                    "value" => $total,
                                ];
                            }
                            break;
                        }
                    }
                    if (!$codeExists) {
                        $data = [
                            "name" => $group->name,
                            "code" => $group->code,
                            "year_value" => [
                                [
                                    "year_number" => $financialPeriod['year_number'],
                                    "value" => $total,
                                ],
                            ],
                        ];
                        array_push($equityGroupsWithYears, $data);
                    }
                }
                $equity_debit =  $financialPeriod['equity']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('debit');
                $equity_credit =  $financialPeriod['equity']->groups->pluck('accounts')->flatten()->pluck('journalEntryDetail')->flatten()->sum('credit');
                $total =  number_format(($opening_balance_debit_equity +
                                $equity_debit) -
                                ($equity_credit +
                                $opening_balance_credit_equity),2);
                array_push($equity,[
                    "groups"=>$groups,
                    'total'  =>
                       $total ,
                ]);
                $total_equity_year = $total;

            }
            $total = ($total_assets_year??0+$total_equity_year??0+$total_liabilities_year??0);
            $data[] = [
                'year_number' => $financialPeriod['year_number'],
                'assets' => $assets,
                'liabilities' => $liabilities,
                'equity' => $equity,
                'total'=>$total,
                'liabilities_plus_equity' =>
                number_format((($opening_balance_debit_equity +
                    $equity_debit)-
                    ($opening_balance_credit_equity +
                    $equity_credit)) +
                    (($opening_balance_debit_liabilities +
                    $liabilities_debit)-
                    ($liabilities_credit +
                    $opening_balance_credit_liabilities)),2)??null,
            ];
        }

        $accounts = [
            "years"=>$years,
            "assets"=>$assetsGroupsWithYears,
            "liabilities"=>$liabilitiesGroupsWithYears,
            "equity"=>$equityGroupsWithYears,
            "balance_sheet"=>$data,
            "from"=>$from,
            "to"=>$to
        ];

        return $accounts;

    }

}
