<?php

namespace App\Domains\FixedAsset\Imports;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\FixedAsset\Models\FixedAsset;
use Exception;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Support\Collection;

use Illuminate\Support\Facades\DB;


class FixedAssetsImport implements ToCollection, WithValidation, WithHeadingRow
{

    use Importable;
    public $importErrors = [];

    public function collection(Collection $rows)
    {
        \Log::info($rows);
        $arrayErros = [];
        
        /* ======================= check error ================ */
         /*   */
         foreach ($rows as $key => $row) {

                if(
                    !$row->has('name')||
                    !$row->has('description')||
                    !$row->has('acquisition_date')||
                    !$row->has('acquisition_value')||
                    !$row->has('depreciation_ratio')||
                    !$row->has('depreciation_value')||
                    !$row->has('depreciation_duration_value')||
                    !$row->has('depreciation_duration_type')||
                    !$row->has('parent_account_code')
                    
                   
                    ){
                    
                        array_push($arrayErros,['row_number'=>0,'error'=>"Invalid file. Please ensure that the column names match the example file."]);
                    break;  
                }else{
                    if(
                        $row['name']||
                        $row['description']||
                        $row['acquisition_date']||
                        $row['parent_account_code']||
                        $row['depreciation_duration_type']||
                        isset($row['acquisition_value'])||
                        isset($row['depreciation_ratio'])||
                        isset($row['depreciation_value'])||
                        isset($row['depreciation_duration_value'])
                        ){

                            if(
                                !$row['name']||
                                !$row['description']||
                                !$row['acquisition_date']||
                                !$row['parent_account_code']||
                                !$row['depreciation_duration_type']||
                                !isset($row['acquisition_value'])||
                                !isset($row['depreciation_ratio'])||
                                !isset($row['depreciation_value'])||
                                !isset($row['depreciation_duration_value'])
                                ){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please fill all data"]);
                                }else{
        
                                    $parent = Account::where('code',$row['parent_account_code'])->first();
                                    if(!$parent){
                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"Can't find parent account '".$row['name']."'"]);
                                    }else{
                                        $existsBeforeInfixedAsset = FixedAsset::where('name',$row['name'])->where('parent_id',$parent->id)->first();
                                        $existsBeforeInAccount = Account::where('name',$row['name'])->where('parent_id',$parent->id)->first();
                                        if($existsBeforeInfixedAsset){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in fixed assets '".$row['name']."'"]);
                                        }
                                        if($existsBeforeInAccount){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in chart of accounts '".$row['name']."'"]);
                                        }
                                        $array = explode('-',$row['acquisition_date']);
                                        if(count($array)<0||count($array)>3){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"Invalid 'acquisition_date'"]);
                                        }else if($array[0]<0||$array[0]>31||$array[1]>12||$array[1]<0||$array[2]<1950){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"Invalid 'acquisition_date'"]);

                                        }

                                    }
                                }

                        }
                    

                }

               


               
 
        }


        
        /* ========================================== if all rows have not errors ============ */
        /*  import */
        if(count($arrayErros)==0){
            try {
                DB::beginTransaction();
                foreach ($rows as $key=> $row) {
                    if(isset($row['parent_account_code'])){

                        $parent = Account::where('code', $row['parent_account_code'])->first();
                        $code = $this->generateParentCode($parent->id);
        
                        if(isset($code)&&$code>0&& $code!=-1){
    /*                         $account =  Account::create([
                                'name' => $row['name'],
                                'code' => $code,
                                'old_code' => $row['old_code']??'',
                                'opening_balance' => 0,
                                'account_type' => 'both',
                                'is_parent' => 0,
                                'parent_id' =>   $parent->id,
                                'group_id' => $parent->group_id,
                                'creator_id' => auth()->user()->id,
                            ]); */
                            
                            $data = app(AccountMySqlRepository::class)->storeFromFixedAsset($parent->id, $row['name'],0);
                            $timestamp = strtotime($row['acquisition_date']);
                            $depreciation_ratio = isset( $row['depreciation_ratio']) ?     $row['depreciation_ratio']: $this->getDepreciationRatio($row['depreciation_duration_value'],$row['acquisition_value'], $row['depreciation_value']);

                            
                            $asset = FixedAsset::create([
                                'code' => $data['account_code'],
                                'name' => $row['name'],
                                'description' => $row['description'],
                                'acquisition_date' =>date('Y-m-d',$timestamp),
                                'depreciation_duration_type' => $row['depreciation_duration_type'],
                                'acquisition_value' => $row['acquisition_value'],
                                'depreciation_ratio' => $depreciation_ratio ,
                                'depreciation_value' => $row['depreciation_value'],
                                'depreciation' => $this->getDepreciation($row['depreciation_duration_value'], $row['acquisition_value'], $row['depreciation_value']),
                                'depreciation_duration_value' => $row['depreciation_duration_value'],
                                'parent_id' => $parent->id,
                                'parent_type' => "",
                                'account_id' => $data['account_id'],
                                'creator_id' => auth()->user()->id,
                            ]);
                            $account = Account::find($data['account_id']);
                            $account->update(['old_code'=>$row['old_code']??'']);
                            $parent->fixedAssets()->save($asset);
                            
                        }
                    }

                }
                DB::commit();
            } catch (Exception $e) {
                DB::rollBack();
                array_push($arrayErros,['row_number'=>0,'error'=>"Please check if data is correct."]);
            }
        }

        if (count($arrayErros) > 0) {
            $this->importErrors = [
                'errors' => $arrayErros,
            ];
            return;
        }


        
        
    }
    public function rules(): array
    {
        return [
        ];

    }


    private function generateParentCode(int $parentId)
    {

            $parentAccount = Account::find($parentId);

            
            $lastChild = Account::where('parent_id', $parentAccount->id)
                /* ->where('is_parent', 0) */                                                                                                               
                ->orderBy('code', 'desc')
                ->first();
            
            $limit = $parentAccount->code."999";
           
           
            if($lastChild){
                if($lastChild->code<$limit){
                    $lastAccountCode = $lastChild->code + 1;
                    $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT);
                }else {
                    $code = -1;
                }
            }else{
                $lastAccountCode = $parentAccount->code . '001';
                $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT);
            }



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
