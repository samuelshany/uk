<?php

namespace App\Domains\Purchase\Models;

use App\Domains\Account\Models\Account;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Product\Models\Product;
use App\Domains\Stock\Models\Stock;
use App\Domains\Tax\Models\Tax;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class Purchase extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $fillable = [
        'quantity',
        'total',
        'discount',
        'date',
        'invoice_number',
        'creator_id',
        'stock_id',
        'payment_type_id',
        'account_id',
        'collection_date',
    ];
    protected $table = 'purchases';
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
    public function products()
    {
        return $this->belongsToMany(Product::class, 'purchase_products', 'purchase_id', 'product_id')
            ->withPivot('quantity', 'discount')->withTimestamps();
    }
    //    public function taxes()
    //    {
    //        return $this->belongsToMany(Tax::class, 'purchase_taxes', 'purchase_id', 'tax_id')->withTimestamps();
    //    }
    public function stock()
    {
        return $this->belongsTo(Stock::class);
    }
    public function purchasable(): MorphTo
    {
        return $this->morphTo();
    }
    public function paymentType()
    {
        return $this->belongsTo(PaymentType::class);
    }

    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}
