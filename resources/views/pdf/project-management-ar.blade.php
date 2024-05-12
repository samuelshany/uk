<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ادارة المشروع</title>
    <style>
        @page {
            footer: page-footer;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th,
        td {
            border: 1px solid black;
            text-align: center;
            border-bottom: 1px solid #ddd;
            border-color: #96D4D4;
            style="width: auto"
        }
        th {
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
    <div style="align-items: center;">
        <!-- Logo on the left -->
        <div style="padding-top: 20px;position: absolute;left:10px;top:10px">
            <img src="{{ public_path('images/key_logo.png') }}" alt="Logo" width="100">
        </div>
        <!-- Text on the right -->
        <div style="text-align: right;" dir="rtl">
            <p style="text-transform: capitalize;font-weight: 700" >الشركة: {{tenant('id')}}</p>
            <p>التاريخ:  {{ date('d-m-Y') }}</p>
        </div>
    </div>
    <div style="clear: both;"></div> <!-- Clear the float -->
    <div style="text-align: center; margin:20px">
        <p dir="rtl" lang="ar">{{ $title }} </p>
    </div>
    <!-- Table -->

    @foreach($data as $assignment)
    
    <?php $number = 0;?>
    <table>
        <thead>
            <tr>
                <th colspan="9">{{$assignment->reference_number}} </th>
                <th colspan="1">جاري</th>
            </tr>
            <tr>
                <th colspan="9">{{$assignment->project->project_name}}</th>
                <th colspan="1">المشروع</th>
            </tr>
            <tr>
                <th colspan="9">{{$assignment->constructionName->name}}</th>
                <th colspan="1">اسم المقاول</th>
            </tr>
            <tr>
                <th colspan="9">{{$assignment->workType->name}}</th>
                <th colspan="1">نوع العمل</th>
            </tr>
            <tr>
                <!-- Add more columns if needed -->
                
                <th rowspan="2">ملاحظات</th>
                <th rowspan="2">الاجمالي</th>
                <th colspan="3">الكمية المنفذة</th>
                <th rowspan="2">السعر</th>
                <th rowspan="2">% النسبة</th>
                <th rowspan="2">الوحدة</th>
                <th rowspan="2">البند</th>
                <th rowspan="2">رقم البند</th>
            </tr>
            <tr>
                <th >إجمالي</th>
                <th >حاليه</th>
                <th >سابقه</th>
            </tr>
        </thead>
        <tbody>
            @foreach($assignment->workClauses as $workClause)
            <?php $number++;?>
                <tr>
                    <td style="width: auto">{{ $workClause->notes??' ' }}</td>
                    <td style="width: auto">{{ $workClause->total_price }}</td>
                    <td style="width: auto">{{ $workClause->total_amount }}</td>
                    <td style="width: auto">{{ $workClause->current_amount }}</td>
                    <td style="width: auto">{{ $workClause->previous_amount }}</td>
                    <td style="width: auto">{{ $workClause->price }}</td>
                    <td style="width: auto">{{ $workClause->ratio }}</td>
                    <td style="width: auto">{{ $workClause->unit->name??' ' }}</td>
                    <td style="width: auto">{{ $workClause->clause->name }}</td>
                    <td style="width: auto">{{$number}}</td>
                    
                </tr>
            @endforeach
            <tr >
                
                <td></td>
                <td style="width: auto">{{ $assignment->total }}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="width: auto;font-weight:600;text-transform:capitalize;" colspan="2">الاجمالي</td>
                
            </tr>
            @foreach($assignment->deductionOptions as $deduction)
                <tr>
                    <td></td>
                    <td style="width: auto">{{ $deduction->pivot->value }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2" style="width: auto">{{ $deduction->name }}</td>
                </tr>
            @endforeach
            <tr>
                
                <td colspan="8" style="width: auto">{{ $assignment->total_due }}</td>
                <td style="width: auto;font-weight:600;text-transform:capitalize;" colspan="2">الاجمالي</td>
            </tr>
        </tbody>
    </table>
    @endforeach
    <htmlpagefooter name="page-footer" >
        <div class="" style="text-align: center">
            {PAGENO}
        </div>
    </htmlpagefooter>
</body>
</html>