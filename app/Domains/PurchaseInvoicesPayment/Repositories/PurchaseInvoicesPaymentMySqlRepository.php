<?php

namespace App\Domains\PurchaseInvoicesPayment\Repositories;

use App\Domains\Customer\Models\Customer;
use App\Domains\Product\Models\Product;
use App\Domains\PurchaseInvoicesPayment\Interfaces\PurchaseInvoicesPaymentRepositoryInterface;
use App\Domains\RequestQuotation\Models\RequestQuotation;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;



class PurchaseInvoicesPaymentMySqlRepository implements PurchaseInvoicesPaymentRepositoryInterface
{
    public function __construct(private PurchaseInvoicesPayment $PurchaseInvoicesPayment)
    {
    }
    public function findById(string $id): PurchaseInvoicesPayment
    {
        $PurchaseInvoicesPayment = $this->PurchaseInvoicesPayment::findOrFail($id);
        // $PurchaseInvoicesPayment->load(['product', 'creator']);
        return $PurchaseInvoicesPayment;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = PurchaseInvoicesPayment::when(request()->sort_by, function ($q) {
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

    public function store($PurchaseInvoice, $details): bool
    {

        if ($PurchaseInvoice->paymentType->payment_type == "credit") {

            foreach ($details as $key => $value) {
                $this->PurchaseInvoicesPayment->create([
                    'purchase_invoice_id' => $PurchaseInvoice->id,
                    'total' => $value['amount'],
                    'paid_total' => 0,
                    'remain_total' => $value['amount'],
                    'payment_date' => $value['date'],
                    'status' => 'pending'
                ]);
            }

        } else {
            $this->PurchaseInvoicesPayment->create([
                'purchase_invoice_id' => $PurchaseInvoice->id,
                'total' => $PurchaseInvoice->total,
                'paid_total' => 0,
                'remain_total' => $PurchaseInvoice->total,
                'payment_date' => Carbon::today(),
                'status' => 'pending',
            ]);
        }


        return true;
    }
    public function update(string $id, $request): bool
    {
        $data = $request->validated();
        $product = Product::find($data['product_id']);
        $PurchaseInvoicesPayment = $this->PurchaseInvoicesPayment->findOrFail($id);

        $updated = $PurchaseInvoicesPayment->update($data + [
            'item_price' => $product->spec->purchase_price,
            'total' => $product->spec->purchase_price * $data['quantity'],
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

            $purchasePayment = $this->findById($id);

            if (request()->type == 'Partial' && request()->details) {
                $amount = request('amount');
                if ($amount >= $purchasePayment->total) {
                    throw new \InvalidArgumentException('Partial payment amount must be less than the total amount.');
                }

                $purchasePayment->update([
                    'status' => 'partial',
                   /*  'total_paid' => $amount,
                    'remain_total' => $purchasePayment->total - $amount, */

                ]);

                $this->PurchaseInvoicesPayment->create([
                    'purchase_invoice_id' => $purchasePayment->purchase_invoice_id,
                    'total' => $amount,
                    'paid_total' => $amount,
                    'remain_total' => 0,
                    'payment_date' => Carbon::today(),
                    'status' => 'paid',
                    'parent_id' => $purchasePayment->id
                ]);

                $remainAmount = $purchasePayment->total - $amount;
                $totalAmount = collect(request()->details)->sum('amount');
                if (($remainAmount != $totalAmount)) {
                    return false;
                }

                foreach (request()->details as $key => $value) {
                    $this->PurchaseInvoicesPayment->create([
                        'purchase_invoice_id' => $purchasePayment->purchase_invoice_id,
                        'total' => $value['amount'],
                        'paid_total' => 0,
                        'remain_total' => $value['amount'],
                        'payment_date' => $value['date'],
                        'status' => 'pending',
                        'parent_id' => $purchasePayment->id
                    ]);
                }

            } elseif (request()->type == 'All') {
                $purchasePayment->update([
                    'status' => 'paid',
                    'paid_total'=> $purchasePayment->total,
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
