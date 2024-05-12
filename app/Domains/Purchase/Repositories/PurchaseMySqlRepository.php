<?php

namespace App\Domains\Purchase\Repositories;

use App\Domains\Customer\Models\Customer;
use App\Domains\Product\Models\Product;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\Purchase\Interfaces\PurchaseRepositoryInterface;
use App\Domains\Purchase\Models\Purchase;
use App\Domains\Tax\Models\Tax;
use App\Domains\Vendor\Models\Vendor;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class PurchaseMySqlRepository implements PurchaseRepositoryInterface
{
    public function __construct(private Purchase $purchase)
    {
    }
    public function findById(string $id): Purchase
    {
        $purchase = $this->purchase::findOrFail($id);
        $purchase->load(['products', 'stock', 'creator', /*'taxes',*/ 'purchasable']);
        return $purchase;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = Purchase::when(request()->creator_id, function ($q) {
            return $q->where('creator_id', request()->creator_id);
        })
            ->when(request()->sort_by, function ($q) {
                if (in_array(request()->sort_by, ['quantity', 'selling_price', 'purchasing_price', 'created_at', 'creator_id'])) {
                    $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
                }
            })
            ->when(request()->type, function ($q) {
                return $q->where('purchasable_type', 'like', '%' . request()->type . '%');
            })
            ->with(['products', 'stock', 'creator', /*'taxes',*/ 'purchasable'])
            ->orderBy('date');

        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }

    public function store($request): bool
    {
        $data = $request->validated();
        $subtotal = 0;
        // Calc total price for each product after its discount
        foreach ($data['products'] as $productData) {
            $product = Product::find($productData['product_id']);
            $discountValue = ($productData['discount'] / 100) * $product->spec->selling_price;
            $product_price = $product->spec->selling_price - $discountValue;
            $subtotal += $productData['quantity'] * $product_price;
        }
        //        $taxes = [];
        //        foreach ($data['taxes'] as $taxData) {
        //            $taxes[] = $taxData['tax_id'];
        //        }
        //        $taxAmount = Tax::whereIn('id', $taxes)->sum('percentage');
        //        $totalTax = $subtotal * $taxAmount / 100;
        $totalAmount = $subtotal /*+ $totalTax*/ ;

        $purchase = $this->purchase::create($request->validated() + [
            'account_id' => $request->payment_account_id,
            'creator_id' => auth()->user()->id,
            'total' => $totalAmount,
        ]);

        // if ($request->has('invoice_image')) {
        //     $purchase->addMediaFromRequest('invoice_image')->toMediaCollection('Purchase&Sales');
        // }

        // Add a multi media (image) from Request
        if ($images = $request->file('invoice_image')) {
            foreach ($images as $file) {
                $purchase->addMedia($file)->toMediaCollection('Purchase&Sales');
            }
        }

        $purchase->products()->sync($data['products']);
        //        $purchase->taxes()->sync($data['taxes']);
        if ($request->supplier_id) {
            $supplier = Supplier::find($request->supplier_id);
            $supplier->purchase()->save($purchase);
        } elseif ($request->vendor_id) {
            $vendor = Vendor::find($request->vendor_id);
            $vendor->purchase()->save($purchase);
        } elseif ($request->customer_id) {
            $customer = Customer::find($request->customer_id);
            $customer->purchase()->save($purchase);
        }
        return true;
    }

    public function updateFiles($request): bool
    {
        // return true;
        // if ($request->hasFile('invoice_image')) {
        //     $journalEntry->clearMediaCollection('journalEntryImages'); // Clear existing media
        //     $journalEntry->addMediaFromRequest('invoice_image')->toMediaCollection('journalEntryImages');
        // }
        $purchase = $this->purchase::findOrFail($request->id);

        // Add a multi media (image) from Request
        if ($images = $request->file('invoice_image')) {
            foreach ($images as $file) {
                $purchase->addMedia($file)->toMediaCollection('Purchase&Sales');
            }
        }
        // return true;
        if ($request->mediaId) {
            foreach ($request->mediaId as $id) {
                $mediaItem = Media::findOrFail($id);

                // Move the current media item to the 'Purchase&Sales' collection
                $mediaItem->move($mediaItem->model, 'Purchase&SalesArchive');

                // Optionally, if you want to delete the original media item after moving
                // $mediaItem->delete();
            }
        }
        return true;
    }

    public function update(string $id, $request): bool
    {
        $purchase = $this->purchase::findOrFail($id);

        $data = $request->validated();
        $subtotal = 0;
        foreach ($data['products'] as $productData) {
            $product = Product::find($productData['product_id']);
            $discountValue = ($productData['discount'] / 100) * $product->spec->selling_price;
            $product_price = $product->spec->selling_price - $discountValue;
            $subtotal += $productData['quantity'] * $product_price;
        }

        //        $taxes = [];
        //        foreach ($data['taxes'] as $taxData) {
        //            $taxes[] = $taxData['tax_id'];
        //        }
        //        $taxAmount = Tax::whereIn('id', $taxes)->sum('percentage');
        //        $totalTax = $subtotal * $taxAmount / 100;
        $totalAmount = $subtotal /*+ $totalTax */ ;

        $purchase->update($request->validated() + [
            'creator_id' => auth()->user()->id,
            'total' => $totalAmount,
        ]);

        $purchase->products()->sync($data['products']);
        //        $purchase->taxes()->sync($data['taxes']);
        if ($request->supplier_id) {
            $supplier = Supplier::find($request->supplier_id);
            $supplier->purchase()->save($purchase);
        } elseif ($request->vendor_id) {
            $vendor = Vendor::find($request->vendor_id);
            $vendor->purchase()->save($purchase);
        } elseif ($request->customer_id) {
            $customer = Customer::find($request->customer_id);
            $customer->purchase()->save($purchase);
        }

        return true;
    }

    public function delete(string $id): bool
    {
        $this->purchase::findOrFail($id)?->delete();

        return true;
    }
}
