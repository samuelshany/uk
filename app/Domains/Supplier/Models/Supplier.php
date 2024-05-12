<?php

namespace App\Domains\Supplier\Models;

use App\Domains\Account\Models\Account;
use App\Domains\CashManagment\Models\CashManagment;
use App\Domains\Currency\Models\Currency;
use App\Domains\Product\Models\Product;
use App\Domains\Project\Models\Project;
use App\Domains\Purchase\Models\Purchase;
use App\Domains\Tax\Models\Tax;
use App\Domains\Vendor\Models\Address;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class Supplier extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, SoftDeletes;
    protected $fillable = [
        'name',
        'email',
        'contact',
        'code',
        'parent_account_id',
        'account_id',
        'currency_id',
        'address_id',
        'billing_address_id',
        'tax_id',
        'prefix',
        //        'address_id',
    ];
    //    public function address()
//    {
//        return $this->belongsTo(Address::class);
//    }

    public function parent()
    {
        return $this->belongsTo(Account::class, 'parent_account_id');
    }
    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id');
    }
    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }
    public function tax()
    {
        return $this->belongsTo(Tax::class, 'tax_id');
    }

    public function purchase(): MorphOne
    {
        return $this->morphOne(Purchase::class, 'purchasable');
    }
    public function cash()
    {
        return $this->morphMany(CashManagment::class, 'cashable');
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(Address::class, 'address_id');
    }
    public function billingAddress(): BelongsTo
    {
        return $this->belongsTo(Address::class, 'billing_address_id');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_suppliers', 'product_id', 'supplier_id');
    }

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'project_suppliers','supplier_id');
    }
}
