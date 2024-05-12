<?php

namespace App\Domains\SalesOrderTracking\Models;


enum EnumPermissionSalesOrderTracking: string
{

    case create_sales_order_tracking = 'Create Sales Order Tracking';
    case edit_sales_order_tracking = 'Edit Sales Order Tracking';
    case delete_sales_order_tracking = 'Delete Sales Order Tracking';
    case view_sales_order_trackings = 'View Sales Order Trackings';
}
