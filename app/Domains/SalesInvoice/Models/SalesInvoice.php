<?php

namespace App\Domains\SalesInvoice\Models;

use App\Domains\Account\Models\Account;
use App\Domains\Currency\Models\Currency;
use App\Domains\Customer\Models\Customer;
use App\Domains\InventoryDeliveryOrder\Models\InventoryDeliveryOrder;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Product\Models\Product;
use App\Domains\SalesInvoicesPayment\Models\SalesInvoicesPayment;
use App\Domains\SalesOrderTracking\Models\SalesOrderTracking;
use App\Domains\Tax\Models\Tax;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class SalesInvoice extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'sales_invoices';
    protected $fillable = [
        'invoice_number',
        'state_id',
        'creator_id',
        'currency_id',
        'tax_id',
        'tax_amount',
        'total',
        'status',
        'payment_type_id',
        'payment_account_id',
        'is_credit',
        'customer_id',
        'creator_id',
        'delivery_date',
        'notes'
    ];

    public function salesInvoiceProducts(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'sales_invoice_products')
            ->withPivot('quantity', 'product_price', 'discount_type', 'discount_amount', 'total','product_id');
    }
    public function tax(): BelongsTo
    {
        return $this->belongsTo(Tax::class, 'tax_id');
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customer_id');
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

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }

    public function salesInvoicePayments()
    {
        return $this->hasMany(SalesInvoicesPayment::class, 'sales_invoice_id');
    }

    public function orderTracking():HasOne
    {
        return $this->hasOne(SalesOrderTracking::class, 'sales_invoice_id');
    }

    public function inventoryDeliveryOrder(): HasMany
    {
        return $this->hasMany(InventoryDeliveryOrder::class, 'invoice_id');
    }
}
