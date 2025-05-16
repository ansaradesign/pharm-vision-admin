'use client';

import { Button, ButtonProps } from '@nextui-org/button';
import { TbBallpen } from 'react-icons/tb';

export const EditButton = ({ className, color = 'primary', ...restProps }: ButtonProps) => {
  return (
    <Button
      className={'flex-shrink-0 font-medium ' + className}
      color={color}
      startContent={<TbBallpen size={18} />}
      {...restProps}
    >
      Редактировать
    </Button>
  );
};
