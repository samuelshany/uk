<?php

namespace App\Domains\ProductCodeCriteria\Controllers;

use App\Domains\ProductCodeCriteria\Models\EnumPermissionProductCodeCriteria;
use App\Domains\ProductCodeCriteria\Request\StoreProductCodeCriteriaRequest;
use App\Domains\ProductCodeCriteria\Request\UpdateProductCodeCriteriaRequest;
use App\Domains\ProductCodeCriteria\Resources\ProductCodeCriteriaResource;
use App\Domains\ProductCodeCriteria\Services\ProductCodeCriteriaService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class ProductCodeCriteriaController extends Controller
{
    public function __construct(private ProductCodeCriteriaService $poroductCodeCriteria)
    {
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProductCodeCriteria::view_productCodeCriterias->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductCodeCriteriaResource::collection($this->poroductCodeCriteria->list());
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProductCodeCriteria::delete_productCodeCriteria->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->poroductCodeCriteria->delete($id);
        return response()->json([
            'message' => __('Product moved to trash!'),
            'status' => true,
        ], 200);
    }

    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProductCodeCriteria::view_productCodeCriterias->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ProductCodeCriteriaResource($this->poroductCodeCriteria->findById($id));
    }

    public function create(StoreProductCodeCriteriaRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProductCodeCriteria::create_productCodeCriteria->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->poroductCodeCriteria->create($request);
        return response()->json([
            'message' => __('Code Criteria Created Successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateProductCodeCriteriaRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProductCodeCriteria::edit_productCodeCriteria->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->poroductCodeCriteria->update($id, $request);
        return response()->json([
            'message' => __('Product Updated Successfully!'),
            'status' => true,
        ], 200);
    }

}
