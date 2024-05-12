<?php

namespace App\Domains\Currency\Models;

use App\Domains\Customer\Models\Customer;
use App\Domains\RevisionHistory\Models\RevisionHistory;
use App\Domains\Tenant\Models\Tenant;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;


class HistoryChangeRate extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'history_change_rates';
    protected $fillable = [
        'currency_id',
        'symbol',
        'price_rate',
        'price',
        'backup_changes',
        'editor_id',
        
    ];
    public $timestamps = true;

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id');
    }

    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }

}
