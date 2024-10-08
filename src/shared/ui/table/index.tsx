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

import { TableContainer, TableContainerProps } from "./table-container";

type RootProps<T extends string> = Omit<TableProps<T>, "inContainer"> &
  TableContainerProps;

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
  subLink?: string;
}

const TableElement = <T extends string>({
  tableHeader,
  tableData,
  inContainer,
  linkField,
  keyField,
  subLink,
}: TableProps<T>) => {
  const update = useUpdateSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleRedirect = (param: string | number) => {
    router.push(`${pathname}/${subLink ? subLink + "/" : ""}${param}`);
  };

  return (
    <Table
      isHeaderSticky
      isStriped
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
                  className="w-full h-full py-2 text-start"
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
  const { add, search = true, containerClassName, extra, ...restProps } = props;

  if (add || search || extra) {
    return (
      <TableContainer
        add={add}
        containerClassName={containerClassName}
        extra={extra}
        search={search}
      >
        <TableElement {...restProps} />
      </TableContainer>
    );
  }

  return <TableElement {...restProps} />;
};
