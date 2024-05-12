<?php

namespace App\Domains\Account\Models;

use App\Domains\Currency\Models\Currency;
use App\Domains\FixedAsset\Models\FixedAsset;
use App\Domains\Group\Models\Group;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\PaymentType\Models\PaymentType;
use App\Domains\Project\Models\Project;
use App\Domains\Purchase\Models\Purchase;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use PhpParser\Node\Stmt\Return_;

//use Spatie\Translatable\HasTranslations;


class Account extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'code',
        'name',
        'group_id',
        'old_code',
        'parent_id',
        'is_parent',
        'opening_balance',
        'account_type',
        'creator_id',
        'icon',
        'is_safe',
        'opening_balance_credit',
        'opening_balance_debit',
        'credit_journal_entries',
        'debit_journal_entries',
        'total_credit',
        'total_debit',
        'total_credit_balance',
        'total_debit_balance',
        'change_currency',
    ];

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function parent()
    {
        return $this->belongsTo(Account::class);
    }

    public function journalEntryDetail(): HasMany
    {
        return $this->hasMany(JournalEntryDetail::class, 'account_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class);
    }
    public function children(): HasMany
    {
        return $this->hasMany(Account::class, 'parent_id')->with('children');
    }
    public function customers(): HasMany
    {
        return $this->hasMany(Account::class, 'parent_account_id');
    }
    public function fixedAssets()
    {
        return $this->morphMany(FixedAsset::class, 'parent');
    }

    public function paymentTypes()
    {
        return $this->belongsToMany(PaymentType::class);
        // return $this->belongsToMany(PaymentType::class)->withPivot('is_default');
    }

    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

    public function project(): HasOne
    {
        return $this->hasOne(Project::class,'account_id');
    }
}
