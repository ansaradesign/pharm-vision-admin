"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

import { useUpdateSearchParams } from "../../lib/hooks/use-search-params";

import { TableContainer } from "./table-container";

interface RootProps<T extends string>
  extends Omit<TableProps<T>, "inContainer"> {
  add?: React.ReactNode;
  search?: boolean;
}

interface ITableHeader {
  key: string | number;
  allowsSorting?: boolean;
  title: string | number;
}

interface TableProps<T extends string> {
  tableHeader: ITableHeader[];
  tableData: Record<string | T, any>[];
  inContainer?: boolean;
  linkField?: T;
  keyField: T;
}

const TableElement = <T extends string>({
  tableHeader,
  tableData,
  inContainer,
  linkField,
  keyField,
}: TableProps<T>) => {
  const update = useUpdateSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleRedirect = (param: string | number) => {
    router.push(`${pathname}/${param}`);
  };

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
          <TableRow key={item[keyField]}>
            {(columnKey) => (
              <TableCell>
                <button
                  className="w-full h-full py-4 text-start"
                  onClick={() => {
                    if (linkField) {
                      handleRedirect(item[linkField]);
                    }
                  }}
                >
                  {getKeyValue(item, columnKey)}
                </button>
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export const CustomTable = <T extends string>(props: RootProps<T>) => {
  const { add, search = true, ...restProps } = props;

  if (add || search) {
    return (
      <TableContainer add={add} search={search}>
        <TableElement {...restProps} />
      </TableContainer>
    );
  }

  return <TableElement {...restProps} />;
};
