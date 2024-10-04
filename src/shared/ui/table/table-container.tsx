"use client";

import { PropsWithChildren } from "react";

import { Flex } from "../primitives/flex";
import { SearchInput } from "../inputs/search";

interface Props extends PropsWithChildren {
  add?: React.ReactNode;
  search?: boolean;
}

export const TableContainer = ({ children, add, search }: Props) => {
  return (
    <Flex col className="h-full overflow-hidden">
      <Flex center>
        {search ? <SearchInput /> : null}
        {add ? add : null}
      </Flex>
      {children}
    </Flex>
  );
};
