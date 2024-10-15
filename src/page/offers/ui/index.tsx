import { TableData } from '../config/table-data';
import { TableHeaderConst } from '../config/table-header';

import { StatisticsButton } from '@/src/shared/ui/buttons/statistics-button';
import { AddOffer } from '@/src/features/offer';
import { CustomTable } from '@/src/shared/ui/table';

export const OffersPage = () => {
  return (
    <CustomTable
      add={<AddOffer />}
      containerClassName='pb-16'
      extra={<StatisticsButton />}
      keyField='id'
      linkField='id'
      tableData={TableData}
      tableHeader={TableHeaderConst}
    />
  );
};
