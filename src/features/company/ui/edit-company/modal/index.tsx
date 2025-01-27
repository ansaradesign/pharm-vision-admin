'use client';
import { useRef } from 'react';

import { CompanyForm, ICompany } from '@/src/entities/company';
import { ModalWrapper } from '@/src/features/modal';
import { SaveButton } from '@/src/shared/ui/buttons/save-button';

export const EditCompanyModal = (company: ICompany) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSave = (
    company: Partial<ICompany>,
    logo?: File[],
    brand?: File[],
    favicon?: File[],
  ) => {};

  const handleClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <ModalWrapper
      actionButtons={<SaveButton onClick={handleClick} />}
      title='Редактировать компанию'
    >
      <CompanyForm ref={formRef} formSubmit={handleSave} {...company} />
    </ModalWrapper>
  );
};
