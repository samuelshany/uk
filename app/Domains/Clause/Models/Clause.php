<?php

namespace App\Domains\Clause\Models;

use App\Domains\Account\Models\Account;
use App\Domains\Project\Models\WorkClause;
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


class Clause extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'clauses';
    protected $fillable = [
        'name',
        'description',
        'creator_id',
        "parent_account_id",
        "account_id",
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
    public function workClauses(): HasMany
    {
        return $this->hasMany(WorkClause::class,'clause_id');
    }


}
