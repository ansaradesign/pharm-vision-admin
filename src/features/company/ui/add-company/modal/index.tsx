import { Button } from '@nextui-org/button';
import { FloppyDisk } from '@phosphor-icons/react';

import { CompanyForm } from '@/src/entities/company';
import { ModalWrapper } from '@/src/features/modal';

export const AddCompanyModal = () => {
  return (
    <ModalWrapper
      actionButtons={
        <Button
          className='font-medium w-full'
          color='success'
          startContent={<FloppyDisk size={20} weight='bold' />}
          variant='shadow'
        >
          Сохранить
        </Button>
      }
      title='Создать компанию'
    >
      <CompanyForm />
    </ModalWrapper>
  );
};
