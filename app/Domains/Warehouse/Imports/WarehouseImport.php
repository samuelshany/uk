<?php

namespace App\Domains\Warehouse\Imports;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\User\Models\User;
use App\Domains\Vendor\Models\Address;
use App\Domains\Warehouse\Models\Warehouse;
use Exception;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;


class WarehouseImport implements ToCollection, WithValidation, WithHeadingRow
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
                    !$row->has('parent_account_code')||
                    !$row->has('description')||
                    !$row->has('user_id')||
                    !$row->has('address_name')||
                    !$row->has('address')||
                    !$row->has('phone')||
                    !$row->has('country_id')||
                    !$row->has('state_id')||
                    !$row->has('city_id')||
                    !$row->has('zip_code')
                    ){
                        $arrayErros = ['row_number'=>0,'error'=>"Invalid file. Please ensure that the column names match the example file."];
                    break;  
                }else{
                    if(
                        $row['name']||
                        isset($row['account_code'])
                      
                        ){

                            if(
                                !$row['name']||
                                !isset($row['parent_account_code'])
                                ){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please fill all data"]);
                                }else{
                                    
                                    $parent = Account::where('code',$row['parent_account_code'])->first();
                                    if(!$parent){
                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"This parent account code does not exist"]);
                                    }else{
                                        $existsBefore = Account::where('name',$row['name'])->where('parent_id',$parent->id)->first();
                                        if($existsBefore){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"This warehouse already exists before"]);
                                        }
                                    }
                                    
                                    if($row['user_id'])
                                    {
                                        $user = User::find($row['user_id']);
                                        if(!$user){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"This user id does not exist"]);
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
                foreach ($rows as $row) {

                    $address = null;
                    if(
                        $row['address']&&
                        isset($row['zip_code'])&&
                        isset($row['state_id'])&&
                        isset($row['city_id'])&&
                        isset($row['country_id'])
                    ){
                        $address = Address::create([ 
                            'address' => $row['address'],
                            'phone' => $row['phone']??null,
                            'name' => $row['address_name']??null,
                            'zip_code' => $row['zip_code'],
                            'state_id' => $row['state_id'],
                            'city_id' => $row['city_id'],
                            'country_id' => $row['country_id'],
                        ]);
                    }


                    $data = [
                        "name" => $row["name"],
                        "parent_account_code" => $row["parent_account_code"],
                        "description" => $row["description"]??null,
                        "assigned_id " => $row["assigned_id"]??null,
                    ];      
                    $account = app(AccountMySqlRepository::class)->storeFromImport($data);
                    Warehouse::create([
                        'name' => $row["name"],
                        'description' => $row["description"]??null,
                        'address_id' => $address?$address->id:null,
                        'account_id' => $account["account_id"],
                        'assigned_id' => $row["user_id"]??null, 
                        'creator_id' => auth()->user()->id
                    ]);

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
