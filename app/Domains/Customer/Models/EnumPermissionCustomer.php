<?php

namespace App\Domains\Customer\Models;


enum EnumPermissionCustomer: string
{

    case create_customer = 'Create Customer';
    case edit_customer = 'Edit Customer';
    case delete_customer = 'Delete Customer';
    case view_customer = 'View Customer';
    case import_customers = 'Import Customers';
    case export_customers = 'Export Customers';

}
