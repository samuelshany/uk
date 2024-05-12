<?php

namespace App\Domains\RequestQuotation\Models;


enum EnumPermissionRequestQuotation: string
{

    case create_request_quotion = 'Create Quotation';
    case edit_request_quotion = 'Edit Quotation';
    case delete_request_quotion = 'Delete Quotation';
    case view_prequest_quotions = 'View Quotation';
}
