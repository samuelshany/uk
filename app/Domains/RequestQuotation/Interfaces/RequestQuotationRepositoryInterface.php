<?php

namespace App\Domains\RequestQuotation\Interfaces;

use App\Domains\RequestQuotation\Models\RequestQuotation;

interface RequestQuotationRepositoryInterface
{
    public function list();
    public function findById(string $id): RequestQuotation;
    public function update(string $id, $request): bool;
    public function approvedRequestQuotation(string $id): bool;
    public function canceledRequestQuotation(string $id): bool;
    public function delete(string $id): bool;
}
