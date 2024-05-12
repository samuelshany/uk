<?php

namespace App\Domains\Brand\Repositories;

use App\Domains\Brand\Interfaces\BrandRepositoryInterface;
use App\Domains\Brand\Models\Brand;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;

class BrandMySqlRepository implements BrandRepositoryInterface
{
    public function __construct(private Brand $brand)
    {
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = Brand::when(request()->search, function ($q) {
            $searchTerm = '%' . request()->search . '%';
            $q->where(function ($query) use ($searchTerm) {
                $query->where('name', 'like', $searchTerm)
                    ->orWhere('description', 'like', $searchTerm);
            });
        })
            ->when(request()->creator_id, function ($q) {
                return $q->where('creator_id', request()->creator_id);
            })
            ->when(request()->sort_by, function ($q) {
                if (in_array(request()->sort_by, ['name', 'creator_id'])) {
                    $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
                }
            })
            ->with('creator')
            ->orderBy('name');
            if ($limit === 'all') {
                return $query->get();
            } else {
                return $query->paginate($limit);
            }
    }
    public function findById(string $id): Brand
    {
        return $this->brand::findOrFail($id);
    }

    public function store($request): bool
    {
        $this->brand::create($request->validated() + [
            'creator_id' => auth()->user()->id,
        ]);
        return true;
    }

    public function update(string $id, $request): bool
    {
        $brand = $this->brand::findOrFail($id);
        $brand->update($request->validated() + [
            'creator_id' => auth()->user()->id,
        ]);
        return true;
    }

    public function delete(string $id): bool
    {
        $criteria = ProductCodeCriteria::first();
        if ($criteria && $criteria->brand == 1) {
            return false;
        }

        $this->brand::findOrFail($id)?->delete();

        return true;
    }
}
