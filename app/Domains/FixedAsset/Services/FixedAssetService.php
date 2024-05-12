<?php

namespace App\Domains\FixedAsset\Services;

use App\Domains\FixedAsset\Interfaces\FixedAssetRepositoryInterface;
use App\Domains\FixedAsset\Exports\FixedAssetsExport;
use App\Domains\FixedAsset\Imports\FixedAssetsImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class FixedAssetService
{
    public function __construct(private FixedAssetRepositoryInterface $FixedAssetRepository)
    {
    }
    public function list()
    {
        return $this->FixedAssetRepository->list();
    }
    public function findById($id)
    {
        return $this->FixedAssetRepository->findById($id);
    }
    public function create($request)
    {
        return $this->FixedAssetRepository->store($request);
    }

    public function update($id, $request)
    {
        return $this->FixedAssetRepository->update($id, $request);
    }
    public function delete($id)
    {
        return $this->FixedAssetRepository->delete($id);
    }
    public function parents()
    {
        return $this->FixedAssetRepository->parents();
    }
    public function import()
    {
        $import = new FixedAssetsImport();
        Excel::import($import, request()->file);
        return $import;
    }

    public function exportFixedAssetsAccount()
    {
        $filename = 'supplier-accounts.xlsx';
        $path = 'tenant'.tenant('id').'/exports/suppliers/' . $filename;
        if(Storage::exists('public/'.$path)){
            unlink('public/'.$path);
        }

        Excel::store(new FixedAssetsExport(), $path, 'export');
        /* return Excel::download(new FixedAssetsExport(), $filename); */

/*         if(tenant('id')){
            return response()->json([
                'file_path' =>  url('storage/' . $path),
            ]);
        } */

        return response()->json([
            'file_path' => asset($path)
        ]);
    }

} // End Of Service
