'use client';

import { AddBrandModal } from './modal';

import { useModal } from '@/src/features/modal';
import { AddButton } from '@/src/shared/ui/buttons/add-button';

export const AddBrand = () => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(<AddBrandModal />);
  };

  return <AddButton item='бренд' onClick={handleClick} />;
};
