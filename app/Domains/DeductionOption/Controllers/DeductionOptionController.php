<?php

namespace App\Domains\DeductionOption\Controllers;

use App\Domains\DeductionOption\Models\EnumPermissionDeductionOption;
use App\Domains\DeductionOption\Request\UpdateDeductionOptionRequest;
use App\Domains\DeductionOption\Resources\DeductionOptionResource;
use App\Domains\DeductionOption\Services\DeductionOptionService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class DeductionOptionController extends Controller
{
    public function __construct(private DeductionOptionService $deductionOptionService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDeductionOption::view_deduction_options->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new DeductionOptionResource($this->deductionOptionService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDeductionOption::view_deduction_options->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return DeductionOptionResource::collection($this->deductionOptionService->list());
    }

    public function store( UpdateDeductionOptionRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDeductionOption::create_deduction_option->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->deductionOptionService->store($request);

        return response()->json([
            'message' => __('Deduction Option is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateDeductionOptionRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDeductionOption::edit_deduction_option->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->deductionOptionService->update($id,$request);

        return response()->json([
            'message' => __('Deduction Option is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDeductionOption::delete_deduction_option->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->deductionOptionService->delete($id);
        return response()->json([
            'message' => __('Deduction Option deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
