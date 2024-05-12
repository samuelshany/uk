<?php

namespace App\Domains\ConstructionName\Controllers;

use App\Domains\ConstructionName\Models\EnumPermissionConstructionName;
use App\Domains\ConstructionName\Request\UpdateConstructionNameRequest;
use App\Domains\ConstructionName\Resources\ConstructionNameDatesResource;
use App\Domains\ConstructionName\Resources\ConstructionNameDetailsResource;
use App\Domains\ConstructionName\Resources\ConstructionNameResource;
use App\Domains\ConstructionName\Services\ConstructionNameService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class ConstructionNameController extends Controller
{
    public function __construct(private ConstructionNameService $constructionNameService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionConstructionName::view_construction_names->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new ConstructionNameResource($this->constructionNameService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionConstructionName::view_construction_names->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return ConstructionNameResource::collection($this->constructionNameService->list());
    }

    public function store( UpdateConstructionNameRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionConstructionName::view_construction_names->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->constructionNameService->store($request);

        return response()->json([
            'message' => __('Construction Name is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateConstructionNameRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionConstructionName::edit_construction_name->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->constructionNameService->update($id,$request);

        return response()->json([
            'message' => __('Construction Name is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionConstructionName::delete_construction_name->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->constructionNameService->delete($id);
        return response()->json([
            'message' => __('Construction Name deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
