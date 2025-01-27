'use client';

import { AddProductModal } from './modal';

import { useModal } from '@/src/features/modal';
import { AddButton } from '@/src/shared/ui/buttons/add-button';

export const AddProduct = () => {
  const { setModal } = useModal();
  const handleClick = () => {
    setModal(<AddProductModal />);
  };

  return <AddButton item='продукт' onClick={handleClick} />;
};
