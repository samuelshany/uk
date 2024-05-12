<?php

namespace App\Domains\SalesInvoice\Models;


enum EnumPermissionSalesInvoice: string
{

    case create_sales_invoice = 'Create Sales Invoice';
    case edit_sales_invoice = 'Edit Sales Invoice';
    case delete_sales_invoice = 'Delete Sales Invoice';
    case view_sales_invoices = 'View Sales Invoices';
}
