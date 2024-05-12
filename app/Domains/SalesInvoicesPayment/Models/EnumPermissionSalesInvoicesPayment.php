<?php

namespace App\Domains\SalesInvoicesPayment\Models;


enum EnumPermissionSalesInvoicesPayment: string
{

    case create_sales_invoices_payment = 'Create SalesInvoicesPayment';
    case edit_sales_invoices_payment = 'Edit SalesInvoicesPayment';
    case delete_sales_invoices_payment = 'Delete SalesInvoicesPayment';
    case view_sales_invoices_payments = 'View SalesInvoicesPayments';

}
