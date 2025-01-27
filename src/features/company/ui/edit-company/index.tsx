'use client';

import { EditCompanyModal } from './modal';

import { ICompany } from '@/src/entities/company';
import { useModal } from '@/src/features/modal';
import { EditButton } from '@/src/shared/ui/buttons/edit-button';

export const EditCompany = (company: ICompany) => {
  const { setModal } = useModal();
  const handleClick = () => {
    setModal(<EditCompanyModal {...company} />);
  };

  return <EditButton color='default' size='lg' onClick={handleClick} />;
};
