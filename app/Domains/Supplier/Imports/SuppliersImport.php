<?php

namespace App\Domains\Supplier\Imports;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\Group\Models\Group;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\Tax\Models\Tax;
use App\Domains\Vendor\Models\Address;
use Exception;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;


class SuppliersImport implements ToCollection, WithValidation, WithHeadingRow
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
                    !$row->has('contact')||
                    !$row->has('email')||
                  /*   !$row->has('currency_id')|| */
                    !$row->has('parent_account_code')||
                    !$row->has('address')||
                    !$row->has('country_id')||
                    !$row->has('city_id')||
                    !$row->has('state_id')||
                    !$row->has('zip_code')||
                    !$row->has('address_name')||
                    !$row->has('address_phone')||
                    /* !$row->has('is_same_shipping_address')|| */
                    !$row->has('opening_balance')||
                    !$row->has('prefix')||
                    !$row->has('old_code')||
                    !$row->has('tax_id')
                   
                    ){
                        array_push($arrayErros,['row_number'=>0,'error'=>"Invalid file. Please ensure that the column names match the example file."]);
                    
                    break;  
                }else{
                    if(
                        $row['name']||
                        isset($row['contact'])||
                        $row['email']||
                      /*   isset($row['currency_id'])|| */
                        isset($row['parent_account_code'])||
                        $row['address']||
                        isset($row['country_id'])||
                        isset($row['city_id'])||
                        isset($row['state_id'])||
                        isset($row['zip_code'])||
                        $row['address_name']||
                        isset($row['address_phone'])/* ||
                        isset($row['is_same_shipping_address']) */
                        ){

                            if(
                                !$row['name']||
                                !isset($row['contact'])||
                                !$row['email']||
                               /*  !isset($row['currency_id'])|| */
                                !isset($row['parent_account_code'])||
                                !$row['address']||
                                !isset($row['country_id'])||
                                !isset($row['city_id'])||
                                !isset($row['state_id'])||
                                !isset($row['zip_code'])||
                                !$row['address_name']||
                                !isset($row['address_phone'])/* ||
                                !isset($row['is_same_shipping_address']) */
                                ){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please fill all data"]);
                                }else{
                                  /*   if($row['is_same_shipping_address']!=1){
                                        if(
                                            !$row->has('billing_address')||
                                            !$row->has('billing_country_id')||
                                            !$row->has('billing_city_id')||
                                            !$row->has('billing_state_id')||
                                            !$row->has('billing_zip_code')||
                                            !$row->has('billing_address_name')||
                                            !$row->has('billing_address_phone')
                                        ){
                                            
                                            $arrayErros = ['row_number'=>0,'error'=>"Invalid File"];
                                            break;  
                                        }else{
                                            if(
                                                !$row['billing_address']||
                                                !isset($row['billing_country_id'])||
                                                !isset($row['billing_city_id'])||
                                                !isset($row['billing_state_id'])||
                                                !isset($row['billing_zip_code'])||
                                                !$row['billing_address_name']||
                                                !isset($row['billing_address_phone'])
                                                ){
                        
                                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please fill all data for billing address"]);
                                            }
        
                                        }
                                        
                                    } */
        
                                    $parent = Account::where('code',$row['parent_account_code'])->first();
                                    if(!$parent){
                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"Can't find parent account '".$row['name']."'"]);
                                    }else{
                                        $existsBeforeInSupplier = Supplier::where('email',$row['email'])->first();
                                        $existsBeforeInAccount = Account::where('name',$row['name'])->where('parent_id',$parent->id)->first();
                                        if($existsBeforeInAccount||$existsBeforeInSupplier){

                                            if($existsBeforeInSupplier){
                                                array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in suppliers '".$row['name']."'"]);
                                            }
                                            if($existsBeforeInAccount){
                                                array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in chart of accounts '".$row['name']."'"]);
                                            }
                                        }else{
                                            $checkCodeCriteria = ProductCodeCriteria::where('type','alphanumeric')->where('supplier',1)->first();
                                            if($checkCodeCriteria){
                                                if( !$row['perfix']){
                                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please enter a perfix"]);
                                                }else{

                                                    $existsPrefixBeforeInSupplier = Supplier::where('prefix',$row['prefix'])->first();
                                                    if($existsPrefixBeforeInSupplier){
                                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"This prefix already exists before in suppliers '".$row['name']."'"]);
        
                                                    }else{
        
                                                        $flagDuplicatedEmail = false;
                                                        $flagDuplicatedPrefix = false;
                                                        foreach ($rows as $key2 => $row2) {
                                                            if($key!=$key2){
                                                                if($row['email'] == $row2['email']){
                                                                    $flagDuplicatedEmail =true;
                                                                }
                                                                if($row['prefix'] == $row2['prefix']&&$row['prefix']!=''&&$row['prefix']){
                                                                    $flagDuplicatedPrefix = true;
                                                                }
                                                            }
                                                        }
                                                        if($flagDuplicatedEmail){
                                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"This email is duplicated '".$row['name']."'"]);
                
                                                        }
                                                        if($flagDuplicatedPrefix){
                                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"This prefix is duplicated '".$row['name']."'"]);
                                                            
                                                        }
                                                    }
                                                }
                                            }
                                            if(isset($row['tax_id'])||$row['tax_id']){
                                                $existsTax= Tax::find($row['tax_id']);
                                                if(!$existsTax){
                                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Can't find the Tax. Enter a correct tax_id  '".$row['name']."'"]);
                                                }
                                            }
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
                        $code = $this->generateParentCode($parent->id,$row);
        
                        if($code!=-1){
                            
    /*                         $account =  Account::create([
                                'name' => $row['name'],
                                'code' => $code,
                                'old_code' => $row['old_code']??null,
                                'opening_balance' => 0,
                                'account_type' => 'both',
                                'is_parent' => 0,
                                'parent_id' => $parent->id,
                                'group_id' => $parent->group_id,
                                'creator_id' => auth()->user()->id,
                            ]); */

                            $data = app(AccountMySqlRepository::class)->storeFromSupplier($parent->id, $row['name'], $row['opening_balance']??0);
        
                            $account = Account::find($data['account_id']);
                            $account->update(['old_code'=>$row['old_code']??'']);

                            $address = Address::create([ 
                                'address' => $row['address'],
                                'phone' => $row['address_phone'],
                                'name' => $row['address_name'],
                                'zip_code' => $row['zip_code'],
                                'state_id' => $row['state_id'],
                                'city_id' => $row['city_id'],
                                'country_id' => $row['country_id'],
                            ]);
                            
                            /* if($row['is_same_shipping_address']!=1){
                            
                                $billingAddress = Address::create([
                                    'address' => $row['billing_address'],
                                    'phone' => $row['billing_address_phone'],
                                    'name' => $row['billing_address_name'],
                                    'zip_code' => $row['billing_zip_code'],
                                    'state_id' => $row['billing_state_id'],
                                    'city_id' => $row['billing_city_id'],
                                    'country_id' => $row['billing_country_id'],
                                ]);
                            } */
                            
        
                            
                            
                            
                        /*  $account = Account::create($account); */
                            Supplier::create([
                                'code' => $account->code,
                                'name' => $row['name'],
                                'contact' => $row['contact'],
                                'email' => $row['email'],
                                /* 'currency_id' => $row['currency_id'], */
                                'prefix' => $row['prefix'],
                                'tax_id' => $row['tax_id'],
                                'address_id' => $address->id,
                                /* 'billing_address_id' => $billingAddress->id??$address->id, */
                                'billing_address_id' => $address->id,
                                'parent_account_id' => $parent->id,
                                'account_id' => $account->id,
                                'creator_id' => auth()->user()->id,
                            ]);
                        
                            
                        }else{
                            array_push($arrayErros,['row_number'=>0,'error'=>"This parent account code '".$parent->code."' has an account that has a code with the maximum value."]);
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
            /* 'email' => 'required|max:255|email|unique', */
            // 'account_group_code' => 'required|exists:groups,code',
            // 'opening_balance' => 'numeric',
            // 'account_type' => ['required', Rule::in(['Cr', 'Dr', 'Both'])],
            // 'account_parent_code' => 'nullable|exists:accounts,code',
        ];

    }


    private function generateParentCode(int $parentId,$row)
    {


            $parentAccount = Account::find($parentId);

            
            $lastChild = Account::where('parent_id', $parentId)
               /*  ->where('is_parent', 0)     */                                                                                                           
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


}
