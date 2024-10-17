'use client';

import { Button } from '@nextui-org/button';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { useModal } from '../../modal';

import { GlobalSearchModal } from './modal';

import { Text } from '@/src/shared/ui/primitives/text';

export const GlobalSearch = () => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(<GlobalSearchModal />);
  };

  return (
    <Button
      className='min-w-60 justify-start'
      startContent={<MagnifyingGlass opacity={0.5} size={18} weight='bold' />}
      onClick={handleClick}
    >
      <Text opacity={0.5} size={14} tag={'span'}>
        Поиск
      </Text>
    </Button>
  );
};
