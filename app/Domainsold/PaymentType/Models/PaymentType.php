<?php

namespace App\Domains\PaymentType\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class PaymentType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name'
    ];
}
