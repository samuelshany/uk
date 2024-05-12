<?php

namespace App\Domains\Brand\Services;


use App\Domains\Brand\Interfaces\BrandRepositoryInterface;
use App\Domains\Brand\Models\Brand;

class BrandService
{
    public function __construct(private BrandRepositoryInterface $brandRepository)
    {
    }

    public function list()
    {
        return $this->brandRepository->list();
    }
    public function findById($id)
    {
        return $this->brandRepository->findById($id);
    }

    public function delete($id)
    {
        return $this->brandRepository->delete($id);
    }

    public function create($request)
    {
        return $this->brandRepository->store($request);
    }

    public function update($id, $request)
    {
        return $this->brandRepository->update($id, $request);
    }
}