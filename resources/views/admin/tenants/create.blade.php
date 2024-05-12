<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create New Tenant') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <form method="post" action="{{ Route('tenants.store') }}">
                        @csrf
                        <div class="form-group mb-2">
                            <label class="control-label col-sm-2" for="domain">Domain:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="domain" placeholder="Enter domain"
                                    name="id">
                            </div>
                        </div>

                        <div style="margin-bottom: 20px ;">
                        @foreach($modules as $module)
                            <span style="margin:20px 10px;">
                                <input type="checkbox" value="{{$module->name}}" name="modules[]" id="{{$module->id}}">
                                <label for="{{$module->id}}">{{$module->name}}</label>
                            </span>
    
                        @endforeach
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button style="background: #198754;" type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
