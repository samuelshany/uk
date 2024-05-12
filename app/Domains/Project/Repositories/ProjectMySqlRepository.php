<?php

namespace App\Domains\Project\Repositories;

use App\Domains\Account\Repositories\AccountMySqlRepository;
use App\Domains\JournalEntry\Models\JournalEntryDetail;
use App\Domains\JournalEntry\Resources\JorrnalEntryDetailsFileResource;
use App\Domains\Project\Interfaces\ProjectRepositoryInterface;
use App\Domains\Project\Models\Project;
use App\Domains\Project\Models\ProjectAssignment;
use App\Domains\Project\Models\WorkClause;
use App\Domains\ProjectManagementCategory\Models\ProjectManagementCategory;
use App\Domains\ProjectsPayment\Models\ProjectsPayment;

use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use niklasravnsborg\LaravelPdf\Facades\Pdf;

class ProjectMySqlRepository implements ProjectRepositoryInterface
{
    public function __construct(private Project $project)
    {
    }
    public function findById(string $id): Project
    {
        $project = $this->project::findOrFail($id);
        return $project;
    }
    public function findPorjectAssignment(string $id): ProjectAssignment
    {
        $projectAssignment = ProjectAssignment::findOrFail($id);
        return $projectAssignment;
    }
    public function listPorjectAssignments(string $id)
    {
        $project = $this->project::findOrFail($id);
        return $project->projectAssignments;
    }
    public function list()
    {
        $limit = request('limit', config('app.pagination_count'));
        $query = Project::when(request()->project_name, function ($q) {
            $q->where('project_name', 'like', '%' . request()->project_name . '%');
        })
        ->when(request()->client_information_id, function ($q) {
            $q->where('client_information_id', request()->client_information_id);
        })
        ->when(request()->start_date, function ($q) {
            $q->whereDate('start_date', '>=', request()->start_date);
        })
        ->when(request()->end_date, function ($q) {
            $q->whereDate('end_date', '<=', request()->end_date);
        })
        ->when(request()->project_description, function ($q) {
            $q->where('project_description', 'like', '%' . request()->project_description . '%');
        })
        ->when(request()->downpayment_option, function ($q) {
            $q->where('downpayment_option', request()->downpayment_option);
        })
        ->when(request()->assigned_engineer, function ($q) {
            $q->where('assigned_engineer', 'like', '%' . request()->assigned_engineer . '%');
        })
        ->when(request()->assigned_engineer_id, function ($q) {
            $q->where('assigned_engineer_id', request()->assigned_engineer_id);
        })
        ->when(request()->milestone, function ($q) {
            $q->where('milestone', request()->milestone);
        })
        ->when(request()->deadline, function ($q) {
            $q->whereDate('deadline', '=', request()->deadline);
        })
        ->when(request()->price, function ($q) {
            $q->where('price', request()->price);
        })
        ->when(request()->estimated_cost, function ($q) {
            $q->where('estimated_cost', request()->estimated_cost);
        })
        ->when(request()->assigned_budget, function ($q) {
            $q->where('assigned_budget', request()->assigned_budget);
        })
        ->when(request()->downpayment, function ($q) {
            $q->where('downpayment', request()->downpayment);
        })
        ->when(request()->sort_by || request()->sort_type, function ($q) {
            if (in_array(request()->sort_by, ['id', 'title', 'entry_no', 'date', 'description', 'created_at', 'updated_at', 'creator_id'])) {
                $q->orderBy(request()->sort_by, request()->sort_type === 'asc' ? 'asc' : 'desc');
            }
        })->orderBy('created_at', 'desc')->with(['editor', 'creator']);

        if ($limit === 'all') {
            return $query->get();
        } else {
            return $query->paginate($limit);
        }
    }


    public function store($request): bool
    {
        $account = app(AccountMySqlRepository::class)->storeFromProjectManagement($request->parent_account_id,$request->project_name);
        $project = $this->project::create($request->all()+[
            'account_id' => $account['account_id'],
            'creator_id' => auth()->user()->id,
            'editor_id' => auth()->user()->id,
        ]);

        if($request->has('deduction_options')&&$request['deduction_options']) {
            $project->projectDeductionOptions()->attach($request->deduction_options);
        }
        if($request->has('project_phases')&&$request['project_phases']) {
            $project->projectPhases()->attach($request->project_phases);
        }
        if($request->has('suppliers')&&$request['suppliers']) {
            $project->suppliers()->attach($request->suppliers);
        }

        
        if ($request->has('files')&&$request['files']) {
            $project->addMultipleMediaFromRequest(['files']) ->each(function ($file) {
                $file->storingConversionsOnDisk('upload_project')->toMediaCollection('project_attachments','upload_project');
            });
        }


        return true;
    }


    public function storePorjectAssignment(string $id,$request): bool
    {
        $project = $this->project::findOrFail($id);

        
        $reference = $project->projectAssignments()
        ->where('construction_name_id',$request->construction_name_id)
        ->where('work_type_id',$request->work_type_id)
        ->orderBy('id','desc')
        ->first();
        
        try {
            DB::beginTransaction();
            $projectAssignment =  $project->projectAssignments()->create([
                'project_phase_id'=>$request->project_phase_id,
                'construction_name_id'=>$request->construction_name_id,
                'work_type_id'=>$request->work_type_id,
                'reference_number'=>$reference?$reference->reference_number+1:1,
            ]);
    
            if($reference){
    
                $workClausesGroup = $reference->workClauses()
                ->groupBy('ratio','clause_id','unit_id','price')
                ->orderBy('id', 'desc')
                ->latest()
                ->get();
                
                foreach ($workClausesGroup as $work_clause) {
    
                    
                    $projectAssignment->workClauses()->create([
                        'quantity'=>$work_clause->total_amount,
                        'previous_amount'=> $work_clause->total_amount,
                        'total_amount'=>$work_clause->total_amount,
                        'ratio'=>$work_clause->ratio,
                        'notes'=>$work_clause->notes,
                        'price'=>$work_clause->price,
                        'total_price'=>$work_clause->price,
                        'clause_id'=>$work_clause->clause_id,
                        'unit_id'=>$work_clause->unit_id,
                        'project_management_category_id'=>$work_clause->project_management_category_id,
                    ]);
                
                }
            }
    
            foreach ($request->work_clauses as $work_clause) {
                $workClauseReference = $projectAssignment->workClauses()
                ->where('ratio',$work_clause['ratio'])
                ->where('clause_id',$work_clause['clause_id'])
                ->where('price',$work_clause['price'])
                ->where('current_amount',0)
                ->orderBy('id','desc')
                ->first();
    
                if($workClauseReference){
                    $total_price = (($work_clause['ratio']/100)*($work_clause['quantity']+$workClauseReference->previous_amount)* $work_clause['price']);
                    $workClauseReference->update([
    
                        'quantity' => $work_clause['quantity'],
                        'current_amount' => $work_clause['quantity'],
                        'total_amount' => $work_clause['quantity'] + $workClauseReference->previous_amount,
                        'price' => $work_clause['price'],
                        'total_price' => $total_price ,
                    ]);
    
    
                }else{
                    
                    
                    $workClauseReference = $projectAssignment->workClauses()
                        ->where('ratio',$work_clause['ratio'])
                        ->where('clause_id',$work_clause['clause_id'])
                        ->where('unit_id',$work_clause['unit_id']) 
                        ->where('price',$work_clause['price']) 
                        ->orderBy('id','desc')
                        ->first();
    
                    if($workClauseReference){
                        $previous_amount = $workClauseReference->sum('quantity');
                        $previous_total_price = $workClauseReference->sum('total_price');
                        $total_price = (($work_clause['ratio']/100)*($work_clause['quantity']+$previous_amount)* $work_clause['price']);
                        $projectAssignment->workClauses()->create([
                            'quantity'=>$work_clause['quantity'],
                            'previous_amount'=> $previous_amount,
                            'current_amount'=> $work_clause['quantity'],
                            'total_amount'=> $work_clause['quantity']+$previous_amount,
                            'ratio'=>$work_clause['ratio'],
                            'notes'=>isset($work_clause['notes'])?$work_clause['notes']:null,
                            'price'=>$work_clause['price'],
                            'total_price'=>$total_price,
                            'clause_id'=>$work_clause['clause_id'],
                            'unit_id'=>isset($work_clause['unit_id'])?$work_clause['unit_id']:null,
                            'project_management_category_id'=>isset($work_clause['project_management_category_id'])?$work_clause['project_management_category_id']:null,
                        ]);
                    }else{
                        $total_price = ($work_clause['ratio']/100)*$work_clause['quantity']* $work_clause['price'] ;
                 
                        $projectAssignment->workClauses()->create([
                            'quantity'=>$work_clause['quantity'],
                            'current_amount'=> $work_clause['quantity'],
                            'total_amount'=> $work_clause['quantity'],
                            'ratio'=>$work_clause['ratio'],
                            'notes'=>isset($work_clause['notes'])?$work_clause['notes']:null,
                            'price'=>$work_clause['price'],
                            'total_price'=>$total_price,
                            'clause_id'=>$work_clause['clause_id'],
                            'unit_id'=>isset($work_clause['unit_id'])?$work_clause['unit_id']:null,
                            'project_management_category_id'=>isset($work_clause['project_management_category_id'])?$work_clause['project_management_category_id']:null,
                        ]);
                    }
    
                }
    
                
            }

            if($request->has('deduction_options')&&$request['deduction_options']) {
                foreach ($request['deduction_options'] as $deduction_option) {
                    if(isset($deduction_option['journal_entry_detail_id'])){
                        $value = 0;
                        $journalEntryDetail = JournalEntryDetail::find($deduction_option['journal_entry_detail_id']);
                        if($journalEntryDetail){
                            $value = $journalEntryDetail->credit;
                        }
                        $data = [
                            
                            'journal_entry_detail_id' => $deduction_option['journal_entry_detail_id'],
                            'value' => $value,
                        ];
                        if($reference&&$reference->deductionOptions){
                            $referenceOptions = $reference->deductionOptions()->where('deduction_option_id',$deduction_option['deduction_option_id']);
                            if($referenceOptions){
                                    $data['value'] = $value+$referenceOptions->sum('value');
                                
                            }
                        }
                        $projectAssignment->deductionOptions()->attach($deduction_option['deduction_option_id'],$data);
                    }else{
                        $data= null;
                        if($reference&&$reference->deductionOptions){
                            $referenceOptions = $reference->deductionOptions()->where('deduction_option_id',$deduction_option['deduction_option_id']);
                            if($referenceOptions){
                                    $data['value'] = $referenceOptions->sum('value');
                                
                            }
                        }
                        if($data){

                            $projectAssignment->deductionOptions()->attach($deduction_option['deduction_option_id'],$data);
                        }else{

                            $projectAssignment->deductionOptions()->attach($deduction_option['deduction_option_id']);
                        }
                        
                    }
                    
                }
            }
            
            $total = $projectAssignment->workClauses()
            ->selectRaw('clause_id, ratio,price, MAX(total_price) as max_total_price')
            ->groupBy('clause_id', 'ratio','price')
            ->get()
            ->sum('max_total_price');
            $total_options = 0;
            if($projectAssignment->deductionOptions){
                $total_options = $projectAssignment->deductionOptions()->sum('value');
            }
            $total_due = $total_options>$total?0:$total-$total_options;
            $projectAssignment->update([
                'total'=>$total,
                'total_options'=>$total_options,
                'total_due'=>$total_due
            ]);
    
    
            $project->update([
                'price'=>$project->projectAssignments()
                ->selectRaw('construction_name_id, work_type_id, MAX(total) as max_total_price')
                ->groupBy('construction_name_id', 'work_type_id')
                ->get()
                ->sum('max_total_price')
            ]);
            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollBack();
            return false;
        }



    }

    public function updatePorjectAssignment(string $id,$request): bool
    {
        $projectAssignment = ProjectAssignment::findOrFail($id);
        $reference = ProjectAssignment::where('id','!=',$projectAssignment->id)->where('construction_name_id',$projectAssignment->construction_name_id)->where('work_type_id',$projectAssignment->work_type_id)->orderBy('id','desc')->first();
        try {
            DB::beginTransaction();
            
            $projectAssignment->workClauses()->delete();
            foreach ($request->work_clauses as $work_clause) {
                
                $workClauseReference = $reference->workClauses()
                ->where('ratio',$work_clause['ratio'])
                ->where('clause_id',$work_clause['clause_id'])
                ->where('price',$work_clause['price']) 
                ->orderBy('id','desc')
                ->first();
                
                if($workClauseReference){
                    $previous_amount = $workClauseReference->total_amount;
                    $previous_total_price = $workClauseReference->sum('price');
                    $total_price = (($work_clause['ratio']/100)*($work_clause['quantity']+$previous_amount)* $work_clause['price']);
                    
                    $projectAssignment->workClauses()->create([
                        'quantity'=>$work_clause['quantity'],
                        'previous_amount'=> $previous_amount,
                        'current_amount'=> $work_clause['quantity'],
                        'total_amount'=> $work_clause['quantity']+$previous_amount,
                        'ratio'=>$work_clause['ratio'],
                        'notes'=>isset($work_clause['notes'])?$work_clause['notes']:null,
                        'price'=>$work_clause['price'],
                        'total_price'=>$total_price,
                        'clause_id'=>$work_clause['clause_id'],
                        'unit_id'=>isset($work_clause['unit_id'])?$work_clause['unit_id']:null,
                        'project_management_category_id'=>isset($work_clause['project_management_category_id'])?$work_clause['project_management_category_id']:null,
                    ]);
                }else{
                    $total_price = ($work_clause['ratio']/100)*$work_clause['quantity']* $work_clause['price'] ;
                    $projectAssignment->workClauses()->create([
                        'quantity'=>$work_clause['quantity'],
                        'current_amount'=> $work_clause['quantity'],
                        'total_amount'=> $work_clause['quantity'],
                        'ratio'=>$work_clause['ratio'],
                        'notes'=>isset($work_clause['notes'])?$work_clause['notes']:null,
                        'price'=>$work_clause['price'],
                        'total_price'=>$total_price,
                        'clause_id'=>$work_clause['clause_id'],
                        'unit_id'=>isset($work_clause['unit_id'])?$work_clause['unit_id']:null,
                        'project_management_category_id'=>isset($work_clause['project_management_category_id'])?$work_clause['project_management_category_id']:null,
                    ]);
                }

            }


            if($request->has('deduction_options')&&$request['deduction_options']) {
                 $projectAssignment->deductionOptions()->detach();
                foreach ($request['deduction_options'] as $deduction_option) {
                    if(isset($deduction_option['journal_entry_detail_id'])){
                        $value = 0;
                        $journalEntryDetail = JournalEntryDetail::find($deduction_option['journal_entry_detail_id']);
                        if($journalEntryDetail){
                            $value = $journalEntryDetail->credit;
                        }
                        $data = [
                            'journal_entry_detail_id' => $deduction_option['journal_entry_detail_id'],
                            'value' => $value,
                        ];
                        $exitsOptions = $projectAssignment->deductionOptions()->where('deduction_option_id',$deduction_option['deduction_option_id'])->orderBy('id','desc')->first();
                        if($reference&&$reference->deductionOptions){
                            $referenceOptions = $reference->deductionOptions()->where('deduction_option_id',$deduction_option['deduction_option_id']);
                            if($referenceOptions&&!$exitsOptions){
                                $data['value'] = $value+$referenceOptions->sum('value');
                                
                            }else if($exitsOptions){
                                $data['value'] = $value;
                                
                            }
                        }

                        $projectAssignment->deductionOptions()->attach($deduction_option['deduction_option_id'],$data);
                       
                    }else{
                        $data= null;
                        $exitsOptions = $projectAssignment->deductionOptions()->where('deduction_option_id',$deduction_option['deduction_option_id'])->orderBy('id','desc')->first();
                        if($reference&&$reference->deductionOptions){
                            $referenceOptions = $reference->deductionOptions()->where('deduction_option_id',$deduction_option['deduction_option_id']);
                            if($referenceOptions&&!$exitsOptions){
                                    $data['value'] = $referenceOptions->sum('value');
                                
                            }
                        }
                        if($data){

                            $projectAssignment->deductionOptions()->attach($deduction_option['deduction_option_id'],$data);
                        }else{

                            $projectAssignment->deductionOptions()->attach($deduction_option['deduction_option_id']);
                        }
                    }
                }
            }
            
            $total = $projectAssignment->workClauses()
            ->selectRaw('clause_id, ratio,price, MAX(total_price) as max_total_price')
            ->groupBy('clause_id', 'ratio','price')
            ->get()
            ->sum('max_total_price');
            $total_options = 0;
            if($projectAssignment->deductionOptions){
                $total_options = $projectAssignment->deductionOptions()->sum('value');
            }
            $total_due = $total_options>$total?0:$total-$total_options;
            $projectAssignment->update([
                'total'=>$total,
                'total_options'=>$total_options,
                'total_due'=>$total_due
            ]);
            
           /*  $allReference = $projectAssignment->project->projectAssignments()
            ->where('construction_name_id',$projectAssignment->construction_name_id)
            ->where('work_type_id',$projectAssignment->work_type_id)
            ->where('id','!=',$id)
            ->get(); */

            $projectAssignment->project->update([
                'price'=>$projectAssignment->project->projectAssignments()
                ->selectRaw('construction_name_id, work_type_id, MAX(total) as max_total_price')
                ->groupBy('construction_name_id', 'work_type_id')
                ->get()
                ->sum('max_total_price')
            ]);
            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollBack();
            return false;
        }



    }


    public function update(string $id, $request): bool
    {
        $project = $this->project::findOrFail($id);
        if($project->parent_account_id&&$request->parent_account_id!=$project->parent_account_id){
            $project->update($request->all()+[
               'editor_id' => auth()->user()->id,
           ]);
        }else{
            $account = app(AccountMySqlRepository::class)->storeFromProjectManagement($request->parent_account_id,$request->project_name);
            $project->update($request->all()+[
               'account_id' => $account['account_id'],
               'editor_id' => auth()->user()->id,
           ]);

        }

        if($request->has('deduction_options')&&$request['deduction_options']) {
            $project->projectDeductionOptions()->sync($request->deduction_options);
        }
        if($request->has('project_phases')&&$request['project_phases']) {
            $project->projectPhases()->sync($request->project_phases);
        }
        if($request->has('suppliers')&&$request['suppliers']) {
            $project->suppliers()->sync($request->suppliers);
        }

        if ($request->has('files')&&$request['files']) {
            $project->addMultipleMediaFromRequest(['files']) ->each(function ($file) {
                $file->storingConversionsOnDisk('upload_project')->toMediaCollection('project_attachments','upload_project');
            });
        }

        return true;
    }
   
    public function projectPhases(string $id)
    {
        $project = $this->project::findOrFail($id);
        return  $project->projectPhases();
    }
   


    public function delete(string $id): bool
    {
        $this->project::findOrFail($id)?->delete();

        return true;
    }

    public function exportProjectManagementPDF(string $id)
    {
        
        
        $project = $this->project::findOrFail($id);

        $data = $project->projectAssignments;
        //dd($data);
    
        // Render the view with data
        $title = "Project Management";
        $filePath = 'tenant'.tenant('id').'/pdf/downloads/project/project-management.pdf';
        /* if(Storage::exists($filePath)){
            Storage::delete($filePath);
        } */
        if(Storage::exists('public/'.$filePath)){
            unlink('public/'.$filePath);
        }
        /* $pdf = Pdf::loadView('pdf.project-management', compact('data', 'title')); */
      /*   $pdf->output();
        $domPdf = $pdf->getDomPDF();
        $canvas = $domPdf->get_canvas();
        $w = $canvas->get_width();
        $h = $canvas->get_height();
        $canvas->page_text($w / 2, $h - 40, "Page {PAGE_NUM} of {PAGE_COUNT}", null, 10, [0, 0, 0]); */
        $pdf = PDF::loadView('pdf.project-management', compact('data', 'title'), [], [
            'format' => 'A4',
            'display_mode' => 'fullpage',
            'font_path' => storage_path('fonts/'),
        ]);
        Storage::disk('export')->put($filePath, $pdf->output());
    
        
        // Serve the file for download
        return response()->json([
            'file_path' => asset($filePath),
            'status' => true,
        ], 200);
        //return response()->download(storage_path('app/public/' . $filePath));
    }
    public function exportProjectManagementPDFAr(string $id)
    {
        
        
        $project = $this->project::findOrFail($id);
        
        $data = $project->projectAssignments;
        //dd($data);
        
        // Render the view with data
        $title = "ادارة المشروع";
        $filePath = 'tenant'.tenant('id').'/pdf/downloads/project/المستخلص.pdf';
        /* if(Storage::exists($filePath)){
            Storage::delete($filePath);
        } */
        if(Storage::exists('public/'.$filePath)){
            unlink('public/'.$filePath);
        }
        // $pdf = Pdf::loadView('pdf.project-management-ar', compact('data', 'title'));
        /* $pdf->getDomPDF()->getOptions()->setFontDir(storage_path('fonts/'));
        $pdf->getDomPDF()->getOptions()->setDefaultFont('Cairo-Regular.ttf'); */
        //$pdf->output();
        /*  $domPdf = $pdf->getDomPDF();
        $canvas = $domPdf->get_canvas();
        $w = $canvas->get_width();
        $h = $canvas->get_height();
        $canvas->page_text($w / 2, $h - 40, "Page {PAGE_NUM} of {PAGE_COUNT}", 'Cairo-Regular.ttf', 10, [0, 0, 0]); */
        $pdf = PDF::loadView('pdf.project-management-ar', compact('data', 'title'), [], [
            'format' => 'A4',
            'display_mode' => 'fullpage',
            'font_path' => storage_path('fonts/'),
            'orientation' => 'portrait',
            'font_data' => [
                    'cairo' =>[
                        'R'=> 'Cairo-Regular.ttf',
                    ]
                ]
        ]);
        
       
        
    
        Storage::disk('export')->put($filePath, $pdf->output());
    
    
        // Serve the file for download
        return response()->json([
            'file_path' => asset($filePath),
            'status' => true,
        ], 200);
        //return response()->download(storage_path('app/public/' . $filePath));
    }





}
