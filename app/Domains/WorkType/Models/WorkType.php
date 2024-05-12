<?php

namespace App\Domains\WorkType\Models;

use App\Domains\Project\Models\ProjectAssignment;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class WorkType extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'work_types';
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

    public function projectAssignments(): HasMany
    {
        return $this->hasMany(ProjectAssignment::class, 'work_type_id');
    }


}
