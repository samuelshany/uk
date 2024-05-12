<?php

namespace App\Domains\Group\Services;


use App\Domains\Group\Exports\GroupsExport;
use App\Domains\Group\Imports\GroupsImport;
use App\Domains\Group\Interfaces\GroupRepositoryInterface;
use App\Domains\Group\Models\Group;
use App\Domains\Group\Resources\GroupResource;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class GroupService
{
    public function __construct(private GroupRepositoryInterface $groupRepository)
    {
    }

    public function list()
    {
        return $this->groupRepository->list();
    }
    public function findById($id)
    {
        return $this->groupRepository->findById($id);
    }

    public function delete($id)
    {
        return $this->groupRepository->delete($id);
    }

    public function create($request)
    {

        return $this->groupRepository->store($request);
    }

    public function update($id,$request)
    {

        return $this->groupRepository->update($id,$request);
    }
    public function generatePDF()
    {
        return $this->groupRepository->generatePDF();
    }
    public function export()
    {
        /* $filename = time() . '-groups.xlsx'; */
        $filename = 'groups.xlsx';
        $path = 'tenant'.tenant('id').'/exports/groups/' . $filename;
        if(Storage::exists('public/'.$path)){
            unlink('public/'.$path);
        }
//        $groups = GroupResource::collection( Group::with('creator','group_type')->get());
        Excel::store(new GroupsExport(), $path, 'export');

/*         if(tenant('id')){
            return response()->json([
                'file_path' =>  url('storage/' . $path),
            ]);
        }
 */
        return response()->json([
            'file_path' => asset($path)
        ]);
    }
    public function import()
    {
            $import = new GroupsImport();
            Excel::import($import, request()->file);
            return $import;


    }
}
