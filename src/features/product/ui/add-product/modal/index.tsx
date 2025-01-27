import { useRef } from 'react';

import { IProduct } from '@/src/entities/product';
import { ProductForm } from '@/src/entities/product/ui/form';
import { ModalWrapper } from '@/src/features/modal';
import { SaveButton } from '@/src/shared/ui/buttons/save-button';

export const AddProductModal = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSave = (product: Partial<IProduct>) => {};

  const handleClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <ModalWrapper actionButtons={<SaveButton onClick={handleClick} />} title='Создать продукт'>
      <ProductForm ref={formRef} formSubmit={handleSave} />
    </ModalWrapper>
  );
};
