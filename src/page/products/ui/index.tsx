import { TableData } from '../config/table-data';
import { TableHeaderConst } from '../config/table-header';

import { AddProduct } from '@/src/features/product';
import { CustomTable } from '@/src/shared/ui/table';

export const ProductsPage = () => {
  return (
    <CustomTable
      add={<AddProduct />}
      containerClassName='pb-16'
      keyField='id'
      linkField='id'
      tableData={TableData}
      tableHeader={TableHeaderConst}
    />
  );
};
