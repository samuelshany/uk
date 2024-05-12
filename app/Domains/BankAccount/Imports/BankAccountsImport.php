<?php

namespace App\Domains\BankAccount\Imports;

use App\Domains\Account\Models\Account;
use App\Domains\BankAccount\Models\BankAccount;
use App\Domains\Currency\Models\Currency;
use App\Domains\Group\Models\Group;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\FixedAsset\Models\FixedAsset;
use Exception;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class BankAccountsImport implements  ToCollection, WithValidation, WithHeadingRow
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
                !$row->has('bank_name')||
                !$row->has('account_number')||
                !$row->has('holder_name')||
                !$row->has('account_type')||
                !$row->has('account_currency_code')||
                !$row->has('opening_balance')||
                !$row->has('parent_account_code')||
                !$row->has('parent_expenses_account_code')||
                !$row->has('authorized_by')||
                !$row->has('bank_branch')
                
               
                ){
                
                    array_push($arrayErros,['row_number'=>0,'error'=>"Invalid file. Please ensure that the column names match the example file."]);
                break;  
            }else{
                if(
                    $row['bank_name']||
                    $row['holder_name']||
                    $row['account_type']||
                    $row['authorized_by']||
                    isset($row['account_number'])||
                    $row['account_currency_code']||
                    isset($row['opening_balance'])||
                    isset($row['parent_account_code'])||
                    isset($row['parent_expenses_account_code'])
                    ){

                        if(
                            !$row['bank_name']||
                            !$row['holder_name']||
                            !$row['account_type']||
                            !$row['authorized_by']||
                            !isset($row['account_number'])||
                            !$row['account_currency_code']||
                            !isset($row['opening_balance'])||
                            !isset($row['parent_account_code'])||
                            !isset($row['parent_expenses_account_code'])
                            ){
                                array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please fill all data"]);
                            }else{
    
                                $parent = Account::where('code',$row['parent_account_code'])->first();
                                
                                if(!$parent){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Can't find parent account '".$row['bank_name']."'"]);
                                }else{
                                    $existsBeforeInBankAccount = BankAccount::where('account_number',$row['account_number'])->first();
                                    $existsBeforeInAccount = Account::where('name',$row['bank_name'])->where('parent_id',$parent->id)->first();
                                    if($existsBeforeInBankAccount){
                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in bank accounts '".$row['bank_name']."'"]);
                                    }
                                    if($existsBeforeInAccount){
                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in chart of accounts '".$row['bank_name']."'"]);
                                    }

                                }

                                $parentExpenses = Account::where('code',$row['parent_expenses_account_code'])->first();
                                if(!$parentExpenses){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Can't find parent account expenses '".$row['bank_name']."'"]);
                                }else{
                                    $existsBeforeInBankAccount = BankAccount::where('account_number',$row['account_number'])->first();
                                    $existsBeforeInAccount = Account::where('name',$row['bank_name'])->where('parent_id',$parentExpenses->id)->first();
                                    if($existsBeforeInBankAccount){
                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in bank accounts '".$row['bank_name']."'"]);
                                    }
                                    if($existsBeforeInAccount){
                                        array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account already exists before in chart of accounts expenses '".$row['bank_name']."'"]);
                                    }
                                    
                                    
                                }
                                $currency = Currency::where('code', $row['account_currency_code'])->first();
                                if(!$currency){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Currency code incorrect '".$row['bank_name']."'"]);
                                }

                                $flagDuplicated = false;
                                foreach ($rows as $key2 => $row2) {
                                    if($key!=$key2){
                                        if($row['account_number'] == $row2['account_number']){
                                            $flagDuplicated =true;
                                        }
                                    }
                                }
                                if($flagDuplicated){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account number is duplicated '".$row['bank_name']."'"]);

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
                if(isset($row['parent_account_code'])&&isset($row['parent_expenses_account_code'])){

                    $parent = Account::where('code', $row['parent_account_code'])->first();
                    $parentExpenses = Account::where('code', $row['parent_expenses_account_code'])->first();
                    $code = $this->generateParentCode($parent->id);
                    $codeExpenses = $this->generateParentCode($parentExpenses->id);

                    if(isset($code)&&$code>0&&isset($codeExpenses)&&$codeExpenses>0){
                        
                        $data = app(AccountMySqlRepository::class)->storeFromBankAccount($parent->id,$parentExpenses->id, $row['bank_name'],$row['opening_balance']??0);

                        BankAccount::create([
                            'code' => $data['account_code'],
                            'name' => $row['bank_name'],
                            'account_number' => $row['account_number'],
                            'holder_name' => $row['holder_name'],
                            'account_type' => $row['account_type'],
                            'parent_account_id' =>$parent->id,
                            'account_id' =>$data['account_id'],
                            'parent_expenses_account_id' =>$parentExpenses->id,
                            'expenses_account_id' =>$data['expenses_account_id'],
                            'currency_id' => Currency::where('code', $row['account_currency_code'])->first()->id,
                            'opening_balance' => $row['opening_balance']??0,
                            'creator_id' => auth()->user()->id,
                            'current_balance' => $row['opening_balance']??0,
                            'authorized_by' => $row['authorized_by'],
                            
                            'bank_branch' => $row['bank_branch'],
                        ]);
                        $account = Account::find($data['account_id']);
                        $accountExpenses = Account::find($data['expenses_account_id']);
                        $account->update(['old_code'=>$row['old_code']??'']);
                        $accountExpenses->update(['old_code'=>$row['old_code']??'']);
                        
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


/*     public function model(array $row)
    {
        return new BankAccount([
            'name' => $row['bank_name'],
            'account_number' => $row['account_number'],
            'holder_name' => $row['holder_name'],
            'account_type' => $row['account_type'],
            'chart_of_account' => $row['chart_of_account'],
            'currency_id' => Currency::where('code', $row['account_currency'])->first()->id,
            'opening_balance' => $row['opening_balance'],
            'authorized_by' => $row['authorized_by'],
            'creator_id' => auth()->user()->id,
        ]);
    } */

    public function rules(): array
    {

        return [
/*             'bank_name' => 'required',
            'account_number' => 'required|unique:bank_accounts,account_number|numeric',
            'holder_name' => 'nullable',
            'authorized_by' => 'nullable',
            'account_type' => 'required',
            'account_currency' => 'required|exists:currencies,code',
            'chart_of_account' => 'required',
            'opening_balance' => 'required|numeric|gt:0', */
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


}
