<?php

namespace App\Domains\Account\Imports;

use App\Domains\Account\Models\Account;
use App\Domains\Group\Models\Group;
use Exception;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;



class AccountsImport implements ToCollection, WithValidation, WithHeadingRow
{

    use Importable;
    public $importErrors = [];

    public function collection(Collection $rows)
    {
        \Log::info($rows);
        $arrayParentErros = [];
        $arraySubErros = [];
        
        /* ======================= check error ================ */
         /*  accounts level 3 */
         foreach ($rows as $key => $row) {
            if( $row->has('account_group_code')){

                if(!$row->has('opening_balance')||!$row->has('account_type')){
                    
                    array_push($arrayParentErros,['row_number'=>0,'error'=>"Invalid File. Please ensure that the column names match the example file."]);
                    break;  
                }else
                if( !$row->has('account_group_code') && !$row->has('account_name') && !$row->has('is_parent') ){

                    array_push($arrayParentErros,['row_number'=>0,'error'=>"Invalid File"]);
                    break;  
                }else if(!$row->has('is_parent')){

                    array_push($arrayParentErros,['row_number'=>0,'error'=>"Column 'is_parent' Not Found."]);
                    break;  
                }else if(!$row->has('account_name')){
                    
                    array_push($arrayParentErros,['row_number'=>0,'error'=>"Column 'account_name' Not Found."]);
                    break;  
                }else if($row->has('account_group_code')){

                    if (isset($row['account_group_code'])) {
                        if($row['account_name']){
                            $group = Group::where('code', $row['account_group_code'])->first();
                            if($group){
                            
                                $existsBefore = Account::where('name',$row['account_name'])->where('is_parent', $row['is_parent'])->where('group_id',$group->id)->first();
                                if($existsBefore){
                                    array_push($arrayParentErros,['row_number'=>$key+2,'error'=>"This account already exists before '".$row['account_name']."'"]);
                                }

                                
                            }else {
                                array_push($arrayParentErros,['row_number'=>$key+2,'error'=>"Group not found '".$row['account_name']."'"]);
                                
                            }
                        
                        } else {
                            array_push($arrayParentErros,['row_number'=>$key+2,'error'=>"Name Not Found"]);
                            
                            
                        }
                    }
                    
                }else{
                    array_push($arrayParentErros,['row_number'=>0,'error'=>"Column 'account_group_code' Not Found."]);
                    break;  
                }
            }
        }
     
        /*  sub perent accounts */
        foreach ($rows as $key => $row) {
            
            if( $row->has('parent_code')){
                if(!$row->has('opening_balance')||!$row->has('account_type')){
                    
                    array_push($arraySubErros,['row_number'=>0,'error'=>"Invalid File. Please ensure that the column names match the example file."]);
                    break;  
                }else
                if( !$row->has('parent_code') && !$row->has('account_name') && !$row->has('is_parent') ){

                    array_push($arraySubErros,['row_number'=>0,'error'=>"Invalid File"]);
                    break;  
                }else if(!$row->has('is_parent')){

                    array_push($arraySubErros,['row_number'=>0,'error'=>"Column 'is_parent' Not Found."]);
                    break;  
                }else if(!$row->has('account_name')){
                    
                    array_push($arraySubErros,['row_number'=>0,'error'=>"Column 'account_name' Not Found."]);
                    break;  
                }else if($row->has('parent_code')){
                    if (isset($row['is_parent']) && $row['is_parent'] == 1 && isset($row['parent_code'])) {
                            if($row['account_name']){
                                
                                $parentaccount = Account::where('code', $row['parent_code'])->first();
                                
                                if($parentaccount){
                                
                                    
                                    $existsBefore = Account::where('name',$row['account_name'])->where('parent_id',$parentaccount->id)->where('is_parent', $row['is_parent'])->first();
                                    if($existsBefore){
                                        
                                        array_push($arraySubErros,['row_number'=>$key+2,'error'=>"This account already exists before '".$row['account_name']."'"]);
                                    }
                                    
                                    
                                }else {
                                    array_push($arraySubErros,['row_number'=>$key+2,'error'=>"Parent Code Not Found '".$row['account_name']."'"]);
                                    
                                }
                                
                            }else {
                                array_push($arraySubErros,['row_number'=>$key+2,'error'=>"Name Not Found"]);
                                
                            }
                        }
                }else {
                    array_push($arraySubErros,['row_number'=>0,'error'=>"Column 'parent_code' Not Found."]);
                    break;  
                }
            }
            
        }
        
        /*  sub accounts */
        foreach ($rows as $key => $row) {
            if( $row->has('parent_code')){
                if(!$row->has('opening_balance')||!$row->has('account_type')){
                    
                    array_push($arraySubErros,['row_number'=>0,'error'=>"Invalid File. Please ensure that the column names match the example file."]);
                    break;  
                }else
                if( !$row->has('parent_code') && !$row->has('account_name') && !$row->has('is_parent') ){

                    array_push($arraySubErros,['row_number'=>0,'error'=>"Invalid File"]);
                    break;  
                }else if(!$row->has('is_parent')){

                    array_push($arraySubErros,['row_number'=>0,'error'=>"Column 'is_parent' Not Found."]);
                    break;  
                }else if(!$row->has('account_name')){
                    
                    array_push($arraySubErros,['row_number'=>0,'error'=>"Column 'account_name' Not Found."]);
                    break;  
                }else if($row->has('parent_code')){
                    if( $row['is_parent'] != 1 &&  isset($row['parent_code']) ) {
                        if(!isset($row['account_type'])){
                            array_push($arraySubErros,['row_number'=>$key+2,'error'=>"Account Type Not Found"]);
                        }
                        if($row['account_name']){
                            $parent = Account::where('code', $row['parent_code'])->first();
                            
                            if($parent&&$parent->is_parent){
                                
                                $existsBefore = Account::where('name',$row['account_name'])->where('is_parent', $row['is_parent'])->where('parent_id',$parent->id)->first();
                                if($existsBefore){
            
                                    
                                    array_push($arraySubErros,['row_number'=>$key+2,'error'=>"This account already exists before '".$row['account_name']."'"]);
                                }
                                
                                
                            }else {
                                array_push($arraySubErros,['row_number'=>$key+2,'error'=>"Parent Code Not Found '".$row['account_name']."'"]);
                                
                            }
                        }else {
                            array_push($arraySubErros,['row_number'=>$key+2,'error'=>"Name Not Found"]);
                            
                            
                        }
                    }
                }else {
                    array_push($arraySubErros,['row_number'=>0,'error'=>"Column 'parent_code' Not Found."]);
                    break;  
                }
            }
        }

        
        /* ========================================== if all rows have not errors ============ */
        /*  accounts level 3 */
        if(count($arrayParentErros)==0){
            try {
                DB::beginTransaction();
                foreach ($rows as $key => $row) {
                    if( $row->has('account_group_code')){
                        if ( isset($row['account_group_code'])) {
                            
                            $group = Group::where('code', $row['account_group_code'])->first();
                            $code = $this->generateParentCode($group->id, $row);
                            if($code!=-1){
                                $account =[];
                                $parent =[];
                            
                                if($row->has('old_code')&&isset($row['old_code'])){
                                
                                    $account =  [
                                        'name' => $row['account_name'],
                                        'code' => $code,
                                        'old_code' => $row['old_code'],
                                        'group_id' => $group->id,
                                        'creator_id' => auth()->user()->id,
                                    ];
                                }else{

                                    $account = [
                                        'name' => $row['account_name'],
                                        'code' => $code,
                                        'group_id' => $group->id,
                                        'creator_id' => auth()->user()->id,
                                    ];
                                }
                                if(isset($row['is_parent']) && $row['is_parent'] == 1 ){
                                    $parent = [

                                        'opening_balance' => 0,
                                        'account_type' => 'both',
                                        'is_parent' => 1,
                                    ];
                                    
                                }else{
                                    $parent = [
                                        'opening_balance' => $row['opening_balance']?$row['opening_balance']:0,
                                        'account_type' => $row['account_type']?$row['account_type']:'both',
                                        'is_parent' =>  0
                                    ];

                                }
                                $account = array_merge($account,$parent);
                                Account::create($account);
                            }
                        } 
                    }
                }
                DB::commit();
            } catch (Exception $e) {
                DB::rollBack();
                array_push($arrayParentErros,['row_number'=>0,'error'=>"Please check if data is correct."]);
            }
        }
        if(count($arraySubErros)==0){
            /*  sub accounts */
            try {
                DB::beginTransaction();
                foreach ($rows as $key => $row) {
                    
                    if( $row->has('parent_code')){
                        if (isset($row['is_parent']) && $row['is_parent'] == 1 && isset($row['parent_code'])) {
                            
                            $parentaccount = Account::where('code', $row['parent_code'])->first();
                            
                            $code =$this->generateParentCode($parentaccount->id, $row);
                        
                                if($code!=-1){

                                    $account =[];

                                    $account = [
                                        'name' => $row['account_name'],
                                        'opening_balance' => 0,
                                        'account_type' => 'both',
                                        'is_parent' => 1,
                                        'code' => $this->generateParentCode($parentaccount->id, $row),
                                        'old_code' => $row->has('old_code')&&isset($row['old_code'])?$row['old_code']:'',
                                        'parent_id' => $parentaccount->id,
                                        'group_id' => $parentaccount->group->id,
                                        'creator_id' => auth()->user()->id,
                                    ];
                            
                                    Account::create($account);
                                    
                                }
                        }else  if($row['is_parent'] != 1 &&  isset($row['parent_code'])) {
                            $parent = Account::where('code', $row['parent_code'])->first();

                            $code = $this->generateParentCode($parent->id,$row);

                            if($code!=-1){
                                $account =[];
                                    $account = [
                                        'name' => $row['account_name'],
                                        'opening_balance' => $row['opening_balance']?$row['opening_balance']:0,
                                        'account_type' => $row['account_type']??'both',
                                        'is_parent' => 0,
                                        'code' => $code,
                                        'old_code' => $row->has('old_code')&&isset($row['old_code'])?$row['old_code']:'',
                                        'parent_id' => $parent->id,
                                        /* 'group_id' => $parent->group_id, */
                                        'group_id' => $parent->group->id,
                                        'creator_id' => auth()->user()->id,
                                    ];
                                
                                
                                Account::create($account);
                            }

                            
            
                        }
                    }
                }   
                DB::commit();
            } catch (Exception $e) {
                DB::rollBack();
                array_push($arraySubErros,['row_number'=>0,'error'=>"Please check if data is correct."]);
            }
        }

        if (count($arrayParentErros) > 0 || count($arraySubErros) > 0) {
            $this->importErrors = [
                'errors_parent' => $arrayParentErros,
                'errors_sub' => $arraySubErros,
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


    private function generateCode(int $parentId)
    {
       /*  $parentAccount = Account::findOrFail($parentId); */
        $parentAccount = Account::find($parentId);

        $lastChild = Account::where('parent_id', $parentAccount->id)
            ->where('is_parent', 0)
            ->orderBy('id', 'desc')
            ->first();

        $lastAccountCode = $lastChild ? ($lastChild->code + 1) : $parentAccount->code . '001';
        $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT);

        return $code;
    }

    private function generateParentCode(int $parentId, $row)
    {
        if ($row->has('account_group_code')&&isset($row['account_group_code'])) {

            $group = Group::find($parentId);
/*             $lastParentAccount = Account::where('code', 'like', $group->code . '%')
                ->where('is_parent', 1)
                ->whereRaw('LENGTH(code) = ?', [5])
                ->orderBy('id', 'desc')
                ->first(); */
            /* $lastAccountCode = $lastParentAccount ? ($lastParentAccount->code + 1) : $group->code . '01'; */
            /* $code = str_pad($lastAccountCode, 5, '0', STR_PAD_LEFT); */
            $lastAccount = Account::where('code', 'like', $group->code . '%')
                /* ->where('is_parent', 1) */
                ->whereRaw('LENGTH(code) = ?', [5])
                ->orderBy('code', 'desc')
                ->first();
                $limit = $group->code."99";
                if($lastAccount){
                    if($lastAccount->code<$limit){
                        
                        $code = $lastAccount->code + 1;
                    }else{
                        $code = -1;
                    }
                }else {
                    $code =  $group->code . '01';
                    
                }

        } elseif ($row->has('parent_code')&&isset($row['parent_code'])) {

         /*    $parentAccount = Account::findOrFail(request()->parent_account_id); */
            $parentAccount = Account::find($parentId);

            $lastChild = Account::where('parent_id', $parentAccount->id)
                /* ->where('is_parent', 1) */                                                                                                               
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

          /*   $lastAccountCode = $lastChild ? ($lastChild->code + 1) : $parentAccount->code . '001';
            $code = str_pad($lastAccountCode, strlen($lastAccountCode), '0', STR_PAD_LEFT); */
        }

        return $code;
    }

    private function findBaseParent($account)
    {
        // Recursive function to find the top-level parent
        if ($account->parent) {
            return $this->findBaseParent($account->parent);
        }

        return $account;
    }

}
