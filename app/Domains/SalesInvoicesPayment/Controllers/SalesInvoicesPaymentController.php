<?php

namespace App\Domains\SalesInvoicesPayment\Controllers;

use App\Domains\SalesInvoicesPayment\Models\EnumPermissionSalesInvoicesPayment;
use App\Domains\SalesInvoicesPayment\Request\StoreSalesInvoicesPaymentRequest;
use App\Domains\SalesInvoicesPayment\Request\UpdateSalesInvoicesPaymentRequest;
use App\Domains\SalesInvoicesPayment\Resources\SalesInvoicesPaymentResource;
use App\Domains\SalesInvoicesPayment\Services\SalesInvoicesPaymentService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class SalesInvoicesPaymentController extends Controller
{
    public function __construct(private SalesInvoicesPaymentService $salesInvoicesPaymentService)
    {
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoicesPayment::view_sales_invoices_payments->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SalesInvoicesPaymentResource($this->salesInvoicesPaymentService->findById($id));
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoicesPayment::view_sales_invoices_payments->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return SalesInvoicesPaymentResource::collection($this->salesInvoicesPaymentService->list());
    }

    public function update($id, UpdateSalesInvoicesPaymentRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoicesPayment::edit_sales_invoices_payment->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->salesInvoicesPaymentService->update($id, $request);

        return response()->json([
            'message' => __('SalesInvoicesPayment information updated successfully!'),
            'status' => true,
        ], 200);
    }

    public function collectPayment($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoicesPayment::edit_sales_invoices_payment->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $collected = $this->salesInvoicesPaymentService->collect($id);

        if (!$collected) {
            return response()->json([
                'message' => __('Can not collect, remain amount must equal total amount'),
                'status' => false,
            ], 400);
        }

        return response()->json([
            'message' => __('Collected successfully!'),
            'status' => true,
        ], 200);
    }

}
