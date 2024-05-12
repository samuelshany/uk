<?php

namespace App\Domains\DownpaymentOption\Repositories;

use App\Domains\DownpaymentOption\Interfaces\DownpaymentOptionRepositoryInterface;
use App\Domains\DownpaymentOption\Models\DownpaymentOption;

class DownpaymentOptionMySqlRepository implements DownpaymentOptionRepositoryInterface
{
    public function __construct(private DownpaymentOption $downpaymentOption)
    {
    }
    public function findById(string $id): DownpaymentOption
    {
        $downpaymentOption = $this->downpaymentOption::findOrFail($id);
        return $downpaymentOption;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = DownpaymentOption::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);

        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['name', 'description', 'created_at','updated_at', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })
            ->orderBy('created_at', 'desc');

        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }



    public function store( $request): bool
    {
        $this->downpaymentOption::create($request->all()+[
            'creator_id' => auth()->user()->id,
            'editor_id' => auth()->user()->id,
        ]);

        return true;
    }

    public function update(string $id, $request): bool
    {
        $requestOb = $this->downpaymentOption::findOrFail($id);

        $requestOb->update([
            'name' => $request->name,
            'description' => $request->description,
            'editor_id' => auth()->user()->id,
        ]);

        return true;
    }


    public function delete(string $id): bool
    {
        $this->downpaymentOption::findOrFail($id)?->delete();

        return true;
    }

}
