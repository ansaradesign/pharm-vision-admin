import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import { ICompanyLabel } from "../../model/company-label/company-label.type";

import { Text } from "@/src/shared/ui/primitives/text";

export const CompanyLabel = ({
  name,
  customersAmount,
  logo,
  promotionId,
}: ICompanyLabel) => {
  return (
    <Button
      as={Link}
      className="w-full justify-start"
      href={`companies/${promotionId}`}
      radius="lg"
      startContent={
        logo ? (
          <Image alt={`${name} logo`} className="w-6 h-6" src={logo} />
        ) : (
          <div className="w-6 h-6 bg-default-200 rounded-full" />
        )
      }
    >
      <Text>{name}</Text>
      <Text opacity={0.5} size={14}>
        {customersAmount} пользователей
      </Text>
    </Button>
  );
};
