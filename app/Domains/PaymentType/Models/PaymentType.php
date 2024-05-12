<?php

namespace App\Domains\PaymentType\Models;

use App\Domains\Account\Models\Account;
use App\Domains\CashManagment\Models\CashManagment;
use App\Domains\Purchase\Models\Purchase;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class PaymentType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'is_fixed',
        'payment_type'
    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

    public function cashManagements()
    {
        return $this->hasMany(CashManagment::class);
    }

    public function accounts()
    {
        return $this->belongsToMany(Account::class);
        // return $this->belongsToMany(Account::class)->withPivot('is_default');
    }
}
