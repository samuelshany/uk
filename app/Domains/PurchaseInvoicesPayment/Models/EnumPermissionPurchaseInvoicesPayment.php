<?php

namespace App\Domains\PurchaseInvoicesPayment\Models;


enum EnumPermissionPurchaseInvoicesPayment: string
{

    case create_purchase_invoices_payment = 'Create PurchaseInvoicesPayment';
    case edit_purchase_invoices_payment = 'Edit PurchaseInvoicesPayment';
    case delete_purchase_invoices_payment = 'Delete PurchaseInvoicesPayment';
    case view_purchase_invoices_payments = 'View PurchaseInvoicesPayments';

}
