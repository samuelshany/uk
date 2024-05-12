<?php

namespace App\Domains\DownpaymentOption\Models;


enum EnumPermissionDownpaymentOption: string
{

    case create_downpayment_option = 'Create Downpayment Option';
    case edit_downpayment_option = 'Edit Downpayment Option';
    case delete_downpayment_option = 'Delete Downpayment Option';
    case view_downpayment_options = 'View Downpayment Options';
}
