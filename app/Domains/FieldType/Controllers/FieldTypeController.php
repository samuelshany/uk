<?php

namespace App\Domains\FieldType\Controllers;

use App\Domains\FieldType\Models\EnumPermissionFieldType;
use App\Domains\FieldType\Request\UpdateFieldTypeRequest;
use App\Domains\FieldType\Resources\FieldTypeResource;
use App\Domains\FieldType\Services\FieldTypeService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class FieldTypeController extends Controller
{
    public function __construct(private FieldTypeService $fieldTypeService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFieldType::view_field_types->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new FieldTypeResource($this->fieldTypeService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFieldType::view_field_types->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return FieldTypeResource::collection($this->fieldTypeService->list());
    }

    public function store( UpdateFieldTypeRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFieldType::create_field_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->fieldTypeService->store($request);

        return response()->json([
            'message' => __('Field type is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateFieldTypeRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFieldType::edit_field_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->fieldTypeService->update($id,$request);

        return response()->json([
            'message' => __('Field type is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionFieldType::delete_field_type->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->fieldTypeService->delete($id);
        return response()->json([
            'message' => __('Field type deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
