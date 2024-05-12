<?php

namespace App\Domains\PurchaseInvoice\Controllers;

use App\Domains\Purchase\Models\Purchase;
use App\Domains\PurchaseInvoice\Models\EnumPermissionPurchaseInvoice;
use App\Domains\PurchaseInvoice\Request\UpdatePurchaseInvoiceRequest;
use App\Domains\PurchaseInvoice\Resources\PurchaseInvoiceDatesResource;
use App\Domains\PurchaseInvoice\Resources\PurchaseInvoiceDetailsResource;
use App\Domains\PurchaseInvoice\Resources\PurchaseInvoiceResource;
use App\Domains\PurchaseInvoice\Services\PurchaseInvoiceService;
use App\Domains\PurchaseInvoicesPayment\Resources\PurchaseInvoicesPaymentResource;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class PurchaseInvoiceController extends Controller
{
    public function __construct(private PurchaseInvoiceService $purchaseInvoiceService)
    {
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoice::view_purchase_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new PurchaseInvoiceResource($this->purchaseInvoiceService->findById($id));
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoice::view_purchase_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return PurchaseInvoiceResource::collection($this->purchaseInvoiceService->list());
    }
    public function listInvoiceDetails($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoice::view_purchase_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new PurchaseInvoiceDetailsResource($this->purchaseInvoiceService->listInvoiceDetails($id));
    }
    public function listInvoiceDates($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoice::view_purchase_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new PurchaseInvoiceDatesResource($this->purchaseInvoiceService->listInvoiceDates($id));
    }

    /*     public function delete($id)
        {
            abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoice::delete_purchase_invoice->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
            $this->purchaseInvoiceService->delete($id);
            return response()->json([
                'message' => __('Purchase Invoice deleted successfully!'),
                'status' => true,
            ], 200);
        }
     */

    public function update($id, UpdatePurchaseInvoiceRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoice::edit_purchase_invoice->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $purchaseInvoice = $this->purchaseInvoiceService->findById($id);
        $totalAmount = collect(request()->details)->sum('amount');
        if (($totalAmount != $purchaseInvoice->total) && $totalAmount > 0) {
            throw new \RuntimeException("Total payments not equal invoice total amount");
        }

        $updated = $this->purchaseInvoiceService->update($id, $request);

        if (!$updated) {
            return response()->json([
                'message' => __('Can not update Invoice payment!'),
                'status' => false,
            ], 400);
        }else if($updated!==true) {
            return response()->json([
                'message' => __($updated),
                'status' => false,
            ], 402);

        }

        return response()->json([
            'message' => __('Purchase Invoice is updated successfully!'),
            'status' => true,
        ], 200);
    }

    public function invoicePayments($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoice::view_purchase_invoices->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return PurchaseInvoicesPaymentResource::collection($this->purchaseInvoiceService->invoiceInvoicePayments($id));
    }

}
