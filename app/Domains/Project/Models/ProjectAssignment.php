<?php

namespace App\Domains\Project\Models;

use App\Domains\ConstructionName\Models\ConstructionName;
use App\Domains\Customer\Models\Customer;
use App\Domains\DeductionOption\Models\DeductionOption;
use App\Domains\ProjectPhase\Models\ProjectPhase;
use App\Domains\Supplier\Models\Supplier;
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


class ProjectAssignment extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'project_assignments';
    protected $fillable = [
        'project_id',
        'project_phase_id',
        'construction_name_id',
        'work_type_id',
        'deduction_options',
        'reference_number',
        'total',
        'total_options',
        'total_due',
    ];

 

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class,'project_id');
    }
    public function projectPhase(): BelongsTo
    {
        return $this->belongsTo(ProjectPhase::class,'project_phase_id')->withTrashed();
    }
    public function constructionName(): BelongsTo
    {
        return $this->belongsTo(ConstructionName::class, 'construction_name_id')->withTrashed();
    }
    public function workType(): BelongsTo
    {
        return $this->belongsTo(WorkType::class, 'work_type_id')->withTrashed();
    }

    public function workClauses(): HasMany
    {
        return $this->hasMany(WorkClause::class,'project_assignment_id');
    }

    public function deductionOptions(): BelongsToMany
    {
        return $this->belongsToMany(DeductionOption::class,'project_assignment_with_options')->withPivot('journal_entry_detail_id','value')->withTrashed();
    }



}
