import { Button } from '@nextui-org/button';
import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';

import { IGlobalSearchLink } from '../../model/global-search-link.type';

import { useModal } from '@/src/features/modal';

export const GlobalSearchLinkButton = ({ title, href }: IGlobalSearchLink) => {
  const { closeModal } = useModal();

  return (
    <Button
      as={Link}
      className='justify-between font-medium border-1 border-divider'
      endContent={<CaretRight opacity={0.5} size={20} weight='bold' />}
      href={href}
      variant='light'
      onClick={closeModal}
    >
      {title}
    </Button>
  );
};
