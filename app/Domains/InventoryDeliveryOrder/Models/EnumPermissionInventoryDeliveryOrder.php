<?php

namespace App\Domains\InventoryDeliveryOrder\Models;


enum EnumPermissionInventoryDeliveryOrder: string
{

    //case create_inventory_delivery_order = 'Create Inventory Delivery Order';
    case edit_inventory_delivery_order = 'Edit Inventory Delivery Order';
    //case delete_inventory_delivery_order = 'Delete Inventory Delivery Order';
    case view_inventory_delivery_orders = 'View Inventory Delivery Order';
}
