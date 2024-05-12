<?php

namespace App\Domains\Warehouse\Controllers;

use App\Domains\Warehouse\Models\EnumPermissionWarehouse;
use App\Domains\Warehouse\Request\ImportWarehouseRequest;
use App\Domains\Warehouse\Request\StoreWarehouseRequest;
use App\Domains\Warehouse\Request\UpdateWarehouseRequest;
use App\Domains\Warehouse\Resources\WarehouseResource;
use App\Domains\Warehouse\Services\WarehouseService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    public function __construct(private WarehouseService $warehouseService)
    {
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWarehouse::view_warehouse->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return  WarehouseResource::collection($this->warehouseService->list());
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWarehouse::delete_warehouse->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->warehouseService->delete($id);
        return response()->json([
            'message' => __('Deleted Successfully'),
            'status' => true,
        ], 200);
    }

    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWarehouse::view_warehouse->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new WarehouseResource($this->warehouseService->findById($id));
    }

    public function create(StoreWarehouseRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWarehouse::create_warehouse->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->warehouseService->create($request);
        return response()->json([
            'message' => __('Created Successfully'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateWarehouseRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWarehouse::edit_warehouse->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->warehouseService->update($id, $request);
        return response()->json([
            'message' => __('Updated Successfully'),
            'status' => true,
        ], 200);
    }

    public function import(ImportWarehouseRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWarehouse::create_warehouse->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $import = $this->warehouseService->import();
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
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWarehouse::view_warehouse->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response()->json([
            'file_path' => url('/warehouses-example-import.xlsx'),
        ]);
    }
}
