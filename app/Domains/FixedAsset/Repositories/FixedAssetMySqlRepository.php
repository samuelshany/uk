<?php

namespace App\Domains\FixedAsset\Repositories;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\FixedAsset\Interfaces\FixedAssetRepositoryInterface;
use App\Domains\FixedAsset\Models\FixedAsset;
use App\Domains\Group\Models\Group;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use PhpOffice\PhpSpreadsheet\Calculation\Financial\Depreciation;

class FixedAssetMySqlRepository implements FixedAssetRepositoryInterface
{
    public function __construct(private FixedAsset $FixedAsset)
    {
    }

    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $fixedAssets = $this->FixedAsset::when(request()->filled('search'), function ($q) {
            $q->where('name', 'like', '%' . request()->search . '%');
            $q->orWhere('description', 'like', '%' . request()->search . '%');
        })->when(request()->depreciation_ratio, function ($q) {
            $q->where('depreciation_ratio', request()->depreciation_ratio);
        })->when(request()->depreciation_value, function ($q) {
            $q->where('depreciation_value', request()->depreciation_value);
        })->when(request()->acquisition_value, function ($q) {
            $q->where('acquisition_value', request()->acquisition_value);
        })->when(request()->acquisition_date, function ($q) {
            $q->whereDate('acquisition_date', request()->acquisition_date);
        })->when(request()->parent_id && request()->parent_code, function ($q) {
            $parentModel = (Str::length(request()->parent_code) === 8) ? Account::class : Group::class;
            $parentId = request()->parent_id;
            $q->where(function ($query) use ($parentModel, $parentId) {
                $query->where('parent_type', $parentModel)
                    ->where('parent_id', $parentId);
            });
        })->when(request()->creator_id, function ($q) {
            $q->where('creator_id', request()->creator_id);
        })->when(request()->from, function ($q) {
            $q->whereDate('created_at', '>=', request()->from);
        })->when(request()->to, function ($q) {
            $q->whereDate('created_at', '<=', request()->to);
        })->when(request()->sort_by, function ($q) {
            if (in_array(request()->sort_by, ['id', 'code', 'name', 'acquisition_value', 'acquisition_date', 'depreciation_value', 'depreciation_ratio', 'created_at', 'parent_id', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
                if (request()->sort_by == 'parent_id') {
                    $q->whereHas('parent', function ($q) {
                        $q->orderBy('parent_id', request()->sort_type === 'asc' ? 'asc' : 'desc');
                    });
                }
            }
        })->orderBy('code', 'asc')->with(['creator', 'parent:id,name,code']);

        if ($limit === 'all') {
            return $fixedAssets->get();
        } else {
            return $fixedAssets->paginate($limit);
        }
    }


    public function findById(string $id): FixedAsset
    {
        return $this->FixedAsset::findOrFail($id);
    }
    public function store($request)
    {
        $parent = Account::findOrFail($request->parent_id);

        $data = app(AccountMySqlRepository::class)->storeFromFixedAsset($parent->id, $request->name, $request->acquisition_value);

        $depreciation_ratio = isset($request->depreciation_ratio) ? $request->depreciation_ratio : $this->getDepreciationRatio($request->depreciation_duration_value, $request->acquisition_value, $request->depreciation_value);

        $asset = $this->FixedAsset::create(
            [
                'code' => $data['account_code'],
                'depreciation_ratio' => $depreciation_ratio,
                'depreciation' => $this->getDepreciation($request->depreciation_duration_value, $request->acquisition_value, $request->depreciation_value),
                'creator_id' => auth()->user()->id,
                'parent_type' => '',
            ] + $request->validated()
        );

        $parent->fixedAssets()->save($asset);
        return $asset;
    }

    public function update(string $id, $request): bool
    {
        $asset = $this->FixedAsset::findOrFail($id);
        $parent = Account::find($request->parent_id);
        $account = Account::where('code', $asset->code)->first();
        
        $account->update(['name'=>$request->name]);

        $depreciation_ratio = isset($request->depreciation_ratio) ? $request->depreciation_ratio : $this->getDepreciationRatio($request->depreciation_duration_value, $request->acquisition_value, $request->depreciation_value);

        $asset->parent()->associate($parent);
        $asset->update([
            // 'code' => $this->generateCode($parent->code),
            'depreciation_ratio' => $depreciation_ratio,
            'depreciation' => $this->getDepreciation($request->depreciation_duration_value, $request->acquisition_value, $request->depreciation_value),
        ] + request()->except('parent_id'));
        return true;
    }

    public function delete(string $id): bool
    {
        $this->FixedAsset::findOrFail($id)?->delete();
        return true;
    }
    public function parents()
    {
        $accounts = Account::where('is_parent', 1)
            ->select('id', 'code', 'name');

        $results = Group::select('id', 'code', 'name')->unionAll($accounts)
        ->orderBy('code','asc')->get();

        return $results;
    }

    /**
     * Generate new fixed asset code based on parent code and parent type
     * @param int $parentCode
     * @param int $codeLength
     * @return string
     */
    private function generateCode(int $parentCode)
    {

        $lastAsset = FixedAsset::where('code', 'like', $parentCode . '%')->whereRaw('LENGTH(code) = ?', [strlen($parentCode)])->orderBy('id', 'desc')->first();
        if ($lastAsset) {
            $lastAssetCode = $lastAsset->code + 1;
        } else {
            $lastAssetCode = (int) ($parentCode . '001');
        }
        $code = str_pad($lastAssetCode, strlen($parentCode), '0', STR_PAD_LEFT);

        return $code;
    }

    /**
     * Calculate the Depreciation of  assets .
     * @param int $depreciationDuration
     * @param float $acquisitionValue
     * @param float $depreciationValue
     * @return float
     */
    private function getDepreciation(int $depreciationDuration, float $acquisitionValue, float $depreciationValue): float
    {
        if ($depreciationDuration == 0) {
            return 0.0;
        }
        return ($acquisitionValue - $depreciationValue) / $depreciationDuration;
    }

    /**
     * Calculate Depreciation Ratio
     * @param int $depreciationDuration
     * @param float $acquisitionValue
     * @param float $depreciationValue
     * @return float
     */
    private function getDepreciationRatio(int $depreciationDuration, float $acquisitionValue, float $depreciationValue): float
    {
        if ($acquisitionValue == 0) {
            return 0.0;
        }
        return ($this->getDepreciation($depreciationDuration, $acquisitionValue, $depreciationValue) / $acquisitionValue) * 100;
    }
}
