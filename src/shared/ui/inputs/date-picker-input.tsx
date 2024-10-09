import { parseAbsoluteToLocal } from '@internationalized/date';
import { DatePicker, DatePickerProps } from '@nextui-org/date-picker';

type Props = {
  isDisabled?: boolean;
  date?: Date | null;
  onChange: (date: Date) => void;
  halfTextOpacity?: boolean;
} & DatePickerProps;

export const DatePickerInput = ({
  isDisabled = false,
  date,
  onChange,
  halfTextOpacity,
  ...rest
}: Props) => {
  return (
    <DatePicker
      aria-label='datepicker'
      dateInputClassNames={{
        inputWrapper: '!bg-default',
        input: halfTextOpacity ? 'opacity-50' : '',
      }}
      granularity='day'
      isDisabled={isDisabled}
      value={parseAbsoluteToLocal(date ? date.toISOString() : new Date().toISOString())}
      onChange={(e) => {
        if (e) {
          onChange(e.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone));
        }
      }}
      {...rest}
    />
  );
};
