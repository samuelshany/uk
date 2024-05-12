<?php

namespace App\Domains\DeductionOption\Repositories;

use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\DeductionOption\Interfaces\DeductionOptionRepositoryInterface;
use App\Domains\DeductionOption\Models\DeductionOption;

class DeductionOptionMySqlRepository implements DeductionOptionRepositoryInterface
{
    public function __construct(private DeductionOption $deductionOption)
    {
    }
    public function findById(string $id): DeductionOption
    {
        $deductionOption = $this->deductionOption::findOrFail($id);
        return $deductionOption;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = DeductionOption::when(request()->creator_id, function ($q) {
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
        $account = app(AccountMySqlRepository::class)->storeFromProjectManagement($request->parent_account_id,$request->name);
        $this->deductionOption::create($request->all()+[
            'account_id' => $account['account_id'],
            'creator_id' => auth()->user()->id,
            'editor_id' => auth()->user()->id,
        ]);
        

        return true;
    }

    public function update(string $id, $request): bool
    {
        $requestOb = $this->deductionOption::findOrFail($id);

         $data = [
            'name' => $request->name,
            'description' => $request->description,
        ];
        
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
        $this->deductionOption::findOrFail($id)?->delete();

        return true;
    }

}
