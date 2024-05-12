<?php

namespace App\Domains\SalesOrder\Repositories;

use App\Domains\Customer\Models\Customer;
use App\Domains\Product\Models\Product;
use App\Domains\RequestQuotation\Models\RequestQuotation;
use App\Domains\SalesOrder\Models\SalesOrderProduct;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\SalesOrder\Interfaces\SalesOrderRepositoryInterface;
use App\Domains\SalesOrder\Models\SalesOrder;
use Illuminate\Support\Facades\DB;

class SalesOrderMySqlRepository implements SalesOrderRepositoryInterface
{
    public function __construct(private SalesOrder $salesOrder)
    {
    }
    public function findById(string $id): SalesOrder
    {
        $salesOrder = $this->salesOrder::findOrFail($id);
        $salesOrder->load(['salesOrderProducts', 'creator']);
        return $salesOrder;
    }
    public function list()
    {
        return SalesOrder::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);
        })
            ->when(request()->sort_by, function ($q) {
                if (in_array(request()->sort_by, ['total', 'delivery_date', 'discount_amount', 'notes', 'status', 'created_at', 'creator_id'])) {
                    $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
                }
            })
            ->when(request()->type == 'requests', function ($q) {
                return $q->where('status', 'pending');
            })
            // ->when(request()->type == 'orders', function ($q) {
            //     return $q->where('status', 'approved');
            // })
            ->with(['salesOrderProducts', 'creator'])
            ->orderBy('id')->paginate(request('limit', config('app.pagination_count')));
    }

    public function store($request): bool
    {
        try {
            $data = $request->validated();
            unset($data['products']);
            unset($data['file']);

            $salesOrder = $this->salesOrder->create($data + [
                'creator_id' => auth()->user()->id,
                'entry_no' => $request->invoice_number,
                // 'notes' => $request->note,
            ]);
            // Add a multi media (image) from Request
            if ($images = $request->file('file')) {
                foreach ($images as $file) {
                    $salesOrder->addMedia($file)->toMediaCollection('SalesOrderImages', 'upload_sales_order');
                }
            }

            $salesOrderTotal = 0;
            foreach ($request->products as $productData) {
                // dd($salesOrder, $productData);
                $product = Product::findOrFail($productData['product_id']);

                $total = $this->calculateTotal($product->spec->selling_price, $productData['quantity'], $productData['discount_type'], $productData['discount_amount']);

                $salesOrderProductData = [
                    'sales_order_id' => $salesOrder->id,
                    'product_id' => $product->id,
                    'quantity' => $productData['quantity'],
                    'product_price' => $product->spec->selling_price,
                    'discount_type' => $productData['discount_type'] ?? '',
                    'discount_amount' => $productData['discount_amount'],
                    'total' => $total,
                ];
                $salesOrderTotal += $total;
                SalesOrderProduct::create($salesOrderProductData);
            }

            $final = $salesOrderTotal;
            // Calculate customer discount if provided
            if ($request->customer_discount && $request->customer_discount > 0) {
                $customerDiscountAmount = ($salesOrderTotal * $request->customer_discount) / 100;
                $final = $salesOrderTotal - $customerDiscountAmount;
            } else {
                $final = $salesOrderTotal;
            }

            // Apply tax if available
            if ($request->tax_id && isset($salesOrder->tax->percentage) && $salesOrder->tax->percentage > 0) {
                $taxAmount = ($final * $salesOrder->tax->percentage) / 100;
                $final = $final + $taxAmount;
            }

            // Update sales order with calculated values
            $salesOrder->update([
                'discount_amount' => $customerDiscountAmount ?? 0,
                'tax_amount' => $taxAmount ?? 0,
                'total' => $final,
            ]);

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    private function calculateTotal($productPrice, $quantity, $discountType, $discountAmount)
    {
        $totalWithoutDiscount = $productPrice * $quantity;

        if ($discountType == 'percentage') {
            $discount = ($totalWithoutDiscount * $discountAmount) / 100;
        } elseif ($discountType == 'fixed') {
            $discount = $discountAmount;
        } else {
            $discount = 0; // Or throw an exception, return an error message, etc.
        }

        $totalWithDiscount = $totalWithoutDiscount - $discount;

        return $totalWithDiscount;
    }



    public function update(string $id, $request): bool
    {
        try {
            $data = $request->validated();
            unset($data['products']);

            $salesOrder = $this->salesOrder->findOrFail($id);

            $salesOrderTotal = 0;
            foreach ($request->products as $productData) {
                $product = Product::findOrFail($productData['product_id']);

                $total = $this->calculateTotal($product->spec->selling_price, $productData['quantity'], $productData['discount_type'], $productData['discount_amount']);

                $salesOrderProduct = SalesOrderProduct::where(['sales_order_id' => $salesOrder->id, 'product_id' => $product->id])->first();

                $salesOrderProductData = [
                    'sales_order_id' => $salesOrder->id,
                    'product_id' => $product->id,
                    'quantity' => $productData['quantity'],
                    'product_price' => $product->spec->selling_price,
                    'discount_type' => $productData['discount_type'],
                    'discount_amount' => $productData['discount_amount'],
                    'total' => $total,
                ];

                if ($salesOrderProduct) {
                    $salesOrderProduct->update($salesOrderProductData);
                } else {
                    SalesOrderProduct::create($salesOrderProductData);
                }

                $salesOrderTotal += $total;
            }

            $final = $salesOrderTotal;
            // Calculate customer discount if provided
            if ($request->customer_discount && $request->customer_discount > 0) {
                $customerDiscountAmount = ($salesOrderTotal * $request->customer_discount) / 100;
                $final = $salesOrderTotal - $customerDiscountAmount;
            } else {
                $final = $salesOrderTotal;
            }

            // Apply tax if available
            if ($request->tax_id && isset($salesOrder->tax->percentage) && $salesOrder->tax->percentage > 0) {
                $taxAmount = ($final * $salesOrder->tax->percentage) / 100;
                $final = $final + $taxAmount;
            }

            // Update sales order with calculated values
            $salesOrder->update([
                'discount_amount' => $customerDiscountAmount ?? 0,
                'tax_amount' => $taxAmount ?? 0,
                'total' => $final,
            ]);

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function approveOrder(string $id): bool
    {
        $salesOrder = $this->salesOrder->findOrFail($id);
        $updated = $salesOrder->update([
            'status' => 'approved',
        ]);

        if (!$updated) {
            return false;
        }
        return true;
    }

    public function cancelOrder(string $id): bool
    {
        $salesOrder = $this->salesOrder->findOrFail($id);
        $updated = $salesOrder->update([
            'status' => 'canceled',
        ]);
        if (!$updated) {
            return false;
        }
        return true;
    }

    public function delete(string $id): bool
    {
        try {
            $salesOrder = $this->salesOrder::findOrFail($id);

            if ($salesOrder->delete()) {
                return true;
            }
        } catch (\Exception $e) {
            return false;
        }

        return false;
    }

}
