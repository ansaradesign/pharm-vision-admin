"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { TestCompany } from "../config/test-company";

import { EditCompany } from "@/src/features/company/edit-company";
import { EntityHeader } from "@/src/widgets/entity-header/";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { CompanyInfo } from "@/src/entities/company";
import { MotionLayout } from "@/src/shared/ui/layouts/motion-layout";
import { Text } from "@/src/shared/ui/primitives/text";
import { LinkButton } from "@/src/shared/ui/buttons/link-button";
import { InfoContainer } from "@/src/shared/ui/info-container";

interface Props {
  id: string;
}

export const CompanyPage = ({ id }: Props) => {
  const path = usePathname();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Flex col>
      <EntityHeader
        category="companies"
        changeOpened={() => {
          setIsOpened((prev) => !prev);
        }}
        edit={<EditCompany />}
        id={TestCompany.promotionId}
        isOpened={isOpened}
        title={TestCompany.name}
      />
      {isOpened ? (
        <MotionLayout
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          initial={{ y: -20, opacity: 1, filter: "blur(10px)" }}
        >
          <InfoContainer>
            <CompanyInfo {...TestCompany} />
          </InfoContainer>
        </MotionLayout>
      ) : null}
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
            <Text size={20}>Спец-предложения</Text>
            <Text className="leading-8" opacity={0.5}>
              20 шт.
            </Text>
          </Flex>
        </LinkButton>
      </Flex>
    </Flex>
  );
};
