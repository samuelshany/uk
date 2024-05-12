<?php

namespace App\Domains\Group\Imports;

use App\Domains\Account\Models\Account;
use App\Domains\Group\Models\Group;
use App\Domains\GroupType\Models\GroupType;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Collection;
use PhpOffice\PhpSpreadsheet\Calculation\Statistical\Maximum;

class GroupsImport implements ToCollection, WithValidation, WithHeadingRow
{
    use Importable;
    public $importErrors = [];
    
    
    public function collection(Collection $rows)
    {
        $arrayGroupErrors = [];

        foreach ($rows as $key => $row){
            /* dd($row->has('group_type_code'));  */               
            if(!$row->has('group_type_code')&&!$row->has('name')){

                array_push($arrayGroupErrors,['row_number'=>0,'error'=>"Invalid File. Please ensure that the column names match the example file."]);
                break;
            }else if(!$row->has('name')){
                
                array_push($arrayGroupErrors,['row_number'=>0,'error'=>"Column 'name' Not Found."]);
                break;
            }else if($row->has('group_type_code')){
                if( isset($row['group_type_code'])){
                    if($row['name']){
                        $group_type = GroupType::find($row['group_type_code']);
                        if(!$group_type){
                            
                            array_push($arrayGroupErrors,['row_number'=>$key+2,'error'=>"Group Typ Code Not Found. '".$row['group_type_code']."'"]);
                        }else{
                            $groupeExitsBefore = Group::where('group_type_id',$group_type->id)->where('name',$row['name'])->first();
                            
                            if($groupeExitsBefore){
                                array_push($arrayGroupErrors,['row_number'=>$key+2,'error'=>"This account already exists. '".$row['name']."'"]);
                            }
                        }
                        
                        
                    }else{
                        array_push($arrayGroupErrors,['row_number'=>$key+2,'error'=>"Name Not Found"]);
                    }
                }
            }
           else{
                
                array_push($arrayGroupErrors,['row_number'=>0,'error'=>"Column 'group_type_code' Not Found"]);
                break;  

            }
            
        }
        
        if(count($arrayGroupErrors)==0){
            foreach ($rows as $key => $row) {
                if ( isset($row['group_type_code'])) {
                    $group_type = GroupType::find($row['group_type_code']);

                    $code = $this->generateCode($group_type->code);
                    
                    if($code!=-1){
                        $account =[];
                        if($row->has('old_code')&&isset($row['old_code'])){
                            $account = [
                                'name' => $row['name'],
                                'code' => $code,
                                'group_type_id' => $group_type->id,
                                'old_code' => $row['old_code'],
                                'creator_id' => auth()->user()->id,
                                'created_at' => now(),
                            ];    
                        }else{
                            $account = [
                                'name' => $row['name'],
                                'code' => $code,
                                'group_type_id' => $group_type->id,
                                'creator_id' => auth()->user()->id,
                                'created_at' => now(),
                            ];
                        }
                        Group::create($account);
                    }else{
                        array_push($arrayErros,['row_number'=>0,'error'=>"This group type code '".$group_type->code."' has an account that has a code with the maximum value."]);
                    }
                
                } 
            }
        }
                
        if (count($arrayGroupErrors) > 0 ) {
            $this->importErrors  = [
                'errors'=>$arrayGroupErrors
            ];
            return;
        }
    }

    public function generateCode($group_type_code){
        $last_group = Group::where('code','like',$group_type_code.'%')->orderBy('code','desc')->first();
        
            $limit = $group_type_code."99";
            if($last_group){
                if($last_group->code<$limit){

                    $code = $last_group->code+1; 
                }else{
                    $code = -1;
                }
            }else{
                $code = $group_type_code.'01' ;
            }
            return $code;
        }

    
    public function rules(): array
    {
        return [

/*             'name' => 'required|regex:/^[a-zA-Zگچپژیلفقهكيىموي ء-ي\s]*$/',
            '*.name' => 'required|regex:/^[a-zA-Zگچپژیلفقهكيىموي ء-ي\s]*$/', */
/*             'code' => 'required', */
/*             '*.code' => 'required', */
/*             'group_type_code' => [
                'required', */
                // Rule::when($this->is_account_parent == 0, ['exists:group_types,id']),
                // Rule::when($this->is_account_parent == 1, ['exists:groups,id'])
            /* ] */

        ];
    }
    public function customValidationMessages()
    {
        return [
           /*  'group_type_code.exists' => 'The selected value of row number :attribute does not exists in Groups or Group Types.', */
   /*          'code.required' => 'The selected value of row number :attribute is required', */
/*             'name.required' => 'The selected value of row number :attribute is required',
            'name.regex' => 'The selected value of row number :attribute is contains invalid character', */

        ];
    }

}
