'use client';

import { Button } from '@nextui-org/button';
import { CiSearch } from 'react-icons/ci';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';

import { GlobalSearchModal } from './modal';

import { Text } from '@/src/shared/ui/primitives/text';

export const GlobalSearch = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className='min-w-60 justify-start'
        startContent={<CiSearch opacity={0.5} size={18} />}
        onClick={onOpen}
      >
        <Text opacity={0.5} size={14} tag={'span'}>
          Поиск
        </Text>
      </Button>
      <Modal
        backdrop='opaque'
        classNames={{
          base: 'bg-background border-1 border-white/10 rounded-b-none rounded-t-3xl sm:rounded-3xl shadow-lg m-0',
          closeButton: 'top-4 right-6',
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>{(onClose) => <GlobalSearchModal onClose={onClose} />}</ModalContent>
      </Modal>
    </>
  );
};
