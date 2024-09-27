"use client";
import { PropsWithChildren } from "react";

import { Flex } from "../primitives/flex";
import { Text } from "../primitives/text";

interface Props extends PropsWithChildren {
  title: string;
  add?: React.ReactNode;
  search?: React.ReactNode;
}

export const TableContainer = ({ children, title, add, search }: Props) => {
  return (
    <Flex col className="mt-3 pb-4 h-full">
      <Flex center>
        <Text size={32} tag="h2" weight={800}>
          {title}
        </Text>
        {add ? add : null}
        {search ? search : null}
      </Flex>
      {children}
    </Flex>
  );
};
