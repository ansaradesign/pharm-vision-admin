import { TableHeaderConst } from '../config/table-header';
import { TableData } from '../config/table-data';

import { CustomTable } from '@/src/shared/ui/table';
import { AddBrand } from '@/src/features/brand';
import { StatisticsButton } from '@/src/shared/ui/buttons/statistics-button';

export const BrandsPage = () => {
  return (
    <CustomTable
      add={<AddBrand />}
      containerClassName='pb-16'
      extra={<StatisticsButton />}
      keyField='id'
      linkField='id'
      tableData={TableData}
      tableHeader={TableHeaderConst}
    />
  );
};
