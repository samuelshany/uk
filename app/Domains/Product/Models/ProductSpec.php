<?php

namespace App\Domains\Product\Models;

use App\Domains\Tax\Models\Tax;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use PhpOffice\PhpSpreadsheet\Calculation\Category;


class ProductSpec extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function Products()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
