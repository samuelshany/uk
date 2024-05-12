<?php

namespace App\Domains\RequestQuotation\Controllers;

use App\Domains\RequestQuotation\Models\EnumPermissionRequestQuotation;
use App\Domains\RequestQuotation\Request\UpdateRequestQuotationRequest;
use App\Domains\RequestQuotation\Resources\RequestQuotationResource;
use App\Domains\RequestQuotation\Services\RequestQuotationService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class RequestQuotationController extends Controller
{
    public function __construct(private RequestQuotationService $requestQuotationService)
    {
    }
    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionRequestQuotation::view_prequest_quotions->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
    

        return new RequestQuotationResource($this->requestQuotationService->findById($id));
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionRequestQuotation::view_prequest_quotions->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return RequestQuotationResource::collection($this->requestQuotationService->list());
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionRequestQuotation::delete_request_quotion->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->requestQuotationService->delete($id);
        return response()->json([
            'message' => __('Request Quotation deleted successfully!'),
            'status' => true,
        ], 200);
    }


    public function update($id, UpdateRequestQuotationRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionRequestQuotation::edit_request_quotion->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        $this->requestQuotationService->update($id, $request);
        return response()->json([
            'message' => __('Request Quotation is updated successfully!'),
            'status' => true,
        ], 200);
    }

    public function approvedRequestQuotation($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionRequestQuotation::edit_request_quotion->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        $success = $this->requestQuotationService->approvedRequestQuotation($id);
        if(!$success){
            return response()->json([
                'message' => __('Can not accept purchase quotation without write the total price frist'),
                'status' => false,
            ], 402);
        }
        return response()->json([
            'message' => __('Request Quotation is approved successfully!'),
            'status' => true,
        ], 202);
    }
    public function canceledRequestQuotation($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionRequestQuotation::edit_request_quotion->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        $this->requestQuotationService->canceledRequestQuotation($id);
        return response()->json([
            'message' => __('Request Quotation is canceled!'),
            'status' => true,
        ], 200);
    }


}
