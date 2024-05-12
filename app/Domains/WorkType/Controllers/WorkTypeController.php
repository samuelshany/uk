<?php

namespace App\Domains\WorkType\Controllers;

use App\Domains\WorkType\Models\EnumPermissionWorkType;
use App\Domains\WorkType\Request\UpdateWorkTypeRequest;
use App\Domains\WorkType\Resources\WorkTypeResource;
use App\Domains\WorkType\Services\WorkTypeService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class WorkTypeController extends Controller
{
    public function __construct(private WorkTypeService $workTypeService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWorkType::view_work_types->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new WorkTypeResource($this->workTypeService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWorkType::view_work_types->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return WorkTypeResource::collection($this->workTypeService->list());
    }

    public function store( UpdateWorkTypeRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWorkType::create_work_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->workTypeService->store($request);

        return response()->json([
            'message' => __('Work type is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateWorkTypeRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWorkType::edit_work_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->workTypeService->update($id,$request);

        return response()->json([
            'message' => __('Work type is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionWorkType::delete_work_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->workTypeService->delete($id);
        return response()->json([
            'message' => __('Work type deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
