<?php

namespace App\Domains\PurchaseRequest\Models;


enum EnumPermissionPurchaseOrder: string
{

    case notify_suppliers = 'Notify Suppliers';
    case view_purchase_orders = 'View PurchaseOrder';

}
