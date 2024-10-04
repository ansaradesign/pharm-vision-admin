import { TableHeaderConst } from "../config/table-header";
import { TableData } from "../config/table-data";

import { CustomTable } from "@/src/shared/ui/table";
import { AddBrand } from "@/src/features/brand";

export const BrandsPage = () => {
  return (
    <CustomTable
      add={<AddBrand />}
      keyField="id"
      linkField="id"
      tableData={TableData}
      tableHeader={TableHeaderConst}
    />
  );
};
