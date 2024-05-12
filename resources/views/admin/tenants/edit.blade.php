<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit Tenant') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                        
                    <div class="col-sm-10" style="margin:20px 10px;">
                        <p>
                            <span>Name: </span>
                            <span style="font-weight: 700" >{{$tenant->id}}</span>
                        </p>

                        <p>
                            <span>Domain: </span>
                            <span style="font-weight: 700" >{{$tenant->domains[0]->domain}}</span>
                        </p>
                    </div>

                    <form method="post" action="{{ Route('tenants.update',$tenant->id) }}">
                        @csrf
                        

                        <div style="margin-bottom: 20px ;">
                        @foreach($modules as $module)
                        @if($tenant->modules&&count($tenant->modules)>0)
                            @if(in_array($module->name, $tenant->modules))
                            <span style="margin:20px 10px;">
                                <input type="checkbox" checked value="{{$module->name}}" name="modules[]" id="{{$module->id}}">
                                <label for="{{$module->id}}">{{$module->name}}</label>
                            </span>
                            @else
                            <span style="margin:20px 10px;">
                                <input type="checkbox" value="{{$module->name}}" name="modules[]" id="{{$module->id}}">
                                <label for="{{$module->id}}">{{$module->name}}</label>
                            </span>
                            @endif
                        @else
                            <span style="margin:20px 10px;">
                                <input type="checkbox" value="{{$module->name}}" name="modules[]" id="{{$module->id}}">
                                <label for="{{$module->id}}">{{$module->name}}</label>
                            </span>

                        @endif
    
                        @endforeach
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button style="background: #198754;" type="submit" class="btn btn-success">Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
