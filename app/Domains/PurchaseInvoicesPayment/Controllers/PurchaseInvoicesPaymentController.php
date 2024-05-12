<?php

namespace App\Domains\PurchaseInvoicesPayment\Controllers;

use App\Domains\PurchaseInvoicesPayment\Models\EnumPermissionPurchaseInvoicesPayment;
use App\Domains\PurchaseInvoicesPayment\Request\StorePurchaseInvoicesPaymentRequest;
use App\Domains\PurchaseInvoicesPayment\Request\UpdatePurchaseInvoicesPaymentRequest;
use App\Domains\PurchaseInvoicesPayment\Resources\PurchaseInvoicesPaymentResource;
use App\Domains\PurchaseInvoicesPayment\Services\PurchaseInvoicesPaymentService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Http\Request;

class PurchaseInvoicesPaymentController extends Controller
{
    public function __construct(private PurchaseInvoicesPaymentService $PurchaseInvoicesPaymentService)
    {
    }
    public function findById($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoicesPayment::view_purchase_invoices_payments->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PurchaseInvoicesPaymentResource($this->PurchaseInvoicesPaymentService->findById($id));
    }

    public function list()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoicesPayment::view_purchase_invoices_payments->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return PurchaseInvoicesPaymentResource::collection($this->PurchaseInvoicesPaymentService->list());
    }

    public function update($id, UpdatePurchaseInvoicesPaymentRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoicesPayment::edit_purchase_invoices_payment->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->PurchaseInvoicesPaymentService->update($id, $request);

        return response()->json([
            'message' => __('PurchaseInvoicesPayment information updated successfully!'),
            'status' => true,
        ], 200);
    }

    public function collectPayment($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionPurchaseInvoicesPayment::edit_purchase_invoices_payment->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $collected = $this->PurchaseInvoicesPaymentService->collect($id);

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
