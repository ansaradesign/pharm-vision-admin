import { Button } from '@nextui-org/button';
import { GrTrash } from 'react-icons/gr';

interface Props {
  handleDeleteFile: () => void;
}

export const DeleteButton = ({ handleDeleteFile }: Props) => {
  return (
    <Button
      isIconOnly
      className='absolute right-1 bottom-1 z-10'
      color='danger'
      size='sm'
      onClick={handleDeleteFile}
    >
      <GrTrash color='white' size={18} />
    </Button>
  );
};
