import { Flex } from "@/src/shared/ui/primitives/flex";
import { Text } from "@/src/shared/ui/primitives/text";

interface Props {
  amount: number;
}

export const ReceiptChip = ({ amount }: Props) => {
  return (
    <Flex className="bg-foreground rounded-full h-5 px-1">
      <Text className="text-background" size={13} tag={"span"}>
        {amount}
      </Text>
    </Flex>
  );
};
