<?php

namespace App\Domains\Purchase\Models;


enum EnumPermissionSale: string
{

    case create_sale = 'Create Sale';
    case edit_sale = 'Edit Sale';
    case delete_sale = 'Delete Sale';
    case view_sales = 'View Sales';

}
