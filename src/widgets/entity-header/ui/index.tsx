"use client";

import { Button } from "@nextui-org/button";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

import {
  TBreadCrumbsDynamic,
  useBreadCrumbs,
} from "@/src/features/bread-crumbs";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { Text } from "@/src/shared/ui/primitives/text";

interface Props {
  id: string | number;
  title: string;
  edit?: React.ReactNode;
  category: TBreadCrumbsDynamic;
  isOpened: boolean;
  changeOpened: VoidFunction;
}

export const EntityHeader = ({
  title,
  edit,
  category,
  id,
  isOpened,
  changeOpened,
}: Props) => {
  const { addName } = useBreadCrumbs();

  addName(category, id.toString(), title);

  const caretClass = clsx("transition-all", {
    "-rotate-180": isOpened,
  });

  return (
    <Flex center>
      <Flex center gap={2}>
        <Text size={32} tag="h2" weight={700}>
          {title}
        </Text>
        <Button
          isIconOnly
          startContent={
            <CaretDown
              className={caretClass}
              opacity={0.5}
              size={20}
              weight="bold"
            />
          }
          variant="light"
          onClick={changeOpened}
        />
      </Flex>

      {edit ? edit : null}
    </Flex>
  );
};
