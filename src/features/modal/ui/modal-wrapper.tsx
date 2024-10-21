import { PropsWithChildren, ReactNode } from 'react';
import { Button } from '@nextui-org/button';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { X } from '@phosphor-icons/react/dist/ssr';

import { useModal } from '../model/modal-store';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = { title: string; actionButtons?: ReactNode } & PropsWithChildren;

export const ModalWrapper = ({ title, children, actionButtons }: Props) => {
  const { closeModal } = useModal();

  return (
    <Flex col className='p-6 md:p-8 h-dvh' gap={8}>
      <Flex center>
        <Text className='w-full' size={24} weight={700}>
          {title}
        </Text>
        <Button isIconOnly className='shadow-base' radius='full' onPress={closeModal}>
          <X className='w-1/2 h-1/2' weight='bold' />
        </Button>
      </Flex>

      <ScrollShadow className='flex flex-col gap-8 scrollbar-hide -my-6 py-6 min-h-[calc(100dvh-164px)]'>
        {children}
      </ScrollShadow>
      <Flex>{actionButtons}</Flex>
    </Flex>
  );
};
