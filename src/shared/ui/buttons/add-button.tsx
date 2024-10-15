'use client';

import { Button, ButtonProps } from '@nextui-org/button';
import { Plus } from '@phosphor-icons/react';

interface Props extends ButtonProps {
  item: string;
}

export const AddButton = ({ className, color = 'primary', item, ...restProps }: Props) => {
  return (
    <Button
      className={'font-medium flex-shrink-0 ' + className}
      color={color}
      startContent={<Plus size={18} weight='bold' />}
      {...restProps}
    >
      Добавить {item}
    </Button>
  );
};
