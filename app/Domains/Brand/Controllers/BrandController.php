<?php

namespace App\Domains\Brand\Controllers;

use App\Domains\Brand\Models\EnumPermissionBrand;
use App\Domains\Brand\Request\StoreBrandRequest;
use App\Domains\Brand\Request\UpdateBrandRequest;
use App\Domains\Brand\Resources\BrandResource;
use App\Domains\Brand\Services\BrandService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function __construct(private BrandService $brandService)
    {
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionBrand::view_unit_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return BrandResource::collection($this->brandService->list());
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionBrand::view_unit_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BrandResource($this->brandService->findById($id));
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionBrand::delete_unit_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $deleted = $this->brandService->delete($id);

        if (!$deleted) {
            return response()->json([
                'message' => __('Can not delete, it used in product code criteria'),
                'status' => true,
            ], 200);
        }

        return response()->json([
            'message' => __('brand deleted successfully!'),
            'status' => true,
        ], 200);
    }

    public function create(StoreBrandRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionBrand::create_unit_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->brandService->create($request);
        return response()->json([
            'message' => __('brand created successfully!'),
            'status' => true,
        ], Response::HTTP_OK);
    }

    public function update($id, UpdateBrandRequest $request)
    {

        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionBrand::edit_unit_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        try {
            $this->brandService->update($id, $request);
            return response()->json([
                'message' => __('brand information updated successfully!'),
                'status' => true,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Faild To Update Record'
            ], Response::HTTP_NOT_FOUND);
        }
    }
}
