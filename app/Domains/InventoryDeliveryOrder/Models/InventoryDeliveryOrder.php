<?php

namespace App\Domains\InventoryDeliveryOrder\Models;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Product\Models\Product;
use App\Domains\InventoryDeliveryOrdersPayment\Models\InventoryDeliveryOrdersPayment;
use App\Domains\PurchaseInvoice\Models\PurchaseInvoice;
use App\Domains\PurchaseRequest\Models\PurchaseRequest;
use App\Domains\SalesInvoice\Models\SalesInvoice;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class InventoryDeliveryOrder extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'inventory_delivery_orders';
    protected $fillable = [
        'customer_id',
        'product_id',
        'invoice_id',
        'reference',
        'editable',
        'has_next',
        'ready_to_confirm',
        'delivery_date',
        'notes',
        'quantity',
        'delivery_quantity',
        'total_amount',
        'total_delivery',
        'total_balance',
        'product_price',
        'creator_id',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function salesInvoice(): BelongsTo
    {
        return $this->belongsTo(SalesInvoice::class, 'invoice_id');
    }
}
