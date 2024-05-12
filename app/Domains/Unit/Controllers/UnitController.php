<?php

namespace App\Domains\Unit\Controllers;

use App\Domains\Unit\Models\EnumPermissionUnit;
use App\Domains\Unit\Request\UpdateUnitRequest;
use App\Domains\Unit\Resources\UnitResource;
use App\Domains\Unit\Services\UnitService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class UnitController extends Controller
{
    public function __construct(private UnitService $unitService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionUnit::view_units->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new UnitResource($this->unitService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionUnit::view_units->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return UnitResource::collection($this->unitService->list());
    }

    public function store( UpdateUnitRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionUnit::create_unit->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->unitService->store($request);

        return response()->json([
            'message' => __('Unit is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateUnitRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionUnit::edit_unit->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->unitService->update($id,$request);

        return response()->json([
            'message' => __('Unit is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionUnit::delete_unit->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->unitService->delete($id);
        return response()->json([
            'message' => __('Unit deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
