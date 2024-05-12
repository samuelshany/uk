<?php

namespace App\Domains\ProjectPhase\Controllers;

use App\Domains\ProjectPhase\Models\EnumPermissionProjectPhase;
use App\Domains\ProjectPhase\Request\UpdateProjectPhaseRequest;
use App\Domains\ProjectPhase\Resources\ProjectPhaseResource;
use App\Domains\ProjectPhase\Services\ProjectPhaseService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class ProjectPhaseController extends Controller
{
    public function __construct(private ProjectPhaseService $projectPhaseService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectPhase::view_project_phases->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new ProjectPhaseResource($this->projectPhaseService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectPhase::view_project_phases->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return ProjectPhaseResource::collection($this->projectPhaseService->list());
    }

    public function store( UpdateProjectPhaseRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectPhase::create_project_phase->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->projectPhaseService->store($request);

        return response()->json([
            'message' => __('Project phase is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateProjectPhaseRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectPhase::edit_project_phase->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->projectPhaseService->update($id,$request);

        return response()->json([
            'message' => __('Project phase is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectPhase::delete_project_phase->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->projectPhaseService->delete($id);
        return response()->json([
            'message' => __('Project phase deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
