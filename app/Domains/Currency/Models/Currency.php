<?php

namespace App\Domains\Currency\Models;

use App\Domains\Customer\Models\Customer;
use App\Domains\RevisionHistory\Models\RevisionHistory;
use App\Domains\Tenant\Models\Tenant;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;


class Currency extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'code',
        'symbol',
        'price_rate',
        'price',
        'backup_changes',
        'from',
        'to',
        'default',
        'creator_id',
    ];
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function hasCustomers(): bool
    {
        return $this->hasMany(Customer::class)->exists();
    }
    public function customers(): BelongsToMany
    {
        return $this->belongsToMany(Customer::class,'customer_currencies','currency_id');
    }

    public function historyChangeRates(): HasMany
    {
        return $this->hasMany(HistoryChangeRate::class, 'currency_id');
    }

    // public function revision_histories(): MorphMany
    // {
    //     return $this->morphMany(RevisionHistory::class, 'revision_historyable');
    // }

}
