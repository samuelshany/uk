<?php

use Illuminate\Support\Facades\Facade;
use Illuminate\Support\ServiceProvider;

return [

    /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */

    'name' => env('APP_NAME', 'Laravel'),

    'pagination_count' => 10,

    /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services the application utilizes. Set this in your ".env" file.
    |
    */

    'env' => env('APP_ENV', 'production'),

    /*
    |--------------------------------------------------------------------------
    | Application Debug Mode
    |--------------------------------------------------------------------------
    |
    | When your application is in debug mode, detailed error messages with
    | stack traces will be shown on every error that occurs within your
    | application. If disabled, a simple generic error page is shown.
    |
    */

    'debug' => (bool) env('APP_DEBUG', false),

    /*
    |--------------------------------------------------------------------------
    | Application URL
    |--------------------------------------------------------------------------
    |
    | This URL is used by the console to properly generate URLs when using
    | the Artisan command line tool. You should set this to the root of
    | your application so that it is used when running Artisan tasks.
    |
    */

    'url' => env('APP_URL', 'http://localhost'),

    'asset_url' => env('ASSET_URL'),

    /*
    |--------------------------------------------------------------------------
    | Application Timezone
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default timezone for your application, which
    | will be used by the PHP date and date-time functions. We have gone
    | ahead and set this to a sensible default for you out of the box.
    |
    */

    'timezone' => 'UTC',

    /*
    |--------------------------------------------------------------------------
    | Application Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the default locale that will be used
    | by the translation service provider. You are free to set this value
    | to any of the locales which will be supported by the application.
    |
    */

    'locale' => 'en',

    /*
    |--------------------------------------------------------------------------
    | Application Fallback Locale
    |--------------------------------------------------------------------------
    |
    | The fallback locale determines the locale to use when the current one
    | is not available. You may change the value to correspond to any of
    | the language folders that are provided through your application.
    |
    */

    'fallback_locale' => 'en',

    /*
    |--------------------------------------------------------------------------
    | Faker Locale
    |--------------------------------------------------------------------------
    |
    | This locale will be used by the Faker PHP library when generating fake
    | data for your database seeds. For example, this will be used to get
    | localized telephone numbers, street address information and more.
    |
    */

    'faker_locale' => 'en_US',

    /*
    |--------------------------------------------------------------------------
    | Encryption Key
    |--------------------------------------------------------------------------
    |
    | This key is used by the Illuminate encrypter service and should be set
    | to a random, 32 character string, otherwise these encrypted strings
    | will not be safe. Please do this before deploying an application!
    |
    */

    'key' => env('APP_KEY'),

    'cipher' => 'AES-256-CBC',

    /*
    |--------------------------------------------------------------------------
    | Maintenance Mode Driver
    |--------------------------------------------------------------------------
    |
    | These configuration options determine the driver used to determine and
    | manage Laravel's "maintenance mode" status. The "cache" driver will
    | allow maintenance mode to be controlled across multiple machines.
    |
    | Supported drivers: "file", "cache"
    |
    */

    'maintenance' => [
        'driver' => 'file',
        // 'store' => 'redis',
    ],

    /*
    |--------------------------------------------------------------------------
    | Autoloaded Service Providers
    |--------------------------------------------------------------------------
    |
    | The service providers listed here will be automatically loaded on the
    | request to your application. Feel free to add your own services to
    | this array to grant expanded functionality to your applications.
    |
    */

    'providers' => ServiceProvider::defaultProviders()->merge([
        /*
         * Package Service Providers...
         */

        /*
         * Application Service Providers...
         */
        App\Domains\Employee\Providers\EmployeeServiceProvider::class,
        App\Domains\Department\Providers\DepartmentServiceProvider::class,
        App\Providers\AppServiceProvider::class,
        App\Providers\AuthServiceProvider::class,
        // App\Providers\BroadcastServiceProvider::class,
        App\Providers\EventServiceProvider::class,
        App\Providers\RouteServiceProvider::class,
        App\Providers\TenancyServiceProvider::class,

        App\Domains\User\Providers\UserServiceProvider::class,
        App\Domains\Permission\Providers\PermissionServiceProvider::class,
        App\Domains\Role\Providers\RoleServiceProvider::class,
        App\Domains\Company\Providers\CompanyServiceProvider::class,
        App\Domains\Field\Providers\FieldServiceProvider::class,
        App\Domains\Form\Providers\FormServiceProvider::class,
        App\Domains\Module\Providers\ModuleServiceProvider::class,
        App\Domains\Language\Providers\LanguageServiceProvider::class,
        App\Domains\Currency\Providers\CurrencyServiceProvider::class,
        App\Domains\Tax\Providers\TaxServiceProvider::class,
        App\Domains\BankAccount\Providers\BankAccountServiceProvider::class,
        App\Domains\FinancialPeriod\Providers\FinancialPeriodServiceProvider::class,
        App\Domains\RevisionHistory\Providers\RevisionHistoryServiceProvider::class,
        App\Domains\GroupType\Providers\GroupTypeServiceProvider::class,
        App\Domains\Group\Providers\GroupServiceProvider::class,
        App\Domains\Account\Providers\AccountServiceProvider::class,
        App\Domains\JournalEntry\Providers\JournalEntryServiceProvider::class,
        App\Domains\Supplier\Providers\SupplierServiceProvider::class,
        App\Domains\Vendor\Providers\VendorServiceProvider::class,
        App\Domains\Warehouse\Providers\WarehouseServiceProvider::class,
        App\Domains\UnitType\Providers\UnitTypeServiceProvider::class,
        App\Domains\Brand\Providers\BrandServiceProvider::class,
        App\Domains\Customer\Providers\CustomerServiceProvider::class,
        App\Domains\Category\Providers\CategoryServiceProvider::class,
        App\Domains\Product\Providers\ProductServiceProvider::class,
        App\Domains\Stock\Providers\StockServiceProvider::class,
        App\Domains\PaymentType\Providers\PaymentTypeServiceProvider::class,
        App\Domains\Purchase\Providers\PurchaseServiceProvider::class,
        App\Domains\Pack\Providers\PackServiceProvider::class,
        App\Domains\FixedAsset\Providers\FixedAssetServiceProvider::class,
        App\Domains\SafeMovement\Providers\SafeMovementServiceProvider::class,
        App\Domains\CashManagment\Providers\CashManagmentServiceProvider::class,
        App\Domains\ProductCodeCriteria\Providers\ProductCodeCriteriaServiceProvider::class,
        App\Domains\PurchaseRequest\Providers\PurchaseRequestServiceProvider::class,
        App\Domains\RequestQuotation\Providers\RequestQuotationServiceProvider::class,
        App\Domains\PurchaseInvoice\Providers\PurchaseInvoiceServiceProvider::class,
        App\Domains\ProjectPhase\Providers\ProjectPhaseServiceProvider::class,
        App\Domains\ConstructionName\Providers\ConstructionNameServiceProvider::class,
        App\Domains\FieldType\Providers\FieldTypeServiceProvider::class,
        App\Domains\WorkType\Providers\WorkTypeServiceProvider::class,
        App\Domains\Unit\Providers\UnitServiceProvider::class,
        App\Domains\ProjectManagementCategory\Providers\ProjectManagementCategoryServiceProvider::class,
        App\Domains\Clause\Providers\ClauseServiceProvider::class,
        App\Domains\DownpaymentOption\Providers\DownpaymentOptionServiceProvider::class,
        App\Domains\PurchaseInvoicesPayment\Providers\PurchaseInvoicesPaymentServiceProvider::class,
        App\Domains\SalesOrder\Providers\SalesOrderServiceProvider::class,
        App\Domains\SalesInvoice\Providers\SalesInvoiceServiceProvider::class,
        App\Domains\SalesInvoicesPayment\Providers\SalesInvoicesPaymentServiceProvider::class,
        App\Domains\DeductionOption\Providers\DeductionOptionServiceProvider::class,
        App\Domains\SalesConfigurationState\Providers\SalesConfigurationStateServiceProvider::class,
        App\Domains\SalesOrderTracking\Providers\SalesOrderTrackingServiceProvider::class,
        App\Domains\Project\Providers\ProjectServiceProvider::class,
        App\Domains\InventoryReceiptOrder\Providers\InventoryReceiptOrderServiceProvider::class,
        App\Domains\InventoryDeliveryOrder\Providers\InventoryDeliveryOrderServiceProvider::class,
        App\Domains\CustomizeReport\Providers\CustomizeReportServiceProvider::class,
        niklasravnsborg\LaravelPdf\PdfServiceProvider::class,

    ])->toArray(),

    /*
    |--------------------------------------------------------------------------
    | Class Aliases
    |--------------------------------------------------------------------------
    |
    | This array of class aliases will be registered when this application
    | is started. However, feel free to register as many as you wish as
    | the aliases are "lazy" loaded so they don't hinder performance.
    |
    */

    'aliases' => Facade::defaultAliases()->merge([
        // 'Example' => App\Facades\Example::class,
        'PDF' => niklasravnsborg\LaravelPdf\Facades\Pdf::class
    ])->toArray(),

];
