import { TDateRange } from "@/src/shared/model/date-range.type";
import { DateRangePickerInput } from "@/src/shared/ui/inputs/date-range-picker";
import { Flex } from "@/src/shared/ui/primitives/flex";
import { Text } from "@/src/shared/ui/primitives/text";

interface Props {
  amount: number;
  dateRange: TDateRange | null;
  onChangeDateRange: (value: TDateRange) => void;
}

export const DashboardHeader = ({
  amount,
  dateRange,
  onChangeDateRange,
}: Props) => {
  return (
    <Flex col gap={6}>
      <Text opacity={0.5}>
        Здесь вы можете посмотреть общую статистику по всем компаниям.
      </Text>
      <Flex>
        <Flex>
          <Text className="leading-5" size={40} tag="h2" weight={700}>
            {amount.toLocaleString("ru-Ru")}₽
          </Text>
          <Text size={20}>всего выведенно</Text>
        </Flex>
        <DateRangePickerInput
          halfTextOpacity
          className="w-fit"
          range={dateRange}
          onChangeRange={onChangeDateRange}
        />
      </Flex>
    </Flex>
  );
};
