<?php

namespace App\Domains\SalesOrder\Models;


enum EnumPermissionSalesOrder: string
{

    case create_sales_order = 'Create SalesOrder';
    case edit_sales_order = 'Edit SalesOrder';
    case delete_sales_order = 'Delete SalesOrder';
    case view_sales_orders = 'View SalesOrders';

}
