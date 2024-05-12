<?php

namespace App\Domains\Customer\Controllers;

use App\Domains\Customer\Models\Customer;
use App\Domains\Customer\Models\EnumPermissionCustomer;
use App\Domains\Customer\Request\StoreCustomerRequest;
use App\Domains\Customer\Request\UpdateCustomerRequest;
use App\Domains\Customer\Resources\CustomerResource;
use App\Domains\Customer\Resources\CustomerSalesReportResource;
use App\Domains\Customer\Services\CustomerService;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Domains\Customer\Request\ImportCustomerRequest;
use App\Domains\Customer\Request\UpdateAssignUserCustomerRequest;
use App\Domains\Customer\Request\UpdateAttachmentsCustomerRequest;
use App\Domains\User\Models\User;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function __construct(private CustomerService $customerService)
    {
    }

    public function list()
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::view_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return  CustomerResource::collection($this->customerService->list());
    }

    public function delete($id)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::delete_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $this->customerService->delete($id);
        return response()->json([
            'message' => __('Deleted Successfully'),
            'status' => true,
        ], 200);
    }

    public function findById($id)
    {
        //abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::view_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new CustomerResource($this->customerService->findById($id));
    }

    public function create(StoreCustomerRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::create_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        $this->customerService->create($request);

        return response()->json([
            'message' => __('Created Successfully'),
            'status' => true,
        ], 200);
    }

    public function update($id, UpdateCustomerRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::edit_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');



            $this->customerService->update($id, $request);


        return response()->json([
            'message' => __('Updated Successfully'),
            'status' => true,
        ], 200);
    }

    public function salesReport(Request $request)
    {
//    abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::edit_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return CustomerSalesReportResource::collection($this->customerService->salesReport($request));

    }

    public function salesReportExportCSV(Request $request)
    {
//    abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::edit_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $this->customerService->salesReportExportCSV($request);

    }

    public function salesReportExportPDF(Request $request)
    {
//    abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::edit_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $this->customerService->salesReportExportPDF($request);

    }

    public function exportExample()
    {
     abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::export_customers->value, 'api'),Response::HTTP_FORBIDDEN, '403 Forbidden');
               


        return response()->json([
            'file_path' => url('/customers-example-import.xlsx'),
        ]);
    }
   
   

/*     public function exportCustomers()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::view_customer->value,'api'),Response::HTTP_FORBIDDEN, '403 Forbidden');
        return $this->customerService->exportChart();
    } */
/*     public function exportExample()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::view_customer->value,'api'),Response::HTTP_FORBIDDEN, '403 Forbidden');
        return $this->customerService->exportExample();
    } */
    public function exportUtilities()
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::export_customers->value,'api'),Response::HTTP_FORBIDDEN, '403 Forbidden');
        return $this->customerService->exportUtilities();
    }
    
    public function import(ImportCustomerRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::import_customers->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $import = $this->customerService->import();
        if (count($import->importErrors) > 0) {
            return response()->json( $import->importErrors)->setStatusCode(400);
        }
        return response()->json([
            'message' => __('messages.imported_successfully'),
            'status' => true,
        ], 202);
    }

    public function assignUser(string $id,UpdateAssignUserCustomerRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::edit_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if(!Customer::find($id)){
            return response()->json([
                'message' => __('Customer not found'),
                'status' => false,
            ], 422);
        }else{

            $this->customerService->assignUser($id,$request);
        }
        return response()->json([
            'message' => __('Customer assigned to user Successfully'),
            'status' => true,
        ], 202);
    }

    public function addAttachments(string $id,UpdateAttachmentsCustomerRequest $request)
    {
        abort_if(!auth()->user()->hasPermissionTo(EnumPermissionCustomer::edit_customer->value, 'api'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if(!Customer::find($id)){
            return response()->json([
                'message' => __('Customer not found'),
                'status' => false,
            ], 422);
        }else{
            $this->customerService->addAttachments($id,$request);
            
        }
        return response()->json([
            'message' => __('Attachments added Successfully'),
            'status' => true,
        ], 202);
    }

    
}
