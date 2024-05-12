<?php

namespace App\Domains\SalesInvoicesPayment\Models;

use App\Domains\Product\Models\Product;
use App\Domains\SalesInvoice\Models\SalesInvoice;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class SalesInvoicesPayment extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'sales_invoices_payments';

    protected $guarded = [];

    public function salesInvoice()
    {
        return $this->belongsTo(SalesInvoice::class, 'sales_invoice_id');
    }

    public function partialInvoicePayments()
    {
        return $this->hasMany(SalesInvoicesPayment::class, 'parent_id');
    }
}
