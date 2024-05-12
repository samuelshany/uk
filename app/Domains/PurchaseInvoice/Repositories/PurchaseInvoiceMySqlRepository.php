<?php

namespace App\Domains\PurchaseInvoice\Repositories;

use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\PurchaseInvoice\Interfaces\PurchaseInvoiceRepositoryInterface;
use App\Domains\PurchaseInvoice\Models\PurchaseInvoice;
use App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment;

class PurchaseInvoiceMySqlRepository implements PurchaseInvoiceRepositoryInterface
{
    public function __construct(private PurchaseInvoice $purchaseInvoice)
    {
    }
    public function findById(string $id): PurchaseInvoice
    {
        $purchaseInvoice = $this->purchaseInvoice::findOrFail($id);
        return $purchaseInvoice;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = PurchaseInvoice::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);

        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['quantity', 'total', 'status', 'created_at', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->whereHas('supplier', function ($q) {
            if (in_array(request()->sort_by, ['name', 'email'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->whereHas('product', function ($q) {
            if (in_array(request()->sort_by, ['name'])) {
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

    public function listInvoiceDetails($id): PurchaseInvoice
    {
        return PurchaseInvoice::findOrFail($id);
    }

    public function listInvoiceDates($id): PurchaseInvoice
    {
        //return PurchaseInvoice::findOrFail($id)->dates();
        return PurchaseInvoice::findOrFail($id);
    }


    public function update(string $id, $request)
    {
        $requestOb = $this->purchaseInvoice::findOrFail($id);
        
        if (!$request->payment_type_id) {
            return false;
        }

        $paymentType = PaymentType::find($request->payment_type_id);

        if($paymentType->payment_type == null){
            return "This payment type is not determined as 'credit' or 'cash'. Please select a payment type that is either 'credit' or 'cash'.";
        }

        $requestOb->update([
            'payment_type_id' => $request->payment_type_id,
            'payment_account_id' => $request->payment_account_id,
        ]);

        return true;
    }

    public function updateFromDetailsInvoicePay(string $id, $request): bool
    {
        $requestOb = $this->purchaseInvoice::findOrFail($id);

        $requestOb->update($request->all());

        return true;
    }

    public function createPurchaseInvoice($data, $total, $supplier_id): bool
    {

        $this->purchaseInvoice->create([
            /*  'invoice_number' => null, */
            'product_id' => $data->product_id,
            'quantity' => $data->quantity,
            'supplier_id' => $supplier_id,
            'total' => $total,
            'notes' => $data->notes,
            'creator_id' => auth()->user()->id
        ]);

        return true;
    }


    public function delete(string $id): bool
    {
        $this->purchaseInvoice::findOrFail($id)?->delete();

        return true;
    }


    public function invoiceInvoicePayments(string $id)
    {
        $purchaseInvoice = $this->purchaseInvoice::findOrFail($id);

        return $purchaseInvoice->purchaseInvoicePayments;
    }
}
