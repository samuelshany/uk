<?php

namespace App\Domains\JournalEntry\Services;

use App\Domains\JournalEntry\Exports\JournalEntriesExport;
use App\Domains\JournalEntry\Exports\JournalEntryDetailsExport;
use App\Domains\JournalEntry\Interfaces\JournalEntryRepositoryInterface;
use App\Mail\SendPassword;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;


class JournalEntryService
{
    public function __construct(private JournalEntryRepositoryInterface $JournalEntryRepository)
    { }

    public function list()
    {
        return $this->JournalEntryRepository->list();
    }
    public function findById($id)
    {
        return $this->JournalEntryRepository->findById($id);
    }

    public function delete($id)
    {
        return $this->JournalEntryRepository->delete($id);
    }

    public function create($request)
    {
        return $this->JournalEntryRepository->store($request);
    }

    public function update($id, $request)
    {
        return $this->JournalEntryRepository->update($id, $request);
    }
    public function detailsUpdate($id, $request)
    {
        return $this->JournalEntryRepository->detailsUpdate($id, $request);
    }

    public function updateFiles($request)
    {
        return $this->JournalEntryRepository->updateFiles($request);
    }

    public function importJournalEntryDetailsFromFile($id, $request)
    {
        return $this->JournalEntryRepository->importJournalEntryDetailsFromFile($id, $request);
    }
    public function exportJournalEntryDetailsToFile($id)
    {
        $filename = "journal_entry$id.xlsx";
        $path = 'tenant'.tenant('id').'/exports/journal_entries/' . $filename;
        if(Storage::exists('public/'.$path)){
            unlink('public/'.$path);
        }

        Excel::store(new JournalEntryDetailsExport($id), $path, 'export');
        return response()->json([
            'file_path' => asset($path)
        ]); 
    }
    public function exportJournalEntries()
    {
        $filename = 'journal_entries.xlsx';
        $path = 'tenant'.tenant('id').'/exports/journal_entries/' . $filename;
        if(Storage::exists('public/'.$path)){
            unlink('public/'.$path);
        }

        Excel::store(new JournalEntriesExport(), $path, 'export');
        return response()->json([
            'file_path' => asset($path)
        ]);
    }
    public function importJournalEntries(){
        return $this->JournalEntryRepository->importJournalEntries();
    }
    public function balanceSheet(){
        return $this->JournalEntryRepository->balanceSheet();
    }
    public function trialBalanceSheet(){
        return $this->JournalEntryRepository->trialBalanceSheet();
    }
    public function exportBalanceSheetPDF(){
        return $this->JournalEntryRepository->exportBalanceSheetPDF();
    }
    public function profitLoss(){
        return $this->JournalEntryRepository->profitLoss();
    }
    public function exportTrialBalanceSheetPDF(){
        return $this->JournalEntryRepository->exportTrialBalanceSheetPDF();

    }
}
