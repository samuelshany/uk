<?php

namespace App\Domains\PurchaseRequest\Repositories;

use App\Domains\Customer\Models\Customer;
use App\Domains\Product\Models\Product;
use App\Domains\RequestQuotation\Models\RequestQuotation;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\PurchaseRequest\Interfaces\PurchaseRequestRepositoryInterface;
use App\Domains\PurchaseRequest\Models\PurchaseRequest;
use App\Domains\Vendor\Models\Vendor;


class PurchaseRequestMySqlRepository implements PurchaseRequestRepositoryInterface
{
    public function __construct(private PurchaseRequest $PurchaseRequest)
    {
    }
    public function findById(string $id): PurchaseRequest
    {
        $PurchaseRequest = $this->PurchaseRequest::findOrFail($id);
        $PurchaseRequest->load(['product', 'creator']);
        return $PurchaseRequest;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = PurchaseRequest::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);
        })
            ->when(request()->sort_by, function ($q) {
                if (in_array(request()->sort_by, ['quantity', 'item_price', 'total', 'delivery_date', 'notes', 'status', 'created_at', 'creator_id'])) {
                    $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
                }
            })
            ->when(request()->type == 'requests', function ($q) {
                return $q->where('status', 'pending');
            })
            ->when(request()->type == 'orders', function ($q) {
                return $q->where('status', 'approved');
            })
            ->with(['product', 'creator'])
            ->orderBy('id');
        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }

    public function store($request): bool
    {
        $data = $request->validated();
        $product = Product::find($data['product_id']);
        $purchaseRequest = $this->PurchaseRequest->create($data + [
            'item_price' => $product->spec->purchase_price,
            'total' => $product->spec->purchase_price * $data['quantity'],
            'creator_id' => auth()->user()->id
        ]);

        if (!$purchaseRequest) {
            return false;
        }
        return true;
    }
    public function update(string $id, $request): bool
    {
        $data = $request->validated();
        $product = Product::find($data['product_id']);
        $purchaseRequest = $this->PurchaseRequest->findOrFail($id);

        $updated = $purchaseRequest->update($data + [
            'item_price' => $product->spec->purchase_price,
            'total' => $product->spec->purchase_price * $data['quantity'],
        ]);

        if (!$updated) {
            return false;
        }

        return true;
    }

    public function approveRequest(string $id): bool
    {
        $purchaseRequest = $this->PurchaseRequest->findOrFail($id);
        $updated = $purchaseRequest->update([
            'status' => 'approved',
        ]);

        if (!$updated) {
            return false;
        }
        return true;
    }

    public function cancelRequest(string $id): bool
    {
        $purchaseRequest = $this->PurchaseRequest->findOrFail($id);
        $updated = $purchaseRequest->update([
            'status' => 'canceled',
        ]);
        if (!$updated) {
            return false;
        }
        return true;
    }

    public function delete(string $id): bool
    {
        $request = $this->PurchaseRequest::findOrFail($id);

        $hasQuotations = RequestQuotation::where('purchase_request_id', $request->id)->exists();

        if ($hasQuotations) {
            return false;
        }

        if ($request->delete()) {
            return true;
        }
        return false;
    }

    public function sendNotificationToSuppliers($id, $suppliers): bool
    {
        $purchaseRequest = $this->PurchaseRequest->findOrFail($id);

        $updated = $purchaseRequest->update([
            'is_suppliers_notified' => true,
        ]);

        if (!$updated) {
            return false;
        }

        //need to send emails to those suppliers

        return true;
    }
}
