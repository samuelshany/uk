<?php

namespace App\Domains\PurchaseInvoicesPayment\Models;

use App\Domains\Product\Models\Product;
use App\Domains\PurchaseInvoice\Models\PurchaseInvoice;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class PurchaseInvoicesPayment extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'purchase_invoices_payments';

    protected $guarded = [];

    public function purchaseInvoice()
    {
        return $this->belongsTo(PurchaseInvoice::class, 'purchase_invoice_id');
    }

    public function partialInvoicePayments()
    {
        return $this->hasMany(PurchaseInvoicesPayment::class, 'parent_id');
    }
}
