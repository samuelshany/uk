<?php

namespace App\Domains\FixedAsset\Controllers;


use App\Domains\FixedAsset\Models\EnumPermissionFixedAsset;
use App\Domains\FixedAsset\Request\StoreFixedAssetRequest;
use App\Domains\FixedAsset\Request\UpdateFixedAssetRequest;
use App\Domains\FixedAsset\Resources\FixedAssetParentsResource;
use App\Domains\FixedAsset\Resources\FixedAssetResource;
use App\Domains\FixedAsset\Services\FixedAssetService;
use App\Domains\FixedAsset\Request\ImportFixedAssetRequest;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class FixedAssetController extends Controller
{
    public function __construct(private FixedAssetService $FixedAssetService)
    {
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::view_FixedAssets->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return FixedAssetResource::collection($this->FixedAssetService->list());
    }
    public function parents()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::view_FixedAssets->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return FixedAssetParentsResource::collection($this->FixedAssetService->parents());
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::view_FixedAssets->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new FixedAssetResource($this->FixedAssetService->findById($id));
    }

    public function create(StoreFixedAssetRequest $request)
    {

        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::create_FixedAsset->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->FixedAssetService->create($request);
        return response()->json([
            'message' => __('Asset Created Successfully'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateFixedAssetRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::edit_FixedAsset->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->FixedAssetService->update($id, $request);
        return response()->json([
            'message' => __('Asset Updated Successfully'),
            'status' => true,
        ], 200);
    }
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::delete_FixedAsset->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->FixedAssetService->delete($id);
        return response()->json([
            'message' => __('Asset Deleted Successfully'),
            'status' => true,
        ], Response::HTTP_OK);
    }

    public function exportFixedAssetsAccount()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::export_FixedAssets->value,'api'),Response::HTTP_FORBIDDEN, '403 Forbidden');
        return $this->FixedAssetService->exportFixedAssetsAccount();
    }

    public function exportExample()
    {
     abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::export_FixedAssets->value, 'api'),Response::HTTP_FORBIDDEN, '403 Forbidden');
               


        return response()->json([
            'file_path' => url('/fixed-asset-example-import.xlsx'),
        ]);
    }
    
    public function import(ImportFixedAssetRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFixedAsset::import_FixedAssets->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $import = $this->FixedAssetService->import();
        if (count($import->importErrors) > 0) {
            return response()->json( $import->importErrors)->setStatusCode(400);
        }
        return response()->json([
            'message' => __('messages.imported_successfully'),
            'status' => true,
        ], 200);
    }

} //End Of Controller
