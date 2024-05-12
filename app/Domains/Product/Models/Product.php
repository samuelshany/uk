<?php

namespace App\Domains\Product\Models;

use App\Domains\Brand\Models\Brand;
use App\Domains\Product\Models\Spec;
use App\Domains\Purchase\Models\Purchase;
use App\Domains\Stock\Models\Stock;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\Tax\Models\Tax;
use App\Domains\UnitType\Models\UnitType;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Domains\Category\Models\Category;
use App\Domains\SalesInvoice\Models\SalesInvoice;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;
    protected $hidden = ['pivot'];

    protected $fillable = [
        'code',
        'name',
        'description',
        'quantity',
        'opening_stock',
        'selling_price',
        'purchase_price',

        'creator_id',
        'category_id',
        'taxes_id',
        'unit_id',
        'brand_id',
        //'supplier_id',
    ];
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function taxes()
    {
        return $this->belongsTo(Tax::class, 'taxes_id');
    }
    public function unit()
    {
        return $this->belongsTo(UnitType::class, 'unit_id');
    }
    public function spec()
    {
        return $this->hasOne(ProductSpec::class, 'product_id');
    }

    public function purchases()
    {
        return $this->belongsToMany(Purchase::class, 'purchase_products', 'purchase_id', 'product_id')
            ->withPivot('quantity', 'discount')->withTimestamps();
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    public function suppliers()
    {
        return $this->belongsToMany(Supplier::class, 'product_suppliers', 'product_id', 'supplier_id');
    }

    public function salesInvoivces(): BelongsToMany
    {
        return $this->belongsToMany(SalesInvoice::class, 'sales_invoice_products')->withPivot(
            'quantity',
            'product_price',
            'discount_type',
            'discount_amount',
            'total'
        );
    }

    public function stocks()
    {
        return $this->hasMany(Stock::class, 'product_id');
    }
}
