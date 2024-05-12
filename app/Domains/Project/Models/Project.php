<?php

namespace App\Domains\Project\Models;

use App\Domains\Account\Models\Account;
use App\Domains\ConstructionName\Models\ConstructionName;
use App\Domains\Customer\Models\Customer;
use App\Domains\DeductionOption\Models\DeductionOption;
use App\Domains\ProjectPhase\Models\ProjectPhase;
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


class Project extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'projects';
    protected $fillable = [
        'project_name',
        'client_information_id',
        'start_date',
        'end_date',
        'project_description',
        'downpayment_option',
        'assigned_engineer_id',
        'milestone',
        'deadline',
        'price',
        'estimated_cost',
        'assigned_budget',
        'downpayment',
        'creator_id',
        'editor_id',
        'account_id',
        'parent_account_id',
        'construction_name_id'
    ];

 

    public function clientInformation(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'client_information_id');
    }

    public function assignedEngineer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_engineer_id');
    }
   /*  public function constructionName(): BelongsTo
    {
        return $this->belongsTo(ConstructionName::class, 'construction_name_id')->withTrashed();
    } */

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
    public function editor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'editor_id');
    }

    public function projectPhases(): BelongsToMany
    {
        return $this->belongsToMany(ProjectPhase::class, 'project_with_phases','project_id')->withTrashed();
    }

    public function projectDeductionOptions(): BelongsToMany
    {
        return $this->belongsToMany(DeductionOption::class, 'project_with_deduction_options','project_id')->withTrashed();
    }

    public function suppliers(): BelongsToMany
    {
        return $this->belongsToMany(Supplier::class, 'project_suppliers','project_id')->withTrashed();
    }

    public function projectAssignments(): HasMany
    {
        return $this->hasMany(ProjectAssignment::class,'project_id');
    }

    public function parentAccount(): BelongsTo
    {
        return $this->belongsTo(Account::class, 'parent_account_id');
    }

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class, 'account_id');
    }

}
