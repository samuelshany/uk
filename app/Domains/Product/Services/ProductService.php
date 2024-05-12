<?php

namespace App\Domains\Product\Services;

use App\Domains\Product\Imports\ProductImport;
use App\Domains\Product\Interfaces\ProductRepositoryInterface;
use App\Domains\Product\Models\Product;
use App\Mail\SendPassword;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;

class ProductService
{
    public function __construct(private ProductRepositoryInterface $productRepository)
    {
    }
    public function findById($id)
    {
        return $this->productRepository->findById($id);
    }

    public function list()
    {
        return $this->productRepository->list();
    }

    public function listPoductsWithStock()
    {
        return $this->productRepository->listPoductsWithStock();
    }


    public function delete($id)
    {
        return $this->productRepository->delete($id);
    }

    public function create($request)
    {
        return $this->productRepository->store($request);
    }

    public function update($id, $request)
    {
        return $this->productRepository->update($id, $request);
    }

    public function updateFiles($request)
    {
        return $this->productRepository->updateFiles($request);
    }
    public function assign($id, $request)
    {
        return $this->productRepository->assign($id, $request);
    }
    public function import()
    {
        $import = new ProductImport();
        Excel::import($import, request()->file);
        return $import;
    }
}
