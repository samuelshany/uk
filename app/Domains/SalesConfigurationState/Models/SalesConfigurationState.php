<?php

namespace App\Domains\SalesConfigurationState\Models;

use App\Domains\SalesOrderTracking\Models\SalesOrderTracking;
use App\Traits\HasFinancialPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class SalesConfigurationState extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, HasFinancialPeriod, InteractsWithMedia;

    protected $table = 'sales_configuration_states';
    protected $fillable = [
        'status_name',
        'color',
        'final_state',
        'creator_id',
    ];

    public function orderTrackings(): HasMany
    {
        return $this->hasMany(SalesOrderTracking::class, 'status_id');
    }

}
