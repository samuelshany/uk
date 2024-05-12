<?php

namespace App\Domains\PurchaseInvoice\Models;

use App\Domains\Account\Models\Account;
use App\Domains\InventoryReceiptOrder\Models\InventoryReceiptOrder;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Product\Models\Product;
use App\Domains\PurchaseInvoicesPayment\Models\PurchaseInvoicesPayment;
use App\Domains\PurchaseRequest\Models\PurchaseRequest;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class PurchaseInvoice extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'purchase_invoices';
    protected $fillable = [
        'invoice_number',
        'product_id',
        'quantity',
        'supplier_id',
        'total',
        'notes',
        'status',
        'payment_type_id',
        'payment_account_id',
        'is_credit',
        'creator_id',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }


    public function paymentType(): BelongsTo
    {
        return $this->belongsTo(PaymentType::class, 'payment_type_id');
    }

    public function accountPayment(): BelongsTo
    {
        return $this->belongsTo(Account::class, 'payment_account_id');
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function purchaseInvoicePayments()
    {
        return $this->hasMany(PurchaseInvoicesPayment::class, 'purchase_invoice_id');
    }

    public function inventoryReceiptOrder(): HasMany
    {
        return $this->hasMany(InventoryReceiptOrder::class, 'invoice_id');
    }
}
