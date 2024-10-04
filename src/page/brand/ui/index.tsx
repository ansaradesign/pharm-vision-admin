import { Flex } from "@/src/shared/ui/primitives/flex";
import { BrandHeader } from "@/src/widgets/brand";

interface Props {
  id: string;
}

export const BrandPage = ({ id }: Props) => {
  return (
    <Flex col>
      <BrandHeader id={id} />
    </Flex>
  );
};
