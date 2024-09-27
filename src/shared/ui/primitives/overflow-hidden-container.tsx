import { PropsWithChildren } from "react";

import { Flex } from "./flex";

export const OverflowHiddenContainer = ({ children }: PropsWithChildren) => {
  return (
    <Flex col className="h-full overflow-hidden">
      {children}
    </Flex>
  );
};
