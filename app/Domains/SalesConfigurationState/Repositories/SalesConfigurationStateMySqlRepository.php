<?php

namespace App\Domains\SalesConfigurationState\Repositories;

use App\Domains\SalesConfigurationState\Interfaces\SalesConfigurationStateRepositoryInterface;
use App\Domains\SalesConfigurationState\Models\SalesConfigurationState;
use App\Domains\SalesConfigurationStatesPayment\Models\SalesConfigurationStatesPayment;

class SalesConfigurationStateMySqlRepository implements SalesConfigurationStateRepositoryInterface
{
    public function __construct(private SalesConfigurationState $SalesConfigurationState)
    {
    }
    public function findById(string $id): SalesConfigurationState
    {
        $SalesConfigurationState = $this->SalesConfigurationState::findOrFail($id);
        return $SalesConfigurationState;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = SalesConfigurationState::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);

        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['status_name', 'color', 'final_state', 'created_at', 'creator_id'])) {
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



    public function store($request): bool
    {
        $request['creator_id'] = auth()->user()->id;
        $this->SalesConfigurationState:: create($request->all());

        return true;
    }

    public function update(string $id, $request): bool
    {
        $requestOb = $this->SalesConfigurationState::findOrFail($id);

        $requestOb->update($request->all());

        return true;
    }


    public function delete(string $id): bool
    {
        $this->SalesConfigurationState::findOrFail($id)?->delete();

        return true;
    }

}
