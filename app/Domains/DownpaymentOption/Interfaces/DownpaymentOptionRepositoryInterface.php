<?php

namespace App\Domains\DownpaymentOption\Interfaces;

use App\Domains\DownpaymentOption\Models\DownpaymentOption;

interface DownpaymentOptionRepositoryInterface
{
    public function list();
    public function findById(string $id): DownpaymentOption;
    public function store( $request): bool;
    public function update(string $id, $request): bool;
    public function delete(string $id): bool;
}
