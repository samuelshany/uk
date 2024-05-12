<?php

namespace App\Domains\Project\Models;

use App\Domains\Clause\Models\Clause;
use App\Domains\ConstructionName\Models\ConstructionName;
use App\Domains\Customer\Models\Customer;
use App\Domains\DeductionOption\Models\DeductionOption;
use App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory;
use App\Domains\ProjectPhase\Models\ProjectPhase;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\Unit\Models\Unit;
use App\Domains\User\Models\User;
use App\Domains\WorkType\Models\WorkType;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class WorkClause extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'work_clauses';
    protected $fillable = [
        'quantity',
        'previous_amount',
        'current_amount',
        'total_amount',
        'ratio',
        'notes',
        'price',
        'total_price',
        'project_assignment_id',
        'clause_id',
        'unit_id',
        'project_management_category_id'
    ];

 

    public function projectAssignment(): BelongsTo
    {
        return $this->belongsTo(ProjectAssignment::class,'project_assignment_id');
    }
    public function clause(): BelongsTo
    {
        return $this->belongsTo(Clause::class,'clause_id')->withTrashed();
    }
    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class, 'unit_id')->withTrashed();
    }
    public function projectManagementCategory(): BelongsTo
    {
        return $this->belongsTo(ProjectManagementCategory::class, 'project_management_category_id')->withTrashed();
    }

}
