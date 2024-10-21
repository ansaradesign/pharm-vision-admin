'use client';

import { AddCompanyModal } from './modal';

import { useModal } from '@/src/features/modal';
import { AddButton } from '@/src/shared/ui/buttons/add-button';

export const AddCompany = () => {
  const { setModal } = useModal();
  const handleClick = () => {
    setModal(<AddCompanyModal />);
  };

  return <AddButton item='компанию' onClick={handleClick} />;
};
