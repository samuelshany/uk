<?php

namespace App\Domains\DeductionOption\Models;

use App\Domains\Account\Models\Account;
use App\Domains\Project\Models\Project;
use App\Domains\Project\Models\ProjectAssignment;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class DeductionOption extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'deduction_options';
    protected $fillable = [
        'name',
        'description',
        'creator_id',
        'editor_id',
         'parent_account_id',
         'account_id',
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
    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'project_with_deduction_options','deduction_option_id');
    }

    public function projectAssignments(): BelongsToMany
    {
        return $this->belongsToMany(ProjectAssignment::class,'project_assignment_with_options','deduction_option_id');
    }


}
