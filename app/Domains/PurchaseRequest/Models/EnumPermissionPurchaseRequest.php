<?php

namespace App\Domains\PurchaseRequest\Models;


enum EnumPermissionPurchaseRequest: string
{

    case create_purchase_request = 'Create PurchaseRequest';
    case edit_purchase_request = 'Edit PurchaseRequest';
    case delete_purchase_request = 'Delete PurchaseRequest';
    case view_purchase_requests = 'View PurchaseRequests';

}
