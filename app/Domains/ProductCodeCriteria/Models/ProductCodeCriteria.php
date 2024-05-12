<?php

namespace App\Domains\ProductCodeCriteria\Models;

use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductCodeCriteria extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'product_code_criteria';

    protected $fillable = [
        'type',
        'delimiter',
        'supplier',
        'supplier_delimiter_position',
        'category',
        'category_delimiter_position',
        'brand',
        'brand_delimiter_position',
        'unitType',
        'unitType_delimiter_position',
        'start_index',
        'creator_id'
    ];
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

}
