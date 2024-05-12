<?php

namespace App\Domains\Product\Repositories;

use App\Domains\Brand\Models\Brand;
use App\Domains\Category\Models\Category;
use App\Domains\Product\Interfaces\ProductRepositoryInterface;
use App\Domains\Product\Models\Product;
use App\Domains\Product\Models\ProductSpec;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\UnitType\Models\UnitType;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class ProductMySqlRepository implements ProductRepositoryInterface
{
    public function __construct(private Product $product)
    {
    }
    public function findById(string $id): Product
    {
        $product = $this->product::findOrFail($id);
        $product->load('creator', 'category', 'taxes', 'unit', 'spec', 'brand', 'suppliers');
        return $product;

    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = Product::when(request()->search, function ($q) {
            $searchTerm = '%' . request()->search . '%';
            $q->where(function ($query) use ($searchTerm) {
                $query->where('name', 'like', $searchTerm)
                    ->orWhere('description', 'like', $searchTerm);
            });
        })
            ->when(request()->creator_id, function ($q) {
                return $q->where('creator_id', request()->creator_id);
            })
            ->when(request()->sort_by, function ($q) {
                if (
                    in_array(request()->sort_by, [
                        'name',
                        // 'purchase_price',
                        // 'selling_price',
                        'creator_id'
                        ,
                        'quantity'
                    ])
                ) {
                    $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
                }
            })->with(
                [
                    'category' => function ($query) {
                        $query->select('id', 'name');
                    },
                    'unit' => function ($query) {
                        $query->select('id', 'name');
                    },
                    'creator',
                    'taxes',
                    'spec'
                ]
            )
            ->orderBy('name');
        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }

    public function listPoductsWithStock()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = Product::has('stocks')->with(['spec', 'stocks'])->when(request()->search, function ($q) {
            $searchTerm = '%' . request()->search . '%';
            $q->where(function ($query) use ($searchTerm) {
                $query->where('name', 'like', $searchTerm)
                    ->orWhere('description', 'like', $searchTerm);
            });
        })
            ->when(request()->creator_id, function ($q) {
                return $q->where('creator_id', request()->creator_id);
            })
            ->when(request()->sort_by, function ($q) {
                if (
                    in_array(request()->sort_by, [
                        'name',
                        // 'purchase_price',
                        // 'selling_price',
                        'creator_id'
                        ,
                        'quantity'
                    ])
                ) {
                    $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
                }
            })->with(
                [
                    'category' => function ($query) {
                        $query->select('id', 'name');
                    },
                    'unit' => function ($query) {
                        $query->select('id', 'name');
                    },
                    'creator',
                    'taxes',
                    'spec'
                ]
            )
            ->orderBy('name');
        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }

    public function store($request): bool
    {
        $productData = $request->validated();
        unset($productData['specs']);

        $criteria = ProductCodeCriteria::first();
        $code = "";
        if ($criteria->type == 'manual') {
            $code = request()->code;

            $product = $this->product::create($productData + [
                'code' => $code,
                'creator_id' => auth()->user()->id,
            ]);

            $product->suppliers()->sync($request->suppliers);
            $this->createProductSpec($product, $request);

        } elseif ($criteria->type == 'numeric') {
            $code = $this->generateNumericCode($criteria);

            $product = $this->product::create($productData + [
                'code' => $code,
                'creator_id' => auth()->user()->id,
            ]);

            $product->suppliers()->sync($request->suppliers);
            $this->createProductSpec($product, $request);

        } elseif ($criteria->type == 'alphanumeric') {
            if ($criteria->supplier == 1) {

                $lastProduct = Product::orderBy('id', 'desc')->first();
                foreach ($request->suppliers as $supplier) {
                    $code = $this->generateAlphaNumericCode($criteria, $lastProduct, $supplier);
                    $supplierPrefix = Supplier::find($supplier)->prefix;
                    unset($productData['name']);
                    $product = $this->product::create($productData + [
                        'name' => $request->name . ' - ' . $supplierPrefix,
                        'code' => $code,
                        'creator_id' => auth()->user()->id,
                    ]);

                    $product->suppliers()->sync($supplier);
                    $this->createProductSpec($product, $request);
                }
            } else {
                $lastProduct = Product::orderBy('id', 'desc')->first();
                $code = $this->generateAlphaNumericCode($criteria, $lastProduct, '');

                $product = $this->product::create($productData + [
                    'code' => $code,
                    'creator_id' => auth()->user()->id,
                ]);

                $product->suppliers()->sync($request->suppliers);
                $this->createProductSpec($product, $request);
            }
        }

        // Add a multi media (image) from Request
        if ($images = $request->file('specs_images')) {
            foreach ($images as $file) {
                $product->addMedia($file)->toMediaCollection('ProductSpecImages', 'upload_product_spec');
            }
        }

        return true;
    }

    public function update(string $id, $request): bool
    {
        $product = $this->product::findOrFail($id);
        $product->suppliers()->detach();
        $product->spec()->delete();
        // dd('here');
        $productData = $request->validated();
        unset($productData['specs']);

        $criteria = ProductCodeCriteria::first();
        $code = "";
        if ($criteria->type == 'manual') {
            $code = request()->code;
            $product->update($productData);
            $product->suppliers()->sync($request->suppliers);
            $this->createProductSpec($product, $request);

        } elseif ($criteria->type == 'numeric') {
            $code = $this->generateNumericCode($criteria);
            $product->update($productData);
            $product->suppliers()->sync($request->suppliers);
            $this->createProductSpec($product, $request);

        } elseif ($criteria->type == 'alphanumeric') {
            if ($criteria->supplier == 1) {

                $lastProduct = Product::orderBy('id', 'desc')->first();
                foreach ($request->suppliers as $supplier) {
                    $code = $this->generateAlphaNumericCode($criteria, $lastProduct, $supplier);
                    $supplierPrefix = Supplier::find($supplier)->prefix;
                    unset($productData['name']);

                    $product->update($productData);
                    $product->suppliers()->sync($supplier);
                    $this->createProductSpec($product, $request);
                }
            } else {
                $lastProduct = Product::orderBy('id', 'desc')->first();
                $code = $this->generateAlphaNumericCode($criteria, $lastProduct, '');

                $product->update($productData);
                $product->suppliers()->sync($request->suppliers);
                $this->createProductSpec($product, $request);
            }
        }

        return true;
    }

    public function updateFiles($request): bool
    {
        $journalEntry = $this->product::findOrFail($request->id);

        // Add a multi media (image) from Request
        if ($images = $request->file('specs_images')) {
            foreach ($images as $file) {
                $journalEntry->addMedia($file)->toMediaCollection('ProductSpecImages', 'upload_product_spec');
            }
        }
        // return true;
        if ($request->mediaId) {
            foreach ($request->mediaId as $id) {
                $mediaItem = Media::findOrFail($id);

                // Move the current media item to the 'Purchase&Sales' collection
                $mediaItem->move($mediaItem->model, 'ProductSpecImagesArchive');

            }
        }
        return true;
    }

    public function assign($id, $request): bool
    {
        $product = $this->findById($id);
        $criteria = ProductCodeCriteria::first();
        $specName = $request->default_spec_name;
        $defaultSpec = $product->spec()->first()->$specName ?? '';

        if (!$product) {
            return false;
        }

        if ($criteria->type == 'manual') {
            $newProduct = new Product();
            $newProduct->fill($product->attributesToArray());
            $newProduct->code = $request->code;
            $newProduct->name = $product->name . ' ' . $defaultSpec;
            $newProduct->save();
            $this->createProductSpec($newProduct, $request);
            $newProduct->suppliers()->sync($product->suppliers);
            return true;

        } elseif ($criteria->type == 'numeric') {
            $newProduct = new Product();
            $newProduct->fill($product->attributesToArray());
            $latestProduct = Product::where('code', 'like', $product->code . '%')->latest()->first();
            $newProduct->code = $latestProduct->code + 1;
            $newProduct->name = $product->name . ' ' . $defaultSpec;
            $newProduct->save();
            $this->createProductSpec($newProduct, $request);
            $newProduct->suppliers()->sync($product->suppliers);
            return true;

        } elseif ($criteria->type == 'alphanumeric') {
            $newProduct = new Product();
            $newProduct->fill($product->attributesToArray());
            $newProduct->name = $product->name . ' ' . $defaultSpec;
            $latestProduct = Product::where('code', 'like', $product->code . '%')->latest()->first();
            $numericPart = preg_replace('/[^0-9]/', '', $product->code);
            if ($numericPart == $criteria->start_index) {
                $newProduct->code = $latestProduct->code . '01';
            } else {
                $newProduct->code = preg_replace_callback('/[0-9]+$/', function ($matches) {
                    return ++$matches[0];
                }, $latestProduct->code);
            }
            $newProduct->save();
            $this->createProductSpec($newProduct, $request);
            $newProduct->suppliers()->sync($product->suppliers);
            return true;

        }

        return false;
    }

    private function createProductSpec($product, $request)
    {
        ProductSpec::create([
            'product_id' => $product->id,
            'quantity_alert' => $request->specs_quantity_alert ?? null,
            'opening_stock' => $request->specs_opening_stock ?? null,
            'quantity' => $request->specs_quantity ?? null,
            'selling_price' => $request->specs_selling_price ?? null,
            'purchase_price' => $request->specs_purchase_price ?? null,
            'width' => $request->specs_width ?? null,
            'height' => $request->specs_height ?? null,
            'length' => $request->specs_length ?? null,
            'size' => $request->specs_size ?? null,
            'material' => $request->specs_material ?? null,
            'tax_id' => $request->taxes_id ?? null
        ]);
    }
    public function delete(string $id): bool
    {
        $product = Product::find(request()->id);

        if ($product) {
            $usedInPurchases = DB::table('purchase_products')
                ->where('product_id', request()->id)
                ->exists();

            if ($usedInPurchases) {
                return false;
            }
        }

        $this->product::findOrFail($id)->delete();

        return true;
    }

    public function storeFromImport($data)
    {

        $criteria = ProductCodeCriteria::first();
        $code = "";
        if ($criteria->type == 'manual') {
            if(isset($data['code'])&&$data['code']){

                $code = $data['code'];
            }
        } elseif ($criteria->type == 'numeric') {
            $code = $this->generateNumericCode($criteria);
        } elseif ($criteria->type == 'alphanumeric')  {
            $lastProduct = Product::orderBy('id','desc')->first();
            $supplier = Supplier::find($data['supplier_id']);
            $code = $this->generateAlphaNumericCode($criteria, $lastProduct,$supplier);
        }

        $data['code'] = $code;
        $data['creator_id'] = auth()->user()->id;
       $product =  $this->product::create($data);

       if($data['supplier_id']){

           $product->suppliers()->attach([
            'supplier_id' => $data['supplier_id'],
           ]);
       }
    }

    public function generateNumericCode($criteria)
    {
        $code = "";
        if (request()->route()->getName() == 'product.create') {
            $lastProduct = Product::orderBy('id', 'desc')->first();

            $code = $lastProduct ? ($lastProduct->code + 1) : $criteria->start_index;

        } elseif (request()->route()->getName() == 'product.update') {
            $product = Product::find(request()->id);
            $code = $product->code;
        }

        return $code;
    }

    function generateAlphaNumericCode($criteria, $lastProduct, $supplier)
    {
        $supplierPrefix = Supplier::find($supplier)->prefix ?? '';
        $categoryPrefix = Category::find(request()->category_id)->prefix ?? '';
        $brandPrefix = Brand::find(request()->brand_id)->prefix ?? '';
        $unitTypePrefix = UnitType::find(request()->unit_id)->prefix ?? '';
        $delimiter = $criteria->delimiter;
        $startIndex = $criteria->start_index;

        $supplierDelimiterPosition = $criteria->supplier_delimiter_position;
        $categoryDelimiterPosition = $criteria->category_delimiter_position;
        $brandDelimiterPosition = $criteria->brand_delimiter_position;
        $unitTypeDelimiterPosition = $criteria->unitType_delimiter_position;

        $code = '';
        // Append supplier prefix
        if ($criteria->supplier == 1 && !empty ($supplierPrefix)) {
            $code .= $supplierPrefix;
            if ($supplierDelimiterPosition == 'after') {
                $code .= $delimiter;
            } elseif ($supplierDelimiterPosition == 'before') {
                $code = $delimiter . $code;
            }
        }

        // Append category prefix
        if ($criteria->category == 1 && !empty ($categoryPrefix)) {
            $code .= $categoryPrefix;
            if ($categoryDelimiterPosition == 'after') {
                $code .= $delimiter;
            } elseif ($categoryDelimiterPosition == 'before') {
                $code = $delimiter . $code;
            }
        }

        // Append brand prefix
        if ($criteria->brand == 1 && !empty ($brandPrefix)) {
            $code .= $brandPrefix;
            if ($brandDelimiterPosition == 'after') {
                $code .= $delimiter;
            } elseif ($brandDelimiterPosition == 'before') {
                $code = $delimiter . $code;
            }
        }

        // Append unit type prefix
        if ($criteria->unitType == 1 && !empty ($unitTypePrefix)) {
            $code .= $unitTypePrefix;
            if ($unitTypeDelimiterPosition == 'after') {
                $code .= $delimiter;
            } elseif ($unitTypeDelimiterPosition == 'before') {
                $code = $delimiter . $code;
            }
        }

        if (request()->route()->getName() == 'product.create') {
            // $lastProduct = Product::orderBy('id', 'desc')->first();
            if ($lastProduct) {
                $lastProductCode = $lastProduct->code;
                $lastProductCode = trim(str_replace(' ', '', $lastProductCode), "\t");
                $pattern = '/(\d+)$/';
                if (preg_match($pattern, $lastProductCode, $matches)) {
                    $lastNumericPart = $matches[0];
                } else {
                    throw new \RuntimeException("No start index part found.");
                }
                $code .= $lastNumericPart + 1;
            } else {
                $code .= $startIndex;
            }
        } elseif (request()->route()->getName() == 'product.update') {
            $product = Product::find(request()->id);
            $productCode = $product->code;
            $pattern = '/(\d+)$/';
            if (preg_match($pattern, $productCode, $matches)) {
                $lastNumericPart = $matches[0];
            } else {
                throw new \RuntimeException("No start index part found.");
            }
            $code .= $lastNumericPart;
        }

        return $code;
    }

}
