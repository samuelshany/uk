<?php

namespace App\Domains\Clause\Controllers;

use App\Domains\Clause\Models\EnumPermissionClause;
use App\Domains\Clause\Request\UpdateClauseRequest;
use App\Domains\Clause\Resources\ClauseResource;
use App\Domains\Clause\Services\ClauseService;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class ClauseController extends Controller
{
    public function __construct(private ClauseService $clauseService)
    {
    }
    public function findById($id)
    {
       // abort_if(!auth()->user()->hasPermissionTo(EnumPermissionClause::view_clauses->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return new ClauseResource($this->clauseService->findById($id));
    }

    public function list()
    {
       // abort_if(!auth()->user()->hasPermissionTo(EnumPermissionClause::view_clauses->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        return ClauseResource::collection($this->clauseService->list());
    }

    public function store( UpdateClauseRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionClause::create_clause->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

       $this->clauseService->store($request);

        return response()->json([
            'message' => __('Clause is created successfully!'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateClauseRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionClause::edit_clause->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->clauseService->update($id,$request);

        return response()->json([
            'message' => __('Clause is updated successfully!'),
            'status' => true,
        ], 200);
    }
    
    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionClause::delete_clause->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $this->clauseService->delete($id);
        return response()->json([
            'message' => __('Clause deleted successfully!'),
            'status' => true,
        ], 200);
    }

}
