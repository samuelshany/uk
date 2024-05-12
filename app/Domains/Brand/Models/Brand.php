<?php

namespace App\Domains\Brand\Models;

use App\Domains\Product\Models\Product;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Brand extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'name',
        'prefix',
        'description',
        'creator_id'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
