<?php

namespace App\Domains\Customer\Models;

use App\Domains\Account\Models\Account;
use App\Domains\CashManagment\Models\CashManagment;
use App\Domains\Currency\Models\Currency;
use App\Domains\Project\Models\Project;
use App\Domains\Purchase\Models\Purchase;
use App\Domains\User\Models\User;
use App\Domains\Vendor\Models\Address;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class Customer extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, SoftDeletes;

    protected $fillable = [
        'code',
        'customer_number',
        'name',
        'contact',
        'email',
        'account_id',
        'parent_account_id',
        'address_id',
        'credit_limit',
        'billing_address_id',
        'creator_id',
        'assign_user_id',
        'available_credit',
        'discount'

    ];

    public function parent()
    {
        return $this->belongsTo(Account::class, 'parent_account_id');
    }

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id');
    }

    public function currency() {
        return $this->belongsTo(Currency::class);
    }
    
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function assignTo()
    {
        return $this->belongsTo(User::class,'assign_user_id');
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function billingAddress()
    {
        return $this->belongsTo(Address::class,'billing_address_id');
    }
    public function purchase(): MorphOne
    {
        return $this->morphOne(Purchase::class, 'purchasable');
    }
    public function cash()
    {
        return $this->morphMany(CashManagment::class, 'cashable');
    }
    public function currencies(): BelongsToMany
    {
        return $this->belongsToMany(Currency::class,'customer_currencies','customer_id');
    }

    public function customer(): HasOne
    {
        return $this->hasOne(Project::class, 'client_information_id');
    }

}
