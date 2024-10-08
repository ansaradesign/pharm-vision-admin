import { TableData } from "../config/table-data";
import { TableHeaderConst } from "../config/table-header";

import { AddProduct } from "@/src/features/product";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { CustomTable } from "@/src/shared/ui/table";
import { BrandHeader } from "@/src/widgets/brand";

interface Props {
  id: string;
}

export const BrandPage = ({ id }: Props) => {
  return (
    <Flex col className="h-full overflow-hidden">
      <BrandHeader id={id} />
      <CustomTable
        add={<AddProduct />}
        containerClassName="pb-16"
        keyField="id"
        linkField="id"
        subLink="products"
        tableData={TableData}
        tableHeader={TableHeaderConst}
      />
    </Flex>
  );
};
