import { Button } from '@nextui-org/button';
import { FloppyDisk } from '@phosphor-icons/react';

interface Props {
  onClick: VoidFunction;
}

export const SaveButton = ({ onClick }: Props) => {
  return (
    <Button
      className='font-medium w-full'
      color='success'
      startContent={<FloppyDisk size={20} weight='bold' />}
      variant='shadow'
      onClick={onClick}
    >
      Сохранить
    </Button>
  );
};
