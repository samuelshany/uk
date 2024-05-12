<?php

namespace App\Domains\ProductCodeCriteria\Repositories;

use App\Domains\Product\Models\Product;
use App\Domains\ProductCodeCriteria\Interfaces\ProductCodeCriteriaRepositoryInterface;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use Illuminate\Database\Eloquent\Collection;

class ProductCodeCriteriaMySqlRepository implements ProductCodeCriteriaRepositoryInterface
{
    public function __construct(private ProductCodeCriteria $productCodeCriteria)
    {
    }
    public function findById(string $id): ProductCodeCriteria
    {
        $criteria = $this->productCodeCriteria::findOrFail($id);
        $criteria->load('creator');
        // dd($criteria);
        return $criteria;

    }
    public function list()
    {
        return $this->productCodeCriteria->with(['creator'])->paginate(config('app.pagination_count'));
    }


    public function store($request): bool
    {
        $criteriaData = $request->validated();

        $this->productCodeCriteria::create($criteriaData + [
            'creator_id' => auth()->user()->id,
        ]);

        return true;
    }

    public function update(string $id, $request): bool
    {
        $criteriaData = $request->validated();

        $codeCriteria = $this->productCodeCriteria::findOrFail($id);

        $codeCriteria->update($criteriaData + [
            'creator_id' => auth()->user()->id,
        ]);

        return true;
    }

    public function delete(string $id): bool
    {
        $count = Product::count();
        if ($count > 0) {
            throw new \Exception("Cannot delete criteria because products already exists");
        }

        $this->productCodeCriteria::findOrFail($id)->delete();

        return true;
    }
}
