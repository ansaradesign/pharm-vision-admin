import { TableHeaderConst } from '../config/table-header';
import { TableData } from '../config/table-data';

import { CustomTable } from '@/src/shared/ui/table';
import { AddBrand, GoToStatistics } from '@/src/features/brand';

export const BrandsPage = () => {
  return (
    <CustomTable
      add={<AddBrand />}
      extra={<GoToStatistics />}
      keyField='id'
      linkField='id'
      tableData={TableData}
      tableHeader={TableHeaderConst}
    />
  );
};
