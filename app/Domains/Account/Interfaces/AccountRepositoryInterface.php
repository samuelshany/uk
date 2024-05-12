<?php

namespace App\Domains\Account\Interfaces;

use App\Domains\Account\Models\Account;
use Illuminate\Database\Eloquent\Collection;

interface AccountRepositoryInterface
{
    public function findById(string $id): Account;
    public function list();
    public function parents();
    public function profitAndlossAccounts();
    public function parentAccountsForProfitAndLoss();
    public function parentAssetsAccounts();
    public function parentExpensesAccounts();
    public function parentRevenueAccounts();
    public function accounts();
    public function subAccounts();
    public function GroupAndParentAccounts();
    public function groups_ParentAccounts();
    public function store($request):bool;
    public function createProfitAndLossAccounts($request):bool;
    public function updateProfitAndLossAccounts(string $id, $request):bool;
    public function update(string $id, $request):bool;
    public function delete(string $id): bool;
}
