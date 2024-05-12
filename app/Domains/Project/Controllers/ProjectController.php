<?php

namespace App\Domains\Project\Controllers;

use App\Domains\Purchase\Models\Purchase;
use App\Domains\Project\Models\EnumPermissionProject;
use App\Domains\Project\Request\StoreProjectAssignmentRequest;
use App\Domains\Project\Request\StoreProjectRequest;
use App\Domains\Project\Request\UpdateProjectAssignmentRequest;
use App\Domains\Project\Request\UpdateProjectRequest;
use App\Domains\Project\Resources\ProjectAssignmentResource;
use App\Domains\Project\Resources\ProjectDatesResource;
use App\Domains\Project\Resources\ProjectDetailsResource;
use App\Domains\Project\Resources\ProjectResource;
use App\Domains\Project\Services\ProjectService;
use App\Domains\ProjectPhase\Request\UpdateProjectPhaseRequest;
use App\Domains\ProjectsPayment\Resources\ProjectsPaymentResource;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class ProjectController extends Controller
{
    public function __construct(private ProjectService $projectService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::view_projects->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new ProjectResource($this->projectService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::view_projects->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return ProjectResource::collection($this->projectService->list());
    }

    public function listPorjectAssignments($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::view_projects->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return ProjectAssignmentResource::collection($this->projectService->listPorjectAssignments($id));
    }

    public function findPorjectAssignment($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::view_projects->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new ProjectAssignmentResource($this->projectService->findPorjectAssignment($id));
    }

    public function exportProjectManagementPDF($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::view_projects->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $this->projectService->exportProjectManagementPDF($id);
    }
    public function exportProjectManagementPDFAr($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::view_projects->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $this->projectService->exportProjectManagementPDFAr($id);
    }

   
    

    public function store(StoreProjectRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::create_project->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->projectService->store($request);

        return response()->json([
            'message' => __('Project is added successfully!'),
            'status' => true,
        ], 200);
    }

    public function storePorjectAssignment( $id,StoreProjectAssignmentRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::create_project->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $assignment = $this->projectService->storePorjectAssignment($id,$request);

       if(!$assignment){
            return response()->json([
                'message' => __("Project assignment can't be added successfully!"),
                'status' => false,
            ], 402);
        }

        return response()->json([
            'message' => __('Project assignment is added successfully!'),
            'status' => true,
        ], 200);
    }

    public function updatePorjectAssignment( $id,UpdateProjectAssignmentRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::create_project->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $assignment = $this->projectService->updatePorjectAssignment($id,$request);

       if(!$assignment){
            return response()->json([
                'message' => __("Project assignment can't be updated successfully!"),
                'status' => false,
            ], 402);
        }

        return response()->json([
            'message' => __('Project assignment is updated successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateProjectRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::edit_project->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->projectService->update($id, $request);

        return response()->json([
            'message' => __('Project is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProject::delete_project->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->projectService->delete($id);
        
        return response()->json([
            'message' => __('Project deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
