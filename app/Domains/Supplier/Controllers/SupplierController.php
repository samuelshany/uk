<?php

namespace App\Domains\Supplier\Controllers;

use App\Domains\Supplier\Models\EnumPermissionSupplier;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\Supplier\Request\StoreSupplierRequest;
use App\Domains\Supplier\Request\UpdateSupplierRequest;
use App\Domains\Supplier\Request\UpdateAttachmentsSupplierRequest;
use App\Domains\Supplier\Resources\SupplierResource;
use App\Domains\Supplier\Services\SupplierService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Domains\Supplier\Request\ImportSupplierRequest;
use App\Domains\Tax\Models\Tax;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function __construct(private SupplierService $supplierService)
    {
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::view_suppliers->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return SupplierResource::collection($this->supplierService->list());
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::view_suppliers->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return  new SupplierResource($this->supplierService->findById($id));
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::delete_supplier->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $deleted = $this->supplierService->delete($id);
        if (!$deleted) {
            return response()->json([
                'message' => __('Can not delete, it used in product code criteria'),
                'status' => true,
            ], 200);
        }

        return response()->json([
            'message' => __('Supplier deleted successfully!'),
            'status' => true,
        ], 200);
    }

    public function create(StoreSupplierRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::create_supplier->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        $this->supplierService->create($request);
        return response()->json([
            'message' => __('Supplier created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateSupplierRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::edit_supplier->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if (!$this->supplierService->update($id, $request)) {
            return response()->json([
                'message' => __('Could not find the Supplier information!'),
                'status' => false,
            ], 422);
        }

        return response()->json([
            'message' => __('Supplier information updated successfully!'),
            'status' => true,
        ], 200);

    }
    public function exportSuppliers()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::export_suppliers->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        return $this->supplierService->exportSuppliers();
    }
    public function exportExample()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::export_suppliers->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');



        return response()->json([
            'file_path' => url('/suppliers-example-import.xlsx'),
        ]);
    }


    public function import(ImportSupplierRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::import_suppliers->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $import = $this->supplierService->import();
        if (count($import->importErrors) > 0) {
            return response()->json($import->importErrors)->setStatusCode(400);
        }
        return response()->json([
            'message' => __('messages.imported_successfully'),
            'status' => true,
        ], 200);
    }

    public function addAttachments(string $id, UpdateAttachmentsSupplierRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSupplier::edit_supplier->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if (!Supplier::find($id)) {
            return response()->json([
                'message' => __('Supplier not found'),
                'status' => false,
            ], 404);
        } else {

            $this->supplierService->addAttachments($id, $request);
        }
        return response()->json([
            'message' => __('Attachments added Successfully'),
            'status' => true,
        ], 200);
    }
}
