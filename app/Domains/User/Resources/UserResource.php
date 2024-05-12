<?php

namespace App\Domains\User\Resources;

use App\Domains\Permission\Resources\PermissionsResource;
use App\Domains\Role\Resources\RoleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'status' => $this->status,
            'parent' => $this->parent->name ?? '',
            'parent_id' => $this->parent_id,
            'tenant_modules'=>tenant('modules')??['default'],
            'role_id' => $this->whenLoaded(
                'roles',
                $this->roles->first()->id ?? '',
            ),
            'role' => $this->whenLoaded(
                'roles',
                [
                    'name' => $this->roles->first()->name ?? '',
                    'id' => $this->roles->first()->id ?? '',
                    'permissions' => $this->whenLoaded(
                        'permissions',
                        $this->permissions&&count($this->permissions)>0?PermissionsResource::collection($this->permissions):[
                           [
                            'id' => 0,
                            'name' => 'default',
                            'label' => 'default',
                           ]
                        ]
                    ),
                ]
            ),


        ];
    }
}