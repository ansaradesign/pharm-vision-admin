import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

import { useUpdateSearchParams } from "../../lib/hooks/use-search-params";

import { TableContainer } from "./table-container";

interface RootProps extends Omit<TableProps, "inContainer"> {
  title?: string;
  add?: React.ReactNode;
  search?: boolean;
}

interface ITableHeader {
  key: string | number;
  allowsSorting?: boolean;
  title: string | number;
}

interface TableProps {
  tableHeader: ITableHeader[];
  tableData: Record<string, any>[];
  inContainer?: boolean;
}

const TableElement = ({ tableHeader, tableData, inContainer }: TableProps) => {
  const update = useUpdateSearchParams();

  return (
    <Table
      isHeaderSticky
      aria-label="table"
      className={inContainer ? "h-[calc(100%-60px)]" : "h-full"}
      onSortChange={({ column, direction }) => {
        update("sort_column", column as string);
        update("sort_direction", direction as string);
      }}
    >
      <TableHeader>
        {tableHeader.map((column) => (
          <TableColumn key={column.key} allowsSorting={column.allowsSorting}>
            {column.title}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={tableData}>
        {(item) => (
          <TableRow key={item.promotionId}>
            {(columnKey) => (
              <TableCell className="py-4">
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export const CustomTable = ({
  title,
  add,
  search = true,
  tableData,
  tableHeader,
}: RootProps) => {
  if (title) {
    return (
      <TableContainer add={add} search={search} title={title}>
        <TableElement
          inContainer
          tableData={tableData}
          tableHeader={tableHeader}
        />
      </TableContainer>
    );
  }

  return <TableElement tableData={tableData} tableHeader={tableHeader} />;
};
