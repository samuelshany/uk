<?php

namespace App\Domains\Product\Controllers;

use App\Domains\Product\Models\EnumPermissionProduct;
use App\Domains\Product\Models\Product;
use App\Domains\Product\Request\AssignSpecRequest;
use App\Domains\Product\Request\ImportProductRequest;
use App\Domains\Product\Request\StoreProductRequest;
use App\Domains\Product\Request\UpdateFilesRequest;
use App\Domains\Product\Request\UpdateProductRequest;
use App\Domains\Product\Resources\ProductResource;
use App\Domains\Product\Services\ProductService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct(private ProductService $productService)
    {
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::view_products->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductResource::collection($this->productService->list());
    }
    public function poductsWithStock()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::view_products->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductResource::collection($this->productService->listPoductsWithStock());
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::delete_product->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $deleted = $this->productService->delete($id);

        if (!$deleted) {
            return response()->json([
                'message' => __('The product has been used in at least one purchase.'),
                'status' => false,
            ], 401);
        }

        return response()->json([
            'message' => __('Product moved to trash!'),
            'status' => true,
        ], 200);
    }

    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::view_products->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ProductResource($this->productService->findById($id));
    }

    public function create(StoreProductRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::create_product->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->productService->create($request);
        return response()->json([
            'message' => __('Product Created Successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateProductRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::edit_product->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->productService->update($id, $request);
        return response()->json([
            'message' => __('Product Updated Successfully!'),
            'status' => true,
        ], 200);
    }

    public function updateFiles(UpdateFilesRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::edit_product->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        try {
            $this->productService->updateFiles($request);
            return response()->json([
                'message' => __('Updated Successfully'),
                'status' => true,
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function assignSpecs($id, AssignSpecRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::create_product->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->productService->assign($id, $request);
        return response()->json([
            'message' => __('Product Created Successfully!'),
            'status' => true,
        ], 200);
    }

    public function import(ImportProductRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::create_product->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $import = $this->productService->import();
        if (count($import->importErrors) > 0) {
            return response()->json($import->importErrors)->setStatusCode(400);
        }
        return response()->json([
            'message' => __('messages.imported_successfully'),
            'status' => true,
        ], 200);
    }

    public function exportExample()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProduct::view_products->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response()->json([
            'file_path' => url('/products-example-import.xlsx'),
        ]);
    }


}
