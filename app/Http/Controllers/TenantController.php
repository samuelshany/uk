<?php

namespace App\Http\Controllers;

use App\Models\Admin\Module;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

use function Laravel\Prompts\table;

class TenantController extends Controller
{
    public function index()
    {
        $tenants = Tenant::all();
       
        return view('admin.tenants.index', compact('tenants'));
    }

    public function create()
    {
        $modules = Module::all();
        return view('admin.tenants.create',['modules' =>$modules]);
    }

    public function store(Request $request)
    {
       // dd($request->toArray());
        $validated = $request->validate([
            'id' => 'required|unique:tenants|max:255',
        ]);


        $tenant = Tenant::create([
            'id' => $request->id,
            'modules' => $request->modules
        ]);

        
        $tenant->domains()->create(['domain' => $tenant->id.'.'.env('APP_URL')]);
        
        return Redirect::to('tenants');
    }
    public function edit(Tenant $tenant)
    {
        $modules = Module::all();
        return view('admin.tenants.edit',['modules' =>$modules,'tenant' =>$tenant]);
    }

    public function update(Request $request,Tenant $tenant)
    {
       // dd($request->toArray());

        $tenant->update([
            'modules' => $request->modules
        ]);
        
        tenancy()->initialize($tenant);

        DB::table('modules')->delete();
        Artisan::call('db:seed', ['--class' => 'PermissionsTableSeeder']);
        
        return Redirect::back();
    }

    public function suspend(Tenant $tenant)
    {
        $tenant->suspended_at = now();
        $tenant->save();
        return redirect()->route('admin.tenants.index');
    }

    public function delete(Tenant $tenant)
    {
        $tenant->delete();
        return redirect()->route('admin.tenants.index');
    }
}
