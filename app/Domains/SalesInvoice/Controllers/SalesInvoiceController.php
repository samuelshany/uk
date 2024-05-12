<?php

namespace App\Domains\SalesInvoice\Controllers;

use App\Domains\Purchase\Models\Purchase;
use App\Domains\SalesInvoice\Models\EnumPermissionSalesInvoice;
use App\Domains\SalesInvoice\Request\UpdateSalesInvoiceRequest;
use App\Domains\SalesInvoice\Resources\SalesInvoiceDatesResource;
use App\Domains\SalesInvoice\Resources\SalesInvoiceDetailsResource;
use App\Domains\SalesInvoice\Resources\SalesInvoiceResource;
use App\Domains\SalesInvoice\Services\SalesInvoiceService;
use App\Domains\SalesInvoicesPayment\Resources\SalesInvoicesPaymentResource;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class SalesInvoiceController extends Controller
{
    public function __construct(private SalesInvoiceService $SalesInvoiceService)
    {
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoice::view_sales_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new SalesInvoiceResource($this->SalesInvoiceService->findById($id));
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoice::view_sales_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return SalesInvoiceResource::collection($this->SalesInvoiceService->list());
    }
    public function listInvoiceDetails($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoice::view_sales_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new SalesInvoiceDetailsResource($this->SalesInvoiceService->listInvoiceDetails($id));
    }
    public function listInvoiceDates($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoice::view_sales_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new SalesInvoiceDatesResource($this->SalesInvoiceService->listInvoiceDates($id));
    }

    /*     public function delete($id)
        {
            abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoice::delete_sales_invoice->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
            $this->SalesInvoiceService->delete($id);
            return response()->json([
                'message' => __('Sales Invoice deleted successfully!'),
                'status' => true,
            ], 200);
        }
     */

    public function update($id, UpdateSalesInvoiceRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoice::edit_sales_invoice->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $SalesInvoice = $this->SalesInvoiceService->findById($id);
        $totalAmount = collect(request()->details)->sum('amount');
        if (($totalAmount != $SalesInvoice->total) && $totalAmount > 0) {
            throw new \RuntimeException("Total payments not equal invoice total amount");
        }

        $updated = $this->SalesInvoiceService->update($id, $request);

        if (!$updated) {
            return response()->json([
                'message' => __('Can not update Invoice payment!'),
                'status' => false,
            ], 400);
        }

        return response()->json([
            'message' => __('Sales Invoice is updated successfully!'),
            'status' => true,
        ], 200);
    }

    public function invoicePayments($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionSalesInvoice::view_sales_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return SalesInvoicesPaymentResource::collection($this->SalesInvoiceService->invoiceInvoicePayments($id));
    }

}
