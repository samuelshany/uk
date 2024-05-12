<?php

namespace App\Domains\PaymentType\Repositories;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Resources\AccountResource;
use App\Domains\PaymentType\Interfaces\PaymentTypeRepositoryInterface;
use App\Domains\PaymentType\Models\PaymentType;

class PaymentTypeMySqlRepository implements PaymentTypeRepositoryInterface
{

    public function __construct(private PaymentType $paymentType)
    {
    }

    public function findById(string $id): PaymentType
    {
        $paymentType = $this->paymentType::findOrFail($id);

        return $paymentType;
    }

    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = $this->paymentType::when(request()->from, function ($q) {
            $q->whereDate('created_at', '>=', request()->from);
        })->when(request()->to, function ($q) {
            $q->whereDate('created_at', '<=', request()->to);
        });
        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }

    }

    public function store($request): bool
    {
        $paymentType = PaymentType::create([
            'name' => $request->name,
            'is_fixed' => $request->is_fixed ?? 0,
            'payment_type' => $request->type,
        ]);


        if($request->accounts){
            $paymentType->accounts()->attach($request->accounts);
        }

        return true;
    }

    public function update(string $id, $request): bool
    {
        $paymentType = $this->paymentType::findOrFail($id);
        $paymentType->update([
            'name' => $request->name,
            'payment_type' => $request->type??$paymentType->payment_type,
        ]);


        if($request->accounts){
            $paymentType->accounts()->sync($request->accounts);
        }

        return true;
    }

    public function delete(string $id): bool
    {
        $paymentType = $this->paymentType::findOrFail($id);
        if ($paymentType) {
            $paymentType->delete();
            $paymentType->accounts()->detach();
        }
        return true;
    }

    public function paymentTypeAccounts(string $id)
    {
        $paymentType = $this->paymentType::findOrFail($id);

        $relatedAccounts = $paymentType->accounts;

        return AccountResource::collection($relatedAccounts);
    }
}
