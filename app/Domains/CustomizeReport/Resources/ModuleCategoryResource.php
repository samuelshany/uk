<?php

namespace App\Domains\CustomizeReport\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class ModuleCategoryResource extends JsonResource
{

    public function toArray($request)
    {
        //dd(Schema::getColumnListing($this->name));
        /* $fullName = Str::snake($this->name);
        $names = explode(' ', $fullName);
        $lastName = end($names);
        $pluralizedLastName = Str::plural($lastName);
        $fullNamePluralized = implode(' ', array_map(function ($name) use ($lastName, $pluralizedLastName) {
            return $name === $lastName ? $pluralizedLastName : $name;
        }, $names)); */

        $name = preg_replace('/(?<!\ )[A-Z]/', ' $0',$this->name);
        return [
            "key"=> $this->module->id.'-'.$this->id,
            "label"=> $name,       
            "value"=> $name,
           "children"=> CategoryColumnResource::collection(collect([
            ['label'=>'Code','id'=>$this->module->id.'-'.$this->id.'-1'],
            ['label'=>'Name','id'=>$this->module->id.'-'.$this->id.'-2'],
            ['label'=>'Craeted at','id'=>$this->module->id.'-'.$this->id.'-4'],
        ])),
            
        ];
    }
}
