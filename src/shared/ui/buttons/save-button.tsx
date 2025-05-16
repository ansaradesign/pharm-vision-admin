import { Button } from '@nextui-org/button';
import { PiFloppyDisk } from 'react-icons/pi';

interface Props {
  onClick: VoidFunction;
}

export const SaveButton = ({ onClick }: Props) => {
  return (
    <Button
      className='font-medium w-full'
      color='success'
      startContent={<PiFloppyDisk size={20} />}
      variant='shadow'
      onClick={onClick}
    >
      Сохранить
    </Button>
  );
};
