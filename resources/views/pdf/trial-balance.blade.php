<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trial Balance</title>
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
<body>
    <!-- Header -->
    <div style="align-items: center; position: relative">
        <!-- Logo on the left -->
        <div style="padding-top: 20px;">
            <img src="{{ public_path('images/key_logo.png') }}" alt="Logo" width="100">
        </div>
        <div style="">
            <p><span style="text-transform: capitalize;text-weight:600;padding:0;margin:0">from:</span> {{$data['from']}}</p>
            <p><span style="text-transform: capitalize;text-weight:600;padding:0;margin:0">to:</span> {{$data['to']}}</p>
        </div>
        <!-- Text on the right -->
        <div style="text-align: right; position: absolute;right:10px;top:10px">
            <p style="text-transform: capitalize;font-weight: 700">Company: {{tenant('id')}}</p>
            <p>Date: {{ date('Y-m-d') }}</p>
        </div>
        <div style="text-align: center;">
            <p>{{ $title }} </p>
        </div>
    </div>
    <div style="clear: both;"></div> <!-- Clear the float -->
    <!-- Table -->
    <table>
        <thead>
            <tr>
                <th>Account Name</th>
                <th>Code</th>
                <th>Opening Credit</th>
                <th>Opening Debit</th>
                <th>Credit</th>
                <th>Debit</th>
                <th>Total Credit</th>
                <th>Total Debit</th>
                <!-- Add more columns if needed -->
                <th>Credit Balance</th>
                <th>Debit Balance</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data['accounts'] as $account)
            <tr>
                <td style="width: auto">{{ $account['name'] }}</td>
                <td style="width: auto">{{ $account['code'] }}</td>
                <td style="width: auto">{{ $account['opening_balance_credit'] }}</td>
                <td style="width: auto">{{ $account['opening_balance_debit'] }}</td>
                <td style="width: auto">{{ $account['credit_journal_entries'] }}</td>
                <td style="width: auto">{{ $account['debit_journal_entries'] }}</td>
                <td style="width: auto">{{ $account['total_credit'] }}</td>
                <td style="width: auto">{{ $account['total_debit'] }}</td>
                <td style="width: auto">{{ $account['total_credit_balance'] }}</td>
                <td style="width: auto">{{ $account['total_debit_balance'] }}</td>
            </tr>
            @endforeach
            <tr >
                <td style="width: auto;font-weight:600;text-transform:capitalize;text-align:left" colspan="2">total</td>
                <td style="width: auto">{{ $data['total']['opening_balance_credit'] }}</td>
                <td style="width: auto">{{ $data['total']['opening_balance_debit'] }}</td>
                <td style="width: auto">{{ $data['total']['credit_journal_entries'] }}</td>
                <td style="width: auto">{{ $data['total']['debit_journal_entries'] }}</td>
                <td style="width: auto">{{ $data['total']['total_credit'] }}</td>
                <td style="width: auto">{{ $data['total']['total_debit'] }}</td>
                <td style="width: auto">{{ $data['total']['total_credit_balance'] }}</td>
                <td style="width: auto">{{ $data['total']['total_debit_balance'] }}</td>
            </tr>
        </tbody>
    </table>
    <htmlpagefooter name="page-footer" >
        <div class="" style="text-align: center">
            {PAGENO}
        </div>
    </htmlpagefooter>
</body>
</html>