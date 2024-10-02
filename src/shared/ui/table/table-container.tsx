"use client";

import { PropsWithChildren } from "react";

import { Flex } from "../primitives/flex";
import { Text } from "../primitives/text";
import { SearchInput } from "../inputs/search";

interface Props extends PropsWithChildren {
  title: string;
  add?: React.ReactNode;
  search?: boolean;
}

export const TableContainer = ({ children, title, add, search }: Props) => {
  return (
    <Flex col className="h-full overflow-hidden">
      <Flex center>
        <Text size={32} tag="h2" weight={500}>
          {title}
        </Text>
        {add ? add : null}
        {search ? <SearchInput /> : null}
      </Flex>
      {children}
    </Flex>
  );
};
