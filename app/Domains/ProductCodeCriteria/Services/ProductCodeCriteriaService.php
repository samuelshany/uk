<?php

namespace App\Domains\ProductCodeCriteria\Services;


use App\Domains\ProductCodeCriteria\Interfaces\ProductCodeCriteriaRepositoryInterface;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;


class ProductCodeCriteriaService
{
    public function __construct(private ProductCodeCriteriaRepositoryInterface $productCodeCriteriaRepository)
    {
    }
    public function findById($id)
    {
        return $this->productCodeCriteriaRepository->findById($id);
    }

    public function list()
    {
        return $this->productCodeCriteriaRepository->list();
    }

    public function delete($id)
    {
        return $this->productCodeCriteriaRepository->delete($id);
    }

    public function create($request)
    {
        return $this->productCodeCriteriaRepository->store($request);
    }

    public function update($id, $request)
    {
        return $this->productCodeCriteriaRepository->update($id, $request);
    }
}
