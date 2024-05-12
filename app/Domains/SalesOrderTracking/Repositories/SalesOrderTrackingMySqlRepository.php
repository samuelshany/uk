<?php

namespace App\Domains\SalesOrderTracking\Repositories;

use App\Domains\SalesOrderTracking\Interfaces\SalesOrderTrackingRepositoryInterface;
use App\Domains\SalesOrderTracking\Models\SalesOrderTracking;

class SalesOrderTrackingMySqlRepository implements SalesOrderTrackingRepositoryInterface
{
    public function __construct(private SalesOrderTracking $SalesOrderTracking)
    {
    }
    public function findById(string $id): SalesOrderTracking
    {
        $SalesOrderTracking = $this->SalesOrderTracking::findOrFail($id);
        return $SalesOrderTracking;
    }
    public function list()
    {

        $limit = request('limit', config('app.pagination_count'));
        $query = SalesOrderTracking::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);

        })->whereHas('salesInvoice', function ($q) {
            if (in_array(request()->sort_by, ['quantity', 'total', 'created_at', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->orderBy('id', 'desc');

        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }




    public function update(string $id, $request): bool
    {
        $requestOb = $this->SalesOrderTracking::findOrFail($id);


        $requestOb->update(['status_id'=>$request->status_id]);

        return true;
    }



    /* public function delete(string $id): bool
    {
        $this->SalesOrderTracking::findOrFail($id)?->delete();

        return true;
    } */

}
