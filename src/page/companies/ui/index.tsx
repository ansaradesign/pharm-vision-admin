import { TableHeaderConst } from '../config/table-header';
import { TableData } from '../config/table-data';

import { AddCompany } from '@/src/features/company/';
import { CustomTable } from '@/src/shared/ui/table';

export const CompaniesPage = () => {
  return (
    <CustomTable
      add={<AddCompany />}
      keyField='promotionId'
      linkField='promotionId'
      tableData={TableData}
      tableHeader={TableHeaderConst}
    />
  );
};
