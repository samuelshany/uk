<?php

namespace App\Domains\DownpaymentOption\Controllers;

use App\Domains\DownpaymentOption\Models\EnumPermissionDownpaymentOption;
use App\Domains\DownpaymentOption\Request\UpdateDownpaymentOptionRequest;
use App\Domains\DownpaymentOption\Resources\DownpaymentOptionResource;
use App\Domains\DownpaymentOption\Services\DownpaymentOptionService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class DownpaymentOptionController extends Controller
{
    public function __construct(private DownpaymentOptionService $downpaymentOptionService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDownpaymentOption::view_downpayment_options->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new DownpaymentOptionResource($this->downpaymentOptionService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDownpaymentOption::view_downpayment_options->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return DownpaymentOptionResource::collection($this->downpaymentOptionService->list());
    }

    public function store( UpdateDownpaymentOptionRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDownpaymentOption::create_downpayment_option->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->downpaymentOptionService->store($request);

        return response()->json([
            'message' => __('Downpayment Option is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateDownpaymentOptionRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDownpaymentOption::edit_downpayment_option->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->downpaymentOptionService->update($id,$request);

        return response()->json([
            'message' => __('Downpayment Option is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionDownpaymentOption::delete_downpayment_option->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->downpaymentOptionService->delete($id);
        return response()->json([
            'message' => __('Downpayment Option deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
