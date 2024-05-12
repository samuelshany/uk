<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Management</title>
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
<body style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
    <!-- Header -->
    <div style="align-items: center;">
        <!-- Logo on the left -->
        <div style="padding-top: 20px;position: absolute;left:10px;top:10px">
            <img src="{{ public_path('images/key_logo.png') }}" alt="Logo" width="100">
        </div>
        <!-- Text on the right -->
        <div style="text-align: right; ">
            <p style="text-transform: capitalize;font-weight: 700">Company: {{tenant('id')}}</p>
            <p>Date: {{ date('Y-m-d') }}</p>
        </div>
    </div>
    <div style="clear: both;"></div> <!-- Clear the float -->
    <div style="text-align: center; margin:20px">
        <p>{{ $title }} </p>
    </div>
    <!-- Table -->

    @foreach($data as $assignment)
    
    <?php $number = 0;?>
    <table>
        <thead>
            <tr>
                <th colspan="1">Reference</th>
                <th colspan="9">{{$assignment->reference_number}} </th>
            </tr>
            <tr>
                <th colspan="1">Project</th>
                <th colspan="9">{{$assignment->project->project_name}}</th>
            </tr>
            <tr>
                <th colspan="1">Constraction</th>
                <th colspan="9">{{$assignment->constructionName->name}}</th>
            </tr>
            <tr>
                <th colspan="1">Work Type</th>
                <th colspan="9">{{$assignment->workType->name}}</th>
            </tr>
            <tr>
                <th rowspan="2">NO.</th>
                <th rowspan="2">Clause</th>
                <th rowspan="2">Unit</th>
                <th rowspan="2">Ratio %</th>
                <th rowspan="2">Price</th>
                <!-- Add more columns if needed -->
                <th colspan="3">Quantity</th>
              
                <th rowspan="2">Total</th>
                <th rowspan="2">notes</th>
            </tr>
            <tr>
                <th >Previous</th>
                <th >Current</th>
                <th >Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach($assignment->workClauses as $workClause)
            <?php $number++;?>
                <tr>
                    <td style="width: auto">{{$number}}</td>
                    <td style="width: auto">{{ $workClause->clause->name }}</td>
                    <td style="width: auto">{{ $workClause->unit->name??' ' }}</td>
                    <td style="width: auto">{{ $workClause->ratio }}</td>
                    <td style="width: auto">{{ $workClause->price }}</td>
                    <td style="width: auto">{{ $workClause->previous_amount }}</td>
                    <td style="width: auto">{{ $workClause->current_amount }}</td>
                    <td style="width: auto">{{ $workClause->total_amount }}</td>
                    <td style="width: auto">{{ $workClause->total_price }}</td>
                    <td style="width: auto">{{ $workClause->notes??' ' }}</td>
                    
                </tr>
            @endforeach
            <tr>
                
                <td style="width: auto;font-weight:600;text-transform:capitalize;" colspan="2">Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="width: auto">{{ $assignment->total }}</td>
                
                <td></td>
            </tr>
            @foreach($assignment->deductionOptions as $deduction)
                <tr>
                    <td colspan="2" style="width: auto">{{ $deduction->name }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="width: auto">{{ $deduction->pivot->value }}</td>
                    <td></td>
                </tr>
            @endforeach
            <tr >
                
                <td style="width: auto;font-weight:600;text-transform:capitalize;" colspan="2">Total</td>
                <td colspan="8" style="width: auto">{{ $assignment->total_due }}</td>
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