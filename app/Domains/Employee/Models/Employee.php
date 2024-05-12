<?php

namespace App\Domains\Employee\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
class Employee extends Model
{
    use HasFactory;
    public $fillable=[
        'name','email','password','department_id',
    ];
    public function setPassword($password)
    {
        return $password;
       return $this->attributes['password'] = Hash::make($password);
    }
}
