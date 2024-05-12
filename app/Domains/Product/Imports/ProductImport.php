<?php

namespace App\Domains\Product\Imports;

use App\Domains\Account\Models\Account;
use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\Brand\Models\Brand;
use App\Domains\Product\Models\Product;
use App\Domains\Group\Models\Group;
use App\Domains\Product\Repositories\ProductMySqlRepository;
use App\Domains\ProductCodeCriteria\Models\ProductCodeCriteria;
use App\Domains\Supplier\Models\Supplier;
use App\Domains\Tax\Models\Tax;
use App\Domains\UnitType\Models\UnitType;
use App\Domains\Vendor\Models\Address;
use Exception;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;


class ProductImport implements ToCollection, WithValidation, WithHeadingRow
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
                    !$row->has('code')||
                    !$row->has('name')||
                    !$row->has('description')||
                    !$row->has('quantity')||
                    !$row->has('opening_stock')||
                    !$row->has('selling_price')||
                    !$row->has('purchase_price')||
                    !$row->has('taxes_id')||
                    !$row->has('unit_code')||
                    !$row->has('brand_code')||
                    !$row->has('supplier_code')
                    ){
                        array_push($arrayErros,['row_number'=>0,'error'=>"Invalid file. Please ensure that the column names match the example file."]);
                    break;  
                }else{
                    if(
                        $row['name']||
                        isset($row['opening_stock'])
                      
                        ){

                            if(
                                !$row['name']||
                                !isset($row['opening_stock'])
                                ){
                                    array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please fill all data"]);
                                }else{
                                   
                                    $checkCodeCriteriaSupplier = ProductCodeCriteria::where('type','alphanumeric')->where('supplier',1)->first();
                                    $checkCodeCriteriaUnitType = ProductCodeCriteria::where('type','alphanumeric')->where('unitType',1)->first();
                                    $checkCodeCriteriaCategory = ProductCodeCriteria::where('type','alphanumeric')->where('category',1)->first();
                                    $checkCodeCriteriaSupplier = ProductCodeCriteria::where('type','alphanumeric')->where('supplier',1)->first();
                                    if(!$checkCodeCriteriaSupplier&&
                                        !$checkCodeCriteriaUnitType&&
                                        !$checkCodeCriteriaCategory&&
                                        !$checkCodeCriteriaSupplier)
                                    {
                                        if( !$row['code']){
                                            array_push($arrayErros,['row_number'=>$key+2,'error'=>"Please enter a code"]);
                                        }else{
                                            $existsCodeBeforeInProduct = Product::where('code',$row['code'])->first();
                                            if($existsCodeBeforeInProduct){

                                                array_push($arrayErros,['row_number'=>$key+2,'error'=>"This product already exists before in products '".$row['name']."'"]);
                                            }
                                        }
                                    }else{
                                        if(isset($row['supplier_code'])){
                                            $existsBeforeSupplier= Supplier::where('code',$row['supplier_code'])->first();
                                            if(!$existsBeforeSupplier){
                                                array_push($arrayErros,['row_number'=>$key+2,'error'=>"This account does not exist before in suppliers "]);
                                            }
                                        }
                                        if(isset($row['taxes_id'])){
                                            $existsBeforeTaxe = Tax::find($row['taxes_id']);
                                            if(!$existsBeforeTaxe){
                                                array_push($arrayErros,['row_number'=>$key+2,'error'=>"Taxe code does not exist before"]);
                                            }
                                        }
                                        if(isset($row['unit_code'])){
                                            $existsBeforeUnit = UnitType::where('code',$row['unit_code'])->first();
                                            if(!$existsBeforeUnit){
                                                array_push($arrayErros,['row_number'=>$key+2,'error'=>"Unit code does not exist before"]);
                                            }
                                        }
                                        if(isset($row['brand_code'])){
                                            $existsBeforeBrand = Brand::where('code',$row['brand_code'])->first();
                                            if(!$existsBeforeBrand){
                                                array_push($arrayErros,['row_number'=>$key+2,'error'=>"Brand code does not exist before"]);
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
                foreach ($rows as $row) {
                    $data = [
                        "code" => $row["code"]??'',
                        "name" => $row["name"],
                        "description" => $row["description"]??'',
                        "quantity" => $row["quantity"]??'',
                        "opening_stock" => $row["opening_stock"]??'',
                        "selling_price" => $row["selling_price"]??'',
                        "purchase_price" => $row["purchase_price"]??'',
                        "taxes_id" => $row["taxes_id"]??null,
                        "unit_id" => isset($row['unit_code'])?UnitType::where('code',$row['unit_code'])->first()->id:null,
                        "brand_id" => isset($row['brand_code'])?Brand::where('code',$row['brand_code'])->first()->id:null,
                        "supplier_id" => isset($row['supplier_code'])?Supplier::where('code',$row['supplier_code'])->first()->id:null,
                    ];      
                    app(ProductMySqlRepository::class)->storeFromImport($data);

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
