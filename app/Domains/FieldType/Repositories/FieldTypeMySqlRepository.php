<?php

namespace App\Domains\FieldType\Repositories;

use App\Domains\FieldType\Interfaces\FieldTypeRepositoryInterface;
use App\Domains\FieldType\Models\FieldType;

class FieldTypeMySqlRepository implements FieldTypeRepositoryInterface
{
    public function __construct(private FieldType $fieldType)
    {
    }
    public function findById(string $id): FieldType
    {
        $fieldType = $this->fieldType::findOrFail($id);
        return $fieldType;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = FieldType::when(request()->creator_id, function ($q) {
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
        $this->fieldType::create($request->all()+[
            'creator_id' => auth()->user()->id,
            'editor_id' => auth()->user()->id,
        ]);

        return true;
    }

    public function update(string $id, $request): bool
    {
        $requestOb = $this->fieldType::findOrFail($id);

        $requestOb->update([
            'name' => $request->name,
            'description' => $request->description,
            'editor_id' => auth()->user()->id,
        ]);

        return true;
    }


    public function delete(string $id): bool
    {
        $this->fieldType::findOrFail($id)?->delete();

        return true;
    }

}
