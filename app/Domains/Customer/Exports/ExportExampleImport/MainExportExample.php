<?php

namespace App\Domains\Customer\Exports\ExportExampleImport;

use App\Domains\Customer\Exports\Utilities\CitiesExport;
use App\Domains\Customer\Exports\Utilities\CountriesExport;
use App\Domains\Customer\Exports\ExportExampleImport\CustomersExportExample;
use App\Domains\Customer\Exports\Utilities\CurrenciesExport;
use App\Domains\Customer\Exports\Utilities\StatesExport;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;


class MainExportExample  implements WithMultipleSheets
{

    public function sheets(): array
    {
        $data = [
            'Currencies' => new CurrenciesExport(),
            'Countries' => new CountriesExport(),
            'States' => new StatesExport(),
            'Cities' => new CitiesExport(),
        ];

        return $data;
    }

}
