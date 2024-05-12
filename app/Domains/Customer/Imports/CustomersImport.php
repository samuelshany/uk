<?php

namespace App\Domains\Customer\Imports;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\Customer\Models\Customer;
use App\Domains\Group\Models\Group;
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


class CustomersImport implements ToCollection, WithValidation, WithHeadingRow
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
                    !$row->has('email')||/* 
                    !$row->has('currency_id')|| */
                    !$row->has('parent_account_code')||
                    !$row->has('address')||
                    !$row->has('country_id')||
                    !$row->has('city_id')||
                    !$row->has('state_id')||
                    !$row->has('zip_code')||
                    !$row->has('address_name')||
                    !$row->has('address_phone')||
                    !$row->has('is_same_shipping_address')||
                    !$row->has('old_code')||
                    !$row->has('credit_limit')||
                    !$row->has('opening_balance')
                    ){
                        $arrayErros = ['row_number'=>0,'error'=>"Invalid file. Please ensure that the column names match the example file."];
                    break;  
                }else{
                    if(
                        $row['name']||
                        isset($row['contact'])||
                        $row['email']||
                       /*  isset($row['currency_id'])|| */
                        isset($row['parent_account_code'])||
                        $row['address']||
                        isset($row['country_id'])||
                        isset($row['city_id'])||
                        isset($row['state_id'])||
                        isset($row['zip_code'])||
                        $row['address_name']||
                        isset($row['address_phone'])||
                        isset($row['is_same_shipping_address'])
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
                                !isset($row['address_phone'])||
                                !isset($row['is_same_shipping_address'])
                                ){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please fill all data"]);
                                }else{
        
                                    if($row['is_same_shipping_address']!=1){
                                        if(
                                            !$row->has('billing_address')||
                                            !$row->has('billing_country_id')||
                                            !$row->has('billing_city_id')||
                                            !$row->has('billing_state_id')||
                                            !$row->has('billing_zip_code')||
                                            !$row->has('billing_address_name')||
                                            !$row->has('billing_address_phone')
                                        ){
                                            
                                            $arrayErros = ['row_number'=>0,'error'=>"Invalid File. Please ensure that the column names match the example file."];
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
                                        
                                    }
                                    $parent = Account::where('code',$row['parent_account_code'])->first();
                                    if(!$parent){
                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"Can't find parent account '".$row['name']."'"]);
                                    }else{
                                        $existsBeforeInCustomer = Customer::where('email',$row['email'])->first();
                                        $existsBeforeInAccount = Account::where('name',$row['name'])->where('parent_id',$parent->id)->first();
                                        if($existsBeforeInCustomer){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in customers '".$row['name']."'"]);
                                        }
                                        if($existsBeforeInAccount){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in chart of accounts '".$row['name']."'"]);
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

                        $data = app(AccountMySqlRepository::class)->storeFromCustomer($parent->id, $row['name'], $row['opening_balance']??0);
                        
    
                        $account = Account::find($data['account_id']);
                        $account->update(['old_code'=>$row['old_code']??'','credit_limit'=>$row['credit_limit']??'']);

                        $address = Address::create([ 
                            'address' => $row['address'],
                            'phone' => $row['address_phone'],
                            'name' => $row['address_name'],
                            'zip_code' => $row['zip_code'],
                            'state_id' => $row['state_id'],
                            'city_id' => $row['city_id'],
                            'country_id' => $row['country_id'],
                        ]);
                        
                        if($row['is_same_shipping_address']!=1){
                        
                            $billingAddress = Address::create([
                                'address' => $row['billing_address'],
                                'phone' => $row['billing_address_phone'],
                                'name' => $row['billing_address_name'],
                                'zip_code' => $row['billing_zip_code'],
                                'state_id' => $row['billing_state_id'],
                                'city_id' => $row['billing_city_id'],
                                'country_id' => $row['billing_country_id'],
                            ]);
                        }
                        
                        
                    /*  $account = Account::create($account); */
                        Customer::create([
                            'code' => $data['account_code'],
                            'name' => $row['name'],
                            'contact' => $row['contact'],
                            'email' => $row['email'],
                            'customer_number' => $data['customer_number'],
                            'credit_limit' => $row['credit_limit']??0,
                            'parent_account_id' => $parent->id,
                            'account_id' => $data['account_id'],
                            'address_id' => $address->id,
                            'billing_address_id' => $billingAddress->id??$address->id,
                            'creator_id' => auth()->user()->id,
                        ]);
                        
                            
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
            // 'account_name' => 'required',
            // 'account_group_code' => 'required|exists:groups,code',
            // 'opening_balance' => 'numeric',
            // 'account_type' => ['required', Rule::in(['Cr', 'Dr', 'Both'])],
            // 'account_parent_code' => 'nullable|exists:accounts,code',
        ];

    }




}
