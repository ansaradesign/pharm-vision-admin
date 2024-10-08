"use client";

import { usePathname } from "next/navigation";

import { LinkButton } from "@/src/shared/ui/buttons/link-button";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { Text } from "@/src/shared/ui/primitives/text";

export const BrandButtons = () => {
  const path = usePathname();

  return (
    <Flex>
      <LinkButton href={path + "/products"}>
        <Flex>
          <Text size={20}>Товары</Text>
          <Text className="leading-8" opacity={0.5}>
            20 шт.
          </Text>
        </Flex>
      </LinkButton>
    </Flex>
  );
};
