"use client";

import { PropsWithChildren } from "react";

import { Flex } from "../primitives/flex";
import { SearchInput } from "../inputs/search";

export interface TableContainerProps extends PropsWithChildren {
  add?: React.ReactNode;
  search?: boolean;
  extra?: React.ReactNode;
  containerClassName?: string;
}

export const TableContainer = ({
  children,
  add,
  search,
  extra,
  containerClassName,
}: TableContainerProps) => {
  return (
    <Flex col className={"h-full overflow-hidden " + containerClassName}>
      <Flex center>
        {search ? <SearchInput /> : null}
        {add ? add : null}
        {extra ? extra : null}
      </Flex>
      {children}
    </Flex>
  );
};
