<?php

namespace App\Domains\InventoryReceiptOrder\Models;

use App\Domains\Account\Models\Account;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Product\Models\Product;
use App\Domains\InventoryReceiptOrdersPayment\Models\InventoryReceiptOrdersPayment;
use App\Domains\PurchaseInvoice\Models\PurchaseInvoice;
use App\Domains\PurchaseRequest\Models\PurchaseRequest;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class InventoryReceiptOrder extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'inventory_receipt_orders';
    protected $fillable = [
        'supplier_id',
        'product_id',
        'invoice_id',
        'delivery_date',
        'notes',
        'quantity',
        'receipt_quantity',
        'total_amount',
        'total_receipt',
        'total_balance',
        'product_price',
        'reference',
        'has_next',
        'editable',
        'ready_to_confirm',
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

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function purchaseInvoice(): BelongsTo
    {
        return $this->belongsTo(PurchaseInvoice::class, 'invoice_id');
    }
}
