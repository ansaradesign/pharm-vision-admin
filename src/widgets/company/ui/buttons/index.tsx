"use client";

import { usePathname } from "next/navigation";

import { LinkButton } from "@/src/shared/ui/buttons/link-button";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { Text } from "@/src/shared/ui/primitives/text";

export const CompanyButtons = () => {
  const path = usePathname();

  return (
    <Flex>
      <LinkButton href={path + "/brands"}>
        <Flex>
          <Text size={20}>Бренды</Text>
          <Text className="leading-8" opacity={0.5}>
            20 шт.
          </Text>
        </Flex>
      </LinkButton>
      <LinkButton href={path + "/offers"}>
        <Flex>
          <Text size={20}>Спецпредложения</Text>
          <Text className="leading-8" opacity={0.5}>
            20 шт.
          </Text>
        </Flex>
      </LinkButton>
    </Flex>
  );
};
