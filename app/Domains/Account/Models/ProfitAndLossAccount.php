<?php

namespace App\Domains\Account\Models;

use App\Domains\JournalEntry\Models\JournalEntryDetail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

//use Spatie\Translatable\HasTranslations;


class ProfitAndLossAccount extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "profit_and_loss_accounts";

    protected $fillable = [
        'code',
        'name',
        'account_for',
        'account_id',
        'parent_account_id',
    ];

   
    public function account():BelongsTo
    {
        return $this->belongsTo(Account::class,'account_id');
    }
    
    public function parent():BelongsTo
    {
        return $this->belongsTo(Account::class,'parent_account_id');
    }



}
