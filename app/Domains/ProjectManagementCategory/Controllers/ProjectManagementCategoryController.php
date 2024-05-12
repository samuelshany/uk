<?php

namespace App\Domains\ProjectManagementCategory\Controllers;

use App\Domains\ProjectManagementCategory\Models\EnumPermissionProjectManagementCategory;
use App\Domains\ProjectManagementCategory\Request\UpdateProjectManagementCategoryRequest;
use App\Domains\ProjectManagementCategory\Resources\ProjectManagementCategoryResource;
use App\Domains\ProjectManagementCategory\Services\ProjectManagementCategoryService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class ProjectManagementCategoryController extends Controller
{
    public function __construct(private ProjectManagementCategoryService $projectManagementCategoryService)
    {
    }
    public function findById($id)
    {
       // abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectManagementCategory::view_project_management_categories->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new ProjectManagementCategoryResource($this->projectManagementCategoryService->findById($id));
    }

    public function list()
    {
       // abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectManagementCategory::view_project_management_categories->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return ProjectManagementCategoryResource::collection($this->projectManagementCategoryService->list());
    }

    public function store( UpdateProjectManagementCategoryRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectManagementCategory::create_project_management_category->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->projectManagementCategoryService->store($request);

        return response()->json([
            'message' => __('Category is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateProjectManagementCategoryRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectManagementCategory::edit_project_management_category->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->projectManagementCategoryService->update($id,$request);

        return response()->json([
            'message' => __('Category is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionProjectManagementCategory::delete_project_management_category->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->projectManagementCategoryService->delete($id);
        return response()->json([
            'message' => __('Category deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
