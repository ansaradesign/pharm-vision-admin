import { DateRangePicker, DateRangePickerProps } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";

import { TDateRange } from "../../model/date-range.type";
import { DateManager } from "../../lib/utils/date-manager";

type Props = {
  range: TDateRange | null;
  onChangeRange: (value: TDateRange) => void;
  halfTextOpacity?: boolean;
} & DateRangePickerProps;

export const DateRangePickerInput = ({
  range,
  onChangeRange,
  halfTextOpacity,
  ...rest
}: Props) => {
  return (
    <DateRangePicker
      hideTimeZone
      aria-label="date-range-picker"
      classNames={{
        inputWrapper: "!bg-default",
        input: halfTextOpacity ? "opacity-50" : "",
      }}
      value={
        range
          ? {
              start: parseDate(range.start),
              end: parseDate(range.end),
            }
          : null
      }
      onChange={(value) => {
        const start = DateManager.getDateWithoutTime();

        start.setDate(value.start.day + 1);
        start.setMonth(value.start.month - 1);
        start.setFullYear(value.start.year);

        const end = DateManager.getDateWithoutTime();

        end.setDate(value.end.day + 1);
        end.setMonth(value.end.month - 1);
        end.setFullYear(value.end.year);

        onChangeRange({
          start: start.toISOString().slice(0, 10),
          end: end.toISOString().slice(0, 10),
        });
      }}
      {...rest}
    />
  );
};
