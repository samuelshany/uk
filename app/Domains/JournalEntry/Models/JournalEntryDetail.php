<?php

namespace App\Domains\JournalEntry\Models;

use App\Domains\Account\Models\Account;
use App\Domains\Currency\Models\Currency;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class JournalEntryDetail extends Model implements HasMedia
{
  use HasFactory, SoftDeletes,  InteractsWithMedia;
  protected $fillable = [
    'account_id',
    'debit',
    'credit',
    'journal_entry_id',
    'currency_id',
    'currency_rate',
    'saved',
    'description'
  ];
  public function journalEntry(): BelongsTo
  {
    return $this->belongsTo(JournalEntry::class, 'journal_entry_id');
  }
  public function account(): BelongsTo
  {
    return $this->belongsTo(Account::class, 'account_id');
  }
  public function getAmountAttribute()
  {
    return $this->debit - $this->credit;
  }
  public function currency()
  {
    return $this->belongsTo(Currency::class, 'currency_id');
  }
}
