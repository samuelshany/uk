<!DOCTYPE html>
<html>
<head>
    <title>Trial Balance Sheet</title>
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>
    <h1>Trial Balance Sheet</h1>
    <table>
        <thead>
            <tr>
                <th>Account Name</th>
                <th>Total Debit</th>
                <th>Total Credit</th>
                <!-- Add more columns if needed -->
                <th>Credit Balance</th>
                <th>Debit Balance</th>
            </tr>
        </thead>
        <tbody>
            @foreach($trialBalance['accounts'] as $account)
            <tr>
                <td>{{ $account['name'] }}</td>
                <td>{{ $account['total_debit'] }}</td>
                <td>{{ $account['total_credit'] }}</td>
                <!-- Add more columns if needed -->
                <td>{{ $trialBalance['credit_balance'] }}</td>
                <td>{{ $trialBalance['debit_balance'] }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <p>Total Debit: {{ $trialBalance['total_debit'] }}</p>
    <p>Total Credit: {{ $trialBalance['total_credit'] }}</p>
    <p>Credit Balance: {{ $trialBalance['credit_balance'] }}</p>
    <p>Debit Balance: {{ $trialBalance['debit_balance'] }}</p>
</body>
</html>
