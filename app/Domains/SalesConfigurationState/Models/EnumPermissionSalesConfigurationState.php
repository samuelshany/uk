<?php

namespace App\Domains\SalesConfigurationState\Models;


enum EnumPermissionSalesConfigurationState: string
{

    case create_sales_configuration_state = 'Create Sales Configuration State';
    case edit_sales_configuration_state = 'Edit Sales Configuration State';
    case delete_sales_configuration_state = 'Delete Sales Configuration State';
    case view_sales_configuration_states = 'View Sales Configuration States';
}
