<?php

namespace App\Domains\SalesInvoice\Repositories;

use App\Domains\InventoryDeliveryOrder\Repositories\InventoryDeliveryOrderMySqlRepository;
use App\Domains\SalesInvoice\Interfaces\SalesInvoiceRepositoryInterface;
use App\Domains\SalesInvoice\Models\SalesInvoice;
use App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment;

class SalesInvoiceMySqlRepository implements SalesInvoiceRepositoryInterface
{
    public function __construct(private SalesInvoice $SalesInvoice)
    {
    }
    public function findById(string $id): SalesInvoice
    {
        $SalesInvoice = $this->SalesInvoice::findOrFail($id);
        return $SalesInvoice;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = SalesInvoice::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);

        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['quantity', 'total', 'status', 'created_at', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->whereHas('customer', function ($q) {
            if (in_array(request()->sort_by, ['name', 'email'])) {
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

    public function listInvoiceDetails($id): SalesInvoice
    {
        return SalesInvoice::findOrFail($id);
    }

    public function listInvoiceDates($id): SalesInvoice
    {
        //return SalesInvoice::findOrFail($id)->dates();
        return SalesInvoice::findOrFail($id);
    }


    public function update(string $id, $request): bool
    {
        $requestOb = $this->SalesInvoice::findOrFail($id);

        if (!$request->payment_type_id) {
            return false;
        }

        $requestOb->update([
            'payment_type_id' => $request->payment_type_id,
            'payment_account_id' => $request->payment_account_id,
        ]);

        return true;
    }

    public function updateFromDetailsInvoicePay(string $id, $request): bool
    {
        $requestOb = $this->SalesInvoice::findOrFail($id);

        $requestOb->update($request->all());

        return true;
    }

    public function createSalesInvoice($data, $total, $customer_id): bool
    {


        
        $salesInvoice = $this->SalesInvoice::create([
            'invoice_number' => $data->entry_no,
            'currency_id' => $data->currency_id,
            'tax_id' => $data->tax_id,
            'tax_amount' => $data->tax_amount,
            'customer_id' => $customer_id,
            'total' => $total,
            'delivery_date' => $data->delivery_date,
            'notes' => $data->notes,
            'creator_id' => auth()->user()->id
        ]);

        foreach ($data->salesOrderProducts as $salesInvoiceProduct) {
            $salesInvoice->salesInvoiceProducts()->attach($salesInvoiceProduct->product_id, [
                'quantity' => $salesInvoiceProduct['quantity'],
                'product_price' => $salesInvoiceProduct['product_price'],
                'discount_type' => $salesInvoiceProduct['discount_type'],
                'discount_amount' => $salesInvoiceProduct['discount_amount'],
                'total' => $salesInvoiceProduct['total'],
            ]);
        }
        app(InventoryDeliveryOrderMySqlRepository::class)->createInventoryDeliveryOrder($salesInvoice);

        return true;
    }


    public function delete(string $id): bool
    {
        $this->SalesInvoice::findOrFail($id)?->delete();

        return true;
    }


    public function invoiceInvoicePayments(string $id)
    {
        $salesInvoice = $this->SalesInvoice::findOrFail($id);

        return $salesInvoice->salesInvoicePayments;
    }
}
