<?php

namespace App\Domains\PurchaseInvoice\Models;


enum EnumPermissionPurchaseInvoice: string
{

    case create_purchase_invoice = 'Create Purchase Invoice';
    case edit_purchase_invoice = 'Edit Purchase Invoice';
    case delete_purchase_invoice = 'Delete Purchase Invoice';
    case view_purchase_invoices = 'View Purchase Invoice';
}
