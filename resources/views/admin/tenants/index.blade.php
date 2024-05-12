<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Tenants') }}
            <a href="{{route('tenants.create')}}" style="float: right" class="btn btn-secondary">{{ __('Create') }}</a>
        </h2>
    </x-slot>
    
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <table class="table responsive table-borded">
                        <thead>
                            <th>name</th>
                            <thead>domain</th>
                        </thead>
                        <tbody>
                            @foreach($tenants as $tenant)
                            <tr>
                                <td>{{$tenant?->id}}</td>
                                <td> <a target="_blank" href="{{'https://'.$tenant?->domains?->first()?->domain}}">{{$tenant?->domains?->first()?->domain}}</a> </td>
                                <td>
                                    <a href="{{route('tenants.edit',$tenant)}}" class="btn btn-secondary">{{ __('Edit') }}</a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>