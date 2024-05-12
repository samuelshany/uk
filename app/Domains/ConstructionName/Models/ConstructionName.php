<?php

namespace App\Domains\ConstructionName\Models;

use App\Domains\Account\Models\Account;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Product\Models\Product;
use App\Domains\ConstructionNamesPayment\Models\ConstructionNamesPayment;
use App\Domains\Project\Models\Project;
use App\Domains\Project\Models\ProjectAssignment;
use App\Domains\PurchaseRequest\Models\PurchaseRequest;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class ConstructionName extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'construction_names';
    protected $fillable = [
        'name',
        'description',
        'parent_account_id',
        'account_id',
        'creator_id',
        'editor_id',
    ];


    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function editor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'editor_id');
    }
    public function parentAccount(): BelongsTo
    {
        return $this->belongsTo(Account::class, 'parent_account_id');
    }

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class, 'account_id');
    }

    
    public function projectAssignments(): HasMany
    {
        return $this->hasMany(ProjectAssignment::class,'construction_name_id');
    }

    public function project(): HasMany
    {
        return $this->hasMany(Project::class,'construction_name_id');
    }


}
