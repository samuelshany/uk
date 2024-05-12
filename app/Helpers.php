<?php
use App\Domains\Account\Models\Account;
use App\Domains\Customer\Models\Customer;
use App\Domains\Supplier\Models\Supplier;

if (!function_exists('updateAccountBalance')) {
    function updateAccountBalance($from, $to, $amount)
    {
        $fromAccount = Account::findOrFail($from);
        $toAccount = Account::findOrFail($to);

      /*   if ($amount <= 0) {
            throw new \InvalidArgumentException("Amount must be a positive number.");
        }

        if ($fromAccount->opening_balance < $amount) {
            throw new \RuntimeException("Insufficient balance in the from account.");
        }
 */
       /*  $fromAccount->decrement('opening_balance', $amount);
        $toAccount->increment('opening_balance', $amount); */

        return true;
    }
}

//for supplier Total Invoices Amount only
if (!function_exists('updateSupplierTotalInvoicesAmount')) {
    function updateSupplierTotalInvoicesAmount($supplier_id, $total)
    {
        $supplier = Supplier::find($supplier_id);

        if ($supplier) {
            $supplier->increment('total_invoices_amount', $total);
        } else {
            throw new \RuntimeException("supplier not found!");
        }
    }
}

// for customer Total Invoices Amount only
if (!function_exists('updateCustomerTotalInvoicesAmount')) {
    function updateCustomerTotalInvoicesAmount($customer_id, $total)
    {
        $customer = Customer::find($customer_id);

        if ($customer) {
            $customer->increment('total_invoices_amount', $total);
        } else {
            throw new \RuntimeException("Customer not found!");
        }
    }
}
