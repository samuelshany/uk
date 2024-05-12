<?php

namespace App\Domains\SalesOrderTracking\Models;

use App\Domains\SalesConfigurationState\Models\SalesConfigurationState;
use App\Domains\SalesInvoice\Models\SalesInvoice;
use App\Domains\User\Models\User;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class SalesOrderTracking extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'sales_order_trackings';
    protected $fillable = [
        'sales_invoice_id',
        'status_id',
        'creator_id',
    ];



    public function salesInvoice(): BelongsTo
    {
        return $this->belongsTo(SalesInvoice::class, 'sales_invoice_id');
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(SalesConfigurationState::class, 'status_id')->withTrashed();
    }


    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }


}
