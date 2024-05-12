<?php

namespace App\Domains\RequestQuotation\Repositories;

use App\Domains\RequestQuotation\Interfaces\RequestQuotationRepositoryInterface;
use App\Domains\RequestQuotation\Models\RequestQuotation;

class RequestQuotationMySqlRepository implements RequestQuotationRepositoryInterface
{
    public function __construct(private RequestQuotation $requestQuotation)
    {
    }
    public function findById(string $id): RequestQuotation
    {
        $requestQuotation = $this->requestQuotation::findOrFail($id);
        return $requestQuotation;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = RequestQuotation::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);
        })->whereHas('purchaseRequest', function ($q) {
            if (in_array(request()->sort_by, ['quantity', 'item_price', 'total', 'delivery_date', 'notes', 'status', 'created_at', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->whereHas('supplier', function ($q) {
            if (in_array(request()->sort_by, ['name', 'email'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['supplier_total'])) {
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


    public function update(string $id, $request): bool
    {
        $requestOb = $this->requestQuotation::findOrFail($id);

        $requestOb->update($request->all());

        return true;
    }

    public function createRequestQuotaion($purchaseRequestId, $total, $suppliers): bool
    {

        foreach ($suppliers as $supplier) {
            $this->requestQuotation->create([
                'purchase_request_id' => $purchaseRequestId,
                'total' => $total,
                'supplier_id' => $supplier,
                'creator_id' => auth()->user()->id
            ]);
        }

        return true;
    }

    public function approvedRequestQuotation(string $id): bool
    {
        $requestOb = $this->requestQuotation::findOrFail($id);
        if($requestOb->supplier_total<=0){
            return false;
        }

        $requestOb->update([
            'is_approved' => 1,
            'isFixed' => 1,
        ]);
        // $this->requestQuotation->where('purchase_request_id',$requestOb->purchase_request_id)->update(['isFixed' => 1]);

        return true;
    }
    public function canceledRequestQuotation(string $id): bool
    {
        $requestOb = $this->requestQuotation::findOrFail($id);
        $requestOb->update([
            'isFixed' => 1
        ]);
        return true;
    }

    public function delete(string $id): bool
    {
        $this->requestQuotation::findOrFail($id)?->delete();

        return true;
    }
}
