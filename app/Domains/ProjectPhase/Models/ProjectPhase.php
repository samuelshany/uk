<?php

namespace App\Domains\ProjectPhase\Models;

use App\Domains\Account\Models\Account;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Product\Models\Product;
use App\Domains\Project\Models\ProjectAssignment;
use App\Domains\ProjectPhasesPayment\Models\ProjectPhasesPayment;
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


class ProjectPhase extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'project_phases';
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
    public function editor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'editor_id');
    }

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(ProjectPhase::class,'project_with_phases','project_phase_id');
    }

    public function projectAssignments(): HasMany
    {
        return $this->hasMany(ProjectAssignment::class,'project_phase_id');
    }


}
