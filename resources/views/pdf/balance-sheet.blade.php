<!DOCTYPE html>
<html lang="{{app()->getlocale() == 'en'?'en':'ar'}}" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th,
        td {
            border: 1px solid black;
            text-align: center;
            border-bottom: 1px solid #ddd;
            border-color: #96D4D4;
        }
        th,.heading {
            background-color: #f2f2f2;
            /* Optional background color for header */
        }
        tbody tr:nth-child(odd) {
            background-color: #f9f9f9;
            /* Optional background color for odd rows */
        }
    </style>
</head>
<body style="font-family: 'Cairo', sans-serif;">
    <!-- Header -->
    <div style="align-items: center; position: relative">
        <!-- Logo on the left -->
        <div style="padding-top: 20px;">
            <img src="{{ public_path('images/key_logo.png') }}" alt="Logo" width="100">
        </div>
        <div >
            <p dir="{{app()->getlocale() == 'en'?'ltr':'rtl'}}"><span style="text-transform: capitalize;text-weight:600;padding:0;margin:0">{{__('journal-entry.from')}}:</span> {{$data['from']}}</p>
            <p dir="{{app()->getlocale() == 'en'?'ltr':'rtl'}}"><span style="text-transform: capitalize;text-weight:600;padding:0;margin:0">{{__('journal-entry.to')}}:</span> {{$data['to']}}</p>
        </div>
        <!-- Text on the right -->
        <div style="text-align: right; position: absolute;right:10px;top:10px" dir="{{app()->getlocale() == 'en'?'ltr':'rtl'}}">
            <p style="text-transform: capitalize;font-weight: 700">{{__('journal-entry.company')}}: {{tenant('id')}}</p>
            <p>{{__('journal-entry.date')}}: {{app()->getlocale() == 'en'?date('Y-m-d'): date('d-m-Y') }}</p>
        </div>
        <div style="text-align: center;">
            <p>{{ $title }} </p>
        </div>
    </div>
    <div style="clear: both;"></div> <!-- Clear the float -->
    <!-- Table -->
    <table dir="{{app()->getlocale() == 'en'?'ltr':'rtl'}}">
        <thead>
            <tr>
                <th>{{__('journal-entry.code')}}</th>
                <th>{{__('journal-entry.account')}}</th>
                @foreach ($data['years'] as $year_number)
                    <th> <span dir="{{app()->getlocale() == 'en'?'ltr':'rtl'}}">{{$year_number}}</span>{{__('journal-entry.st')}} {{__('journal-entry.year')}}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="heading" style="width: auto" colspan="2">{{__('journal-entry.assets')}}</td>
            </tr>
            @foreach($data['assets'] as $group)
                <tr>
                    <td style="width: auto">{{ $group['code']??'' }}</td>
                    <td style="width: auto">{{ $group['name']??'' }}</td>
                    @foreach($group['year_value'] as $year)
                        <?php $is_exits = false?>
                        @foreach ($data['years'] as $year_number)
                            @if($year_number==$year['year_number'])
                                <?php $is_exits = true ?>
                            @endif
                        @endforeach
                        @if($is_exits)
                            <th>{{$year['value']}}</th>
                        @else
                            <th>0.00</th>
                        @endif
                    @endforeach
                </tr>
            @endforeach
            <tr>
                <td class="heading" style="width: auto" colspan="2">{{__('journal-entry.liabilities')}}</td>
            </tr>
            @foreach($data['liabilities'] as $group)
                <tr>
                    <td style="width: auto">{{ $group['code']??'' }}</td>
                    <td style="width: auto">{{ $group['name']??'' }}</td>
                    @foreach($group['year_value'] as $year)
                        <?php $is_exits = false?>
                        @foreach ($data['years'] as $year_number)
                            @if($year_number==$year['year_number'])
                                <?php $is_exits = true ?>
                            @endif
                        @endforeach
                        @if($is_exits)
                            <th>{{$year['value']}}</th>
                        @else
                            <th>0.00</th>
                        @endif
                    @endforeach
                </tr>
            @endforeach
            <tr>
                <td class="heading" style="width: auto" colspan="2">{{__('journal-entry.equity')}}</td>
            </tr>
            @foreach($data['equity'] as $group)
                <tr>
                    <td style="width: auto">{{ $group['code']??'' }}</td>
                    <td style="width: auto">{{ $group['name']??'' }}</td>
                    @foreach($group['year_value'] as $year)
                         <?php $is_exits = false?>
                        @foreach ($data['years'] as $year_number)
                            @if($year_number==$year['year_number'])
                                <?php $is_exits = true ?>
                            @endif
                        @endforeach
                        @if($is_exits)
                            <th>{{$year['value']}}</th>
                        @else
                            <th>0.00</th>
                        @endif
                    @endforeach
                </tr>
            @endforeach
                
            
        </tbody>
    </table>
    <htmlpagefooter name="page-footer" >
        <div class="" style="text-align: center">
            {PAGENO}
        </div>
    </htmlpagefooter>
</body>
</html>