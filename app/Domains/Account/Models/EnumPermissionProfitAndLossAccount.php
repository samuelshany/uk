<?php

namespace App\Domains\Account\Models;


enum EnumPermissionProfitAndLossAccount: string
{

    case create_profit_and_loss_account = 'Create Profit And Loss Account';
    case edit_profit_and_loss_account = 'Edit Profit And Loss Account';
    case view_profit_and_loss_accounts = 'View Profit And Loss Accounts';

}
