<?php

namespace App\Domains\SalesInvoicesPayment\Repositories;

use App\Domains\Customer\Models\Customer;
use App\Domains\Product\Models\Product;
use App\Domains\SalesInvoicesPayment\Interfaces\SalesInvoicesPaymentRepositoryInterface;
use App\Domains\RequestQuotation\Models\RequestQuotation;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;



class SalesInvoicesPaymentMySqlRepository implements SalesInvoicesPaymentRepositoryInterface
{
    public function __construct(private SalesInvoicesPayment $salesInvoicesPayment)
    {
    }
    public function findById(string $id): SalesInvoicesPayment
    {
        $salesInvoicesPayment = $this->salesInvoicesPayment::findOrFail($id);
        // $salesInvoicesPayment->load(['product', 'creator']);
        return $salesInvoicesPayment;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = SalesInvoicesPayment::when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['total', 'paid_total', 'remain_total', 'status', 'pay_option', 'status', 'created_at'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })
            ->orderBy('id');
        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }

    public function store($salesInvoice, $details): bool
    {
        if ($salesInvoice->paymentType->payment_type == 'credit') {

            foreach ($details as $key => $value) {
                $this->salesInvoicesPayment->create([
                    'sales_invoice_id' => $salesInvoice->id,
                    'total' => $value['amount'],
                    'paid_total' => 0,
                    'remain_total' => $value['amount'],
                    'payment_date' => $value['date'],
                    'status' => 'pending'
                ]);
            }

        } else {
            $this->salesInvoicesPayment->create([
                'sales_invoice_id' => $salesInvoice->id,
                'total' => $salesInvoice->total,
                'paid_total' => $salesInvoice->total,
                'remain_total' => 0,
                'payment_date' => Carbon::today(),
                'status' => 'paid',
            ]);
        }


        return true;
    }
    public function update(string $id, $request): bool
    {
        $data = $request->validated();
        $product = Product::find($data['product_id']);
        $salesInvoicesPayment = $this->salesInvoicesPayment->findOrFail($id);

        $updated = $salesInvoicesPayment->update($data + [
            'item_price' => $product->spec->selling_price,
            'total' => $product->spec->selling_price * $data['quantity'],
        ]);

        if (!$updated) {
            return false;
        }

        return true;
    }

    public function collect(string $id): bool
    {
        try {
            DB::beginTransaction();

            $salesPayment = $this->findById($id);

            if (request()->type == 'Partial' && request()->details) {
                $amount = request('amount');

                if ($amount >= $salesPayment->total) {
                    throw new \InvalidArgumentException('Partial payment amount must be less than the total amount.');
                }

                $salesPayment->update(['status' => 'partial']);

                $this->salesInvoicesPayment->create([
                    'sales_invoice_id' => $salesPayment->sales_invoice_id,
                    'total' => $amount,
                    'paid_total' => $amount,
                    'remain_total' => 0,
                    'payment_date' => Carbon::today(),
                    'status' => 'paid',
                    'parent_id' => $salesPayment->id
                ]);

                $remainAmount = $salesPayment->total - $amount;
                $totalAmount = collect(request()->details)->sum('amount');
                if (($remainAmount != $totalAmount)) {
                    return false;
                }

                foreach (request()->details as $key => $value) {
                    $this->salesInvoicesPayment->create([
                        'sales_invoice_id' => $salesPayment->sales_invoice_id,
                        'total' => $value['amount'],
                        'paid_total' => 0,
                        'remain_total' => $value['amount'],
                        'payment_date' => $value['date'],
                        'status' => 'pending',
                        'parent_id' => $salesPayment->id
                    ]);
                }

            } elseif (request()->type == 'All') {
                $salesPayment->update([
                    'status' => 'paid',
                    'paid_total'=> $salesPayment->total,
                    'remain_total' => 0
                ]);
            } else {
                throw new \InvalidArgumentException('Invalid payment type.');
            }

            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        }
    }
}
