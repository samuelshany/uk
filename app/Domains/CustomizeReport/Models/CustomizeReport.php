<?php

namespace App\Domains\CustomizeReport\Models;

use App\Domains\Account\Models\Account;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Product\Models\Product;
use App\Domains\Project\Models\ProjectAssignment;
use App\Domains\CustomizeReportsPayment\Models\CustomizeReportsPayment;
use App\Domains\PurchaseRequest\Models\PurchaseRequest;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class CustomizeReport extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'customize_reports';
    protected $fillable = [
        'name',
        'description',
        'creator_id',
        'editor_id',
    ];


    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }


}
