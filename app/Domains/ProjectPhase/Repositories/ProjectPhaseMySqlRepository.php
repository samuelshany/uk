<?php

namespace App\Domains\ProjectPhase\Repositories;

use App\Domains\ProjectPhase\Interfaces\ProjectPhaseRepositoryInterface;
use App\Domains\ProjectPhase\Models\ProjectPhase;

class ProjectPhaseMySqlRepository implements ProjectPhaseRepositoryInterface
{
    public function __construct(private ProjectPhase $projectPhase)
    {
    }
    public function findById(string $id): ProjectPhase
    {
        $projectPhase = $this->projectPhase::findOrFail($id);
        return $projectPhase;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = ProjectPhase::when(request()->creator_id, function ($q) {
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
        $this->projectPhase::create($request->all()+[
            'creator_id' => auth()->user()->id,
            'editor_id' => auth()->user()->id,
        ]);

        return true;
    }

    public function update(string $id, $request): bool
    {
        $requestOb = $this->projectPhase::findOrFail($id);

        $requestOb->update([
            'name' => $request->name,
            'description' => $request->description,
            'editor_id' => auth()->user()->id,
        ]);

        return true;
    }


    public function delete(string $id): bool
    {
        $this->projectPhase::findOrFail($id)?->delete();

        return true;
    }

}
