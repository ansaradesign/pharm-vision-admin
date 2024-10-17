import { X } from '@phosphor-icons/react';

import { useModal } from '../../model/modal-store';

export const CloseModalButton = () => {
  const { closeModal } = useModal();

  return (
    <button
      className='absolute top-4 right-4 w-8 h-8 bg-default-200 dark:bg-default rounded-full flex items-center justify-center z-50 animate-appear'
      onClick={closeModal}
    >
      <X className='text-foreground/50' size={20} weight='bold' />
    </button>
  );
};
