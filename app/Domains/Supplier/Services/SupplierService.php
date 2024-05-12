<?php

namespace App\Domains\Supplier\Services;


use App\Domains\Supplier\Interfaces\SupplierRepositoryInterface;
use App\Domains\Supplier\Exports\SuppliersExport;
use App\Domains\Supplier\Imports\SuppliersImport;
use App\Mail\SendPassword;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class SupplierService
{
    public function __construct(private SupplierRepositoryInterface $supplierRepository)
    {
    }

    public function list()
    {
        return $this->supplierRepository->list();
    }
   
    public function findById($id)
    {
        return $this->supplierRepository->findById($id);
    }
   
    public function delete($id)
    {
        return $this->supplierRepository->delete($id);
    }

    public function create($request)
    {
        return $this->supplierRepository->store($request);
    }

    public function update($id,$request)
    {
        return $this->supplierRepository->update($id,$request);
    }
    public function addAttachments($id,$request)
    {
        return $this->supplierRepository->addAttachments($id,$request);
    }
    public function import()
    {
        $import = new SuppliersImport();
        Excel::import($import, request()->file);
        return $import;
    }

    public function exportSuppliers()
    {
        $filename = 'supplier-accounts.xlsx';
        $path = 'tenant'.tenant('id').'/exports/suppliers/' . $filename;
        if(Storage::exists('public/'.$path)){
            unlink('public/'.$path);
        }

        Excel::store(new SuppliersExport(), $path, 'export');

/*         if(tenant('id')){
            return response()->json([
                'file_path' =>  url('storage/' . $path),
            ]);
        } */

        return response()->json([
            'file_path' => asset($path)
        ]);
    }
}
