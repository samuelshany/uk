<?php

namespace App\Domains\Permission\Models;

use App\Domains\Module\Models\Module;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PermissionCategory extends Model
{
    use HasFactory;

    public function permissions(){
        return $this->hasMany(Permission::class);
    }

    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class,'module_id');
    }
}
