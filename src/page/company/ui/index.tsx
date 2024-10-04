import { Flex } from "@/src/shared/ui/primitives/flex";
import {
  CompanyButtons,
  CompanyHeader,
  CompanyStatistic,
} from "@/src/widgets/company";

interface Props {
  id: string;
}

export const CompanyPage = ({ id }: Props) => {
  return (
    <Flex col>
      <CompanyHeader id={id} />
      <CompanyButtons />
      <CompanyStatistic />
    </Flex>
  );
};
