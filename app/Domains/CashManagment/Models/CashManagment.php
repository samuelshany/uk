<?php

namespace App\Domains\CashManagment\Models;

use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class CashManagment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'date',
        'description',
        'amount',
        'payment_type_id',
        'payment_account_id',
        'type',
        'account_id',
        'cashable_id',
        'creator_id'
    ];
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function account()
    {
        return $this->belongsTo(Account::class, 'payment_account_id');
    }
/* 
    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id');
    } */
    public function cashable()
    {
        return $this->belongsTo(Account::class, 'cashable_id');
    }

    public function paymentType()
    {
        return $this->belongsTo(PaymentType::class);
    }
} //End Of Model
