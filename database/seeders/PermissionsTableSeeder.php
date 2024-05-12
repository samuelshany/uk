<?php

namespace Database\Seeders;

use App\Domains\Account\Models\EnumPermissionAccount;
use App\Domains\Account\Models\EnumPermissionExportAccount;
use App\Domains\Account\Models\EnumPermissionProfitAndLossAccount;
use App\Domains\BankAccount\Models\EnumPermissionBankAccount;
use App\Domains\Brand\Models\EnumPermissionBrand;
use App\Domains\CashManagment\Models\EnumPermissionCashManagment;
use App\Domains\Category\Models\EnumPermissionCategory;
use App\Domains\Clause\Models\EnumPermissionClause;
use App\Domains\Company\Models\EnumPermissionCompany;
use App\Domains\ConstructionName\Models\EnumPermissionConstructionName;
use App\Domains\Currency\Models\EnumPermissionCurrency;
use App\Domains\Customer\Models\EnumPermissionCustomer;
use App\Domains\DeductionOption\Models\EnumPermissionDeductionOption;
use App\Domains\DownpaymentOption\Models\EnumPermissionDownpaymentOption;
use App\Domains\Field\Models\EnumPermissionField;
use App\Domains\FieldType\Models\EnumPermissionFieldType;
use App\Domains\FinancialPeriod\Models\EnumPermissionFinancialPeriod;
use App\Domains\FixedAsset\Models\EnumPermissionFixedAsset;
use App\Domains\Form\Models\EnumPermissionForm;
use App\Domains\Group\Models\EnumPermissionGroup;
use App\Domains\GroupType\Models\EnumPermissionGroupType;
use App\Domains\GroupType\Models\GroupType;
use App\Domains\InventoryDeliveryOrder\Models\EnumPermissionInventoryDeliveryOrder;
use App\Domains\InventoryReceiptOrder\Models\EnumPermissionInventoryReceiptOrder;
use App\Domains\JournalEntry\Models\EnumPermissionJournalEntry;
use App\Domains\Module\Models\Module;
use App\Domains\PaymentType\Models\EnumPermissionPaymentType;
use App\Domains\Permission\Models\EnumPermission;
use App\Domains\Permission\Models\EnumPermissionRole;
use App\Domains\Permission\Models\EnumPermissionUser;
use App\Domains\Permission\Models\Permission;
use App\Domains\Permission\Models\PermissionCategory;
use App\Domains\ProductCodeCriteria\Models\EnumPermissionProductCodeCriteria;
use App\Domains\Purchase\Models\EnumPermissionSale;
use App\Domains\PurchaseInvoicesPayment\Models\EnumPermissionPurchaseInvoicesPayment;
use App\Domains\PurchaseRequest\Models\EnumPermissionPurchaseOrder;
use App\Domains\PurchaseRequest\Models\EnumPermissionPurchaseRequest;
use App\Domains\RevisionHistory\Models\EnumPermissionRevisionHistory;
use App\Domains\Role\Models\Role;
use App\Domains\SafeMovement\Models\EnumPermissionSafeMovement;
use App\Domains\SalesInvoicesPayment\Models\EnumPermissionSalesInvoicesPayment;
use App\Domains\SalesOrder\Models\EnumPermissionSalesOrder;
use App\Domains\Supplier\Models\EnumPermissionSupplier;
use App\Domains\Purchase\Models\EnumPermissionPurchase;
use App\Domains\Tax\Models\EnumPermissionTax;
use App\Domains\Tenant\Models\EnumPermissionTenant;
use App\Domains\UnitType\Models\EnumPermissionUnitType;
use App\Domains\User\Models\User;
use App\Domains\Vendor\Models\EnumPermissionLocation;
use App\Domains\Vendor\Models\EnumPermissionVendor;
use App\Domains\Warehouse\Models\EnumPermissionWarehouse;
use Illuminate\Database\Seeder;
use App\Domains\Product\Models\EnumPermissionProduct;
use App\Domains\Stock\Models\EnumPermissionStock;
use App\Domains\Pack\Models\EnumPermissionPack;
use App\Domains\Project\Models\EnumPermissionProject;
use App\Domains\ProjectManagementCategory\Models\EnumPermissionProjectManagementCategory;
use App\Domains\ProjectPhase\Models\EnumPermissionProjectPhase;
use App\Domains\PurchaseInvoice\Models\EnumPermissionPurchaseInvoice;
use App\Domains\RequestQuotation\Models\EnumPermissionRequestQuotation;
use App\Domains\SalesConfigurationState\Models\EnumPermissionSalesConfigurationState;
use App\Domains\SalesInvoice\Models\EnumPermissionSalesInvoice;
use App\Domains\SalesOrderTracking\Models\EnumPermissionSalesOrderTracking;
use App\Domains\Unit\Models\EnumPermissionUnit;
use App\Domains\WorkType\Models\EnumPermissionWorkType;
use App\Domains\Account\Models\EnumPermissionEmployee;
use App\Domains\Account\Models\EnumPermissionDepartment;
class PermissionsTableSeeder extends Seeder
{

    public function run()
    {

       $tenantModules = tenant('modules');
//dd($tenantModules);
        $modules = [];
        if($tenantModules&&count($tenantModules) > 0){
            foreach($tenantModules as $module){
                 switch($module){
                     case 'Setup':
                         $modules['Setup'] =
                         [
                             'Role' => array_column(EnumPermissionRole::cases(), 'value'),
                             'Permission' => array_column(EnumPermission::cases(), 'value'),
                             'Company' => array_column(EnumPermissionCompany::cases(), 'value'),
                             'Tenant' => array_column(EnumPermissionTenant::cases(), 'value'),
                             'User' => array_column(EnumPermissionUser::cases(), 'value'),
                             'Field' => array_column(EnumPermissionField::cases(), 'value'),
                             'Form' => array_column(EnumPermissionForm::cases(), 'value'),
                             'Tax' => array_column(EnumPermissionTax::cases(), 'value'),
                             'Currency' => array_column(EnumPermissionCurrency::cases(), 'value'),
                             'PaymentType' => array_column(EnumPermissionPaymentType::cases(), 'value'),
                         ];
                         break;
                     case 'Accounting':
                         $modules['Accounting'] =
                         [
                             'Account' => array_column(EnumPermissionAccount::cases(), 'value'),
                             'BankAccount' => array_column(EnumPermissionBankAccount::cases(), 'value'),
                             'GroupType' => array_column(EnumPermissionGroupType::cases(), 'value'),
                             'Group' => array_column(EnumPermissionGroup::cases(), 'value'),
                             'Vendor' => array_column(EnumPermissionVendor::cases(), 'value'),
                             'Supplier' => array_column(EnumPermissionSupplier::cases(), 'value'),
                             'Customer' => array_column(EnumPermissionCustomer::cases(), 'value'),
                             'FinancialPeriod' => array_column(EnumPermissionFinancialPeriod::cases(), 'value'),
                             'JournalEntry' => array_column(EnumPermissionJournalEntry::cases(), 'value'),
                             'FixedAsset' => array_column(EnumPermissionFixedAsset::cases(), 'value'),
                             'SafeMovement' => array_column(EnumPermissionSafeMovement::cases(), 'value'),
                             'CashManagment' => array_column(EnumPermissionCashManagment::cases(), 'value'),
                             'RevisionHistory' => array_column(EnumPermissionRevisionHistory::cases(), 'value'),
                             'Location' => array_column(EnumPermissionLocation::cases(), 'value'),
                             'ExportAccounts' => array_column(EnumPermissionExportAccount::cases(), 'value'),
                             'ProfitAndLoss' => array_column(EnumPermissionProfitAndLossAccount::cases(), 'value'),
                         ];
                         break;
                     case 'Inventory':
                         $modules['Inventory'] =
                         [
                             'Category' => array_column(EnumPermissionCategory::cases(), 'value'),
                             'Warehouse' => array_column(EnumPermissionWarehouse::cases(), 'value'),
                             'Stock' => array_column(EnumPermissionStock::cases(), 'value'),
                             'ReceiptOrder' => array_column(EnumPermissionInventoryReceiptOrder::cases(), 'value'),
                             'DeliveryOrder' => array_column(EnumPermissionInventoryDeliveryOrder::cases(), 'value'),
                             'Pack' => array_column(EnumPermissionPack::cases(), 'value'),
                             'Product' => array_column(EnumPermissionProduct::cases(), 'value'),
                             'UnitType' => array_column(EnumPermissionUnitType::cases(), 'value'),
                             'Brand' => array_column(EnumPermissionBrand::cases(), 'value'),
                             'ProductCodeCriteria' => array_column(EnumPermissionProductCodeCriteria::cases(), 'value'),
                         ];
                         break;
                     case 'Purchase':
                         $modules['Purchase'] =
                         [
                             'Purchase' => array_column(EnumPermissionPurchase::cases(), 'value'),
                             'PurchaseRequest' => array_column(EnumPermissionPurchaseRequest::cases(), 'value'),
                             'RequestQuotation' => array_column(EnumPermissionRequestQuotation::cases(), 'value'),
                             'PurchaseOrder' => array_column(EnumPermissionPurchaseOrder::cases(), 'value'),
                             'PurchaseInvoice' => array_column(EnumPermissionPurchaseInvoice::cases(), 'value'),
                             'PurchaseInvoicesPayment' => array_column(EnumPermissionPurchaseInvoicesPayment::cases(), 'value'),
                         ];
                         break;
                     case 'Sale':
                         $modules['Sale'] =
                         [
                             'Sale' => array_column(EnumPermissionSale::cases(), 'value'), // sales modules
                             'SalesOrder' => array_column(EnumPermissionSalesOrder::cases(), 'value'), // sales modules
                             'SalesInvoice' => array_column(EnumPermissionSalesInvoice::cases(), 'value'), // sales modules
                             'SalesInvoicesPayments' => array_column(EnumPermissionSalesInvoicesPayment::cases(), 'value'), // sales modules
                             'SalesConfigurationState' => array_column(EnumPermissionSalesConfigurationState::cases(), 'value'), // sales modules
                             'SalesOrderTracking' => array_column(EnumPermissionSalesOrderTracking::cases(), 'value'), // sales modules
                         ];
                         break;
                     case 'Project Management':
                         $modules['Project Management'] =
                         [
                             'ProjectPhase' => array_column(EnumPermissionProjectPhase::cases(), 'value'), // project phase
                             'ConstructionName' => array_column(EnumPermissionConstructionName::cases(), 'value'), // project management
                             'FieldType' => array_column(EnumPermissionFieldType::cases(), 'value'), // field type
                             'WorkType' => array_column(EnumPermissionWorkType::cases(), 'value'), // work type
                             'Unit' => array_column(EnumPermissionUnit::cases(), 'value'), // unit
                             'ProjectManagementCategory' => array_column(EnumPermissionProjectManagementCategory::cases(), 'value'), // category
                             'Clause' => array_column(EnumPermissionClause::cases(), 'value'), // clause
                             'DownpaymentOption' => array_column(EnumPermissionDownpaymentOption::cases(), 'value'), // downpayment option
                             'DeductionOption' => array_column(EnumPermissionDeductionOption::cases(), 'value'), // deduction option
                             'Project' => array_column(EnumPermissionProject::cases(), 'value'), // project
                         ];
                         break;



                 }
            }
        }
      /*   $modules = [
        'HR'=>[
            'Employee'=>array_column(EnumPermissionEmployee::cases(), 'value'),
            'Department'=>array_column(EnumPermissionDepartment::cases(), 'value'),
        ],
            'Setup' => [
                'Role' => array_column(EnumPermissionRole::cases(), 'value'),
                'Permission' => array_column(EnumPermission::cases(), 'value'),
                'Company' => array_column(EnumPermissionCompany::cases(), 'value'),
                'Tenant' => array_column(EnumPermissionTenant::cases(), 'value'),
                'User' => array_column(EnumPermissionUser::cases(), 'value'),
                'Field' => array_column(EnumPermissionField::cases(), 'value'),
                'Form' => array_column(EnumPermissionForm::cases(), 'value'),
                'Tax' => array_column(EnumPermissionTax::cases(), 'value'),
                'Currency' => array_column(EnumPermissionCurrency::cases(), 'value'),
                'PaymentType' => array_column(EnumPermissionPaymentType::cases(), 'value'),
            ],

            'Accounting' => [
                'Account' => array_column(EnumPermissionAccount::cases(), 'value'),
                'BankAccount' => array_column(EnumPermissionBankAccount::cases(), 'value'),
                'GroupType' => array_column(EnumPermissionGroupType::cases(), 'value'),
                'Group' => array_column(EnumPermissionGroup::cases(), 'value'),
                'Vendor' => array_column(EnumPermissionVendor::cases(), 'value'),
                'Supplier' => array_column(EnumPermissionSupplier::cases(), 'value'),
                'Customer' => array_column(EnumPermissionCustomer::cases(), 'value'),
                'FinancialPeriod' => array_column(EnumPermissionFinancialPeriod::cases(), 'value'),
                'JournalEntry' => array_column(EnumPermissionJournalEntry::cases(), 'value'),
                'FixedAsset' => array_column(EnumPermissionFixedAsset::cases(), 'value'),
                'SafeMovement' => array_column(EnumPermissionSafeMovement::cases(), 'value'),
                'CashManagment' => array_column(EnumPermissionCashManagment::cases(), 'value'),
                'RevisionHistory' => array_column(EnumPermissionRevisionHistory::cases(), 'value'),
                'Location' => array_column(EnumPermissionLocation::cases(), 'value'),
                'ExportAccounts' => array_column(EnumPermissionExportAccount::cases(), 'value'),
                'ProfitAndLoss' => array_column(EnumPermissionProfitAndLossAccount::cases(), 'value'),
            ],

            'Inventory' => [
                'Category' => array_column(EnumPermissionCategory::cases(), 'value'),
                'Warehouse' => array_column(EnumPermissionWarehouse::cases(), 'value'),
                'Stock' => array_column(EnumPermissionStock::cases(), 'value'),
                'ReceiptOrder' => array_column(EnumPermissionInventoryReceiptOrder::cases(), 'value'),
                'DeliveryOrder' => array_column(EnumPermissionInventoryDeliveryOrder::cases(), 'value'),
                'Pack' => array_column(EnumPermissionPack::cases(), 'value'),
                'Product' => array_column(EnumPermissionProduct::cases(), 'value'),
                'UnitType' => array_column(EnumPermissionUnitType::cases(), 'value'),
                'Brand' => array_column(EnumPermissionBrand::cases(), 'value'),
                'ProductCodeCriteria' => array_column(EnumPermissionProductCodeCriteria::cases(), 'value'),
            ],

            'Purchase' => [
                'Purchase' => array_column(EnumPermissionPurchase::cases(), 'value'),
                'PurchaseRequest' => array_column(EnumPermissionPurchaseRequest::cases(), 'value'),
                'RequestQuotation' => array_column(EnumPermissionRequestQuotation::cases(), 'value'),
                'PurchaseOrder' => array_column(EnumPermissionPurchaseOrder::cases(), 'value'),
                'PurchaseInvoice' => array_column(EnumPermissionPurchaseInvoice::cases(), 'value'),
                'PurchaseInvoicesPayment' => array_column(EnumPermissionPurchaseInvoicesPayment::cases(), 'value'),
            ],
            'Sale' => [
                'Sale' => array_column(EnumPermissionSale::cases(), 'value'), // sales modules
                'SalesOrder' => array_column(EnumPermissionSalesOrder::cases(), 'value'), // sales modules
                'SalesInvoice' => array_column(EnumPermissionSalesInvoice::cases(), 'value'), // sales modules
                'SalesInvoicesPayments' => array_column(EnumPermissionSalesInvoicesPayment::cases(), 'value'), // sales modules
                'SalesConfigurationState' => array_column(EnumPermissionSalesConfigurationState::cases(), 'value'), // sales modules
                'SalesOrderTracking' => array_column(EnumPermissionSalesOrderTracking::cases(), 'value'), // sales modules
            ],

            'Project Management' => [
                'ProjectPhase' => array_column(EnumPermissionProjectPhase::cases(), 'value'), // project phase
                'ConstructionName' => array_column(EnumPermissionConstructionName::cases(), 'value'), // project management
                'FieldType' => array_column(EnumPermissionFieldType::cases(), 'value'), // field type
                'WorkType' => array_column(EnumPermissionWorkType::cases(), 'value'), // work type
                'Unit' => array_column(EnumPermissionUnit::cases(), 'value'), // unit
                'ProjectManagementCategory' => array_column(EnumPermissionProjectManagementCategory::cases(), 'value'), // category
                'Clause' => array_column(EnumPermissionClause::cases(), 'value'), // clause
                'DownpaymentOption' => array_column(EnumPermissionDownpaymentOption::cases(), 'value'), // downpayment option
                'DeductionOption' => array_column(EnumPermissionDeductionOption::cases(), 'value'), // deduction option
                'Project' => array_column(EnumPermissionProject::cases(), 'value'), // project

            ],


        ]; */


        foreach ($modules as $key => $module) {
            $moduleModel = Module::firstOrCreate([
                'name' => $key,
            ]);

            foreach ($module as $permissionCategoryKey => $permissions) {
                $permissionCategoryModel = $moduleModel->permissionCategories()->firstOrCreate([
                    'name' => $permissionCategoryKey,
                ]);

                $permissionsMap = array_map(function ($permission) use ($permissionCategoryModel) {
                    return [
                        'name' => $permission,
                        'guard_name' => 'api',
                        'permission_category_id' => $permissionCategoryModel->id,
                    ];
                }, $permissions);

                foreach ($permissionsMap as $permission) {
                    Permission::firstOrCreate($permission);
                }
            }
        }

        Role::firstOrCreate(['name' => 'super-admin', 'guard_name' => 'api']);
        $admin_permissions = Permission::all();
        Role::findOrFail(1)->permissions()->sync($admin_permissions->pluck('id')); // super admin

        User::findOrFail(1)->roles()->sync(1); // super admin
        GroupType::where('id', '<', 6 )->update(['is_fixed'=>0]);



    }
}
