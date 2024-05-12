<?php

namespace App\Domains\Clause\Repositories;

use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\Clause\Interfaces\ClauseRepositoryInterface;
use App\Domains\Clause\Models\Clause;

class ClauseMySqlRepository implements ClauseRepositoryInterface
{
    public function __construct(private Clause $clause)
    {
    }
    public function findById(string $id): Clause
    {
        $clause = $this->clause::findOrFail($id);
        return $clause;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = Clause::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);

        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['name','parent_account_id', 'description', 'created_at','updated_at', 'creator_id'])) {
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
        if($request->parent_account_id){

            $account = app(AccountMySqlRepository::class)->storeFromProjectManagement($request->parent_account_id,$request->name);
            $this->clause::create($request->all()+[
                'account_id' => $account['account_id'],
                'creator_id' => auth()->user()->id,
                'editor_id' => auth()->user()->id,
            ]);
        }else{
            $this->clause::create($request->all()+[
                'creator_id' => auth()->user()->id,
                'editor_id' => auth()->user()->id,
            ]);
        }
        return true;
    }

    public function update(string $id, $request): bool
    {
        $requestOb = $this->clause::findOrFail($id);

         if($requestOb->parent_account_id&&$request->parent_account_id!=$requestOb->parent_account_id){
            $account = app(AccountMySqlRepository::class)->storeFromProjectManagement($request->parent_account_id,$request->name);
            $data['parent_account_id'] = $request->parent_account_id;
            $data['account_id'] = $account['account_id'];
        }
        $requestOb->update($data);

        return true;
    }


    public function delete(string $id): bool
    {
        $this->clause::findOrFail($id)?->delete();

        return true;
    }

}
