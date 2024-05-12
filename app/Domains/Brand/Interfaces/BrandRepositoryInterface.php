<?php

namespace App\Domains\Brand\Interfaces;
use App\Domains\Brand\Models\Brand;

interface BrandRepositoryInterface
{
    public function list() ;
    public function findById(string $id): Brand;
    public function store($request):bool;
    public function update(string $id, $request):bool;
    public function delete(string $id): bool;
}
