import { useRef } from 'react';

import { ModalWrapper } from '@/src/features/modal';
import { BrandForm } from '@/src/entities/brand/ui/form';
import { SaveButton } from '@/src/shared/ui/buttons/save-button';
import { IBrand } from '@/src/entities/brand';

export const AddBrandModal = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSave = (brand: Partial<IBrand>, logo?: File[]) => {};

  const handleClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <ModalWrapper actionButtons={<SaveButton onClick={handleClick} />} title='Создать бренд'>
      <BrandForm ref={formRef} formSubmit={handleSave} />
    </ModalWrapper>
  );
};
