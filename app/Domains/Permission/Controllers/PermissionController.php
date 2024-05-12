<?php

namespace App\Domains\Permission\Controllers;

use App\Domains\Permission\Models\Permission;
use App\Domains\Permission\Models\PermissionCategory;
use App\Domains\Permission\Resources\PermissionCategoriesResource;
use App\Domains\Permission\Resources\PermissionModuleResource;
use App\Domains\Permission\Resources\PermissionsResource;
use App\Domains\Permission\Services\PermissionService;
use App\Http\Controllers\Controller;

class PermissionController extends Controller
{
    public function __construct(private PermissionService $permissionService)
    {
    }

    public function list() {
        return PermissionModuleResource::collection($this->permissionService->list());
    }

    public function findById($id) {
        return $this->permissionService->findById($id);
    }
    public function getCategories() {
        return PermissionCategoriesResource::collection(PermissionCategory::orderBy('id', 'asc')->get());
    }
    public function permissions() {
        return PermissionsResource::collection(Permission::orderBy('id', 'asc')->get());
    }

}
