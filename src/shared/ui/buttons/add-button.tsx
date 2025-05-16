'use client';

import { Button, ButtonProps } from '@nextui-org/button';
import { LuPlus } from 'react-icons/lu';

interface Props extends ButtonProps {
  item: string;
}

export const AddButton = ({ className, color = 'primary', item, ...restProps }: Props) => {
  return (
    <Button
      className={'font-medium flex-shrink-0 ' + className}
      color={color}
      startContent={<LuPlus size={18} />}
      {...restProps}
    >
      Добавить {item}
    </Button>
  );
};
