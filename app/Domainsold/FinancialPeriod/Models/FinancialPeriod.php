<?php

namespace App\Domains\FinancialPeriod\Models;

use App\Domains\JournalEntry\Models\JournalEntry;
use App\Domains\User\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
class FinancialPeriod extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'title',
        'status',
        'start',
        'end',
        'creator_id',
    ];
    public function creator()
    {
        return $this->belongsTo(User::class,'creator_id');
    }

    public function setStartAttribute($value)
    {
        $this->attributes['start'] = Carbon::parse($value)->format('Y-m-d');
    }
    public function setEndAttribute($value)
    {
        $this->attributes['end'] = Carbon::parse($value)->format('Y-m-d');
    }
    public function journalEntry(): MorphToMany
    {
        return $this->morphedByMany(JournalEntry::class, 'financiables');
    }
    public static function current()
    {
        return static::where('status', 'open')->first();
    }
}
