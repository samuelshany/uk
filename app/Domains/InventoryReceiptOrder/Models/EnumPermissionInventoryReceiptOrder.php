<?php

namespace App\Domains\InventoryReceiptOrder\Models;


enum EnumPermissionInventoryReceiptOrder: string
{

    //case create_inventory_receipt_order = 'Create Inventory Receipt Order';
    case edit_inventory_receipt_order = 'Edit Inventory Receipt Order';
    //case delete_inventory_receipt_order = 'Delete Inventory Receipt Order';
    case view_inventory_receipt_orders = 'View Inventory Receipt Order';
}
