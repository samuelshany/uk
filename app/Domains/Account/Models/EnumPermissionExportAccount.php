<?php

namespace App\Domains\Account\Models;


enum EnumPermissionExportAccount: string
{

    case export_accounts = 'Export Accounts';
    case export_charts_of_accounts = 'Export Charts Of Account';

}
