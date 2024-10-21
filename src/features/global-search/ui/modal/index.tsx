import { ModalBody, ModalHeader } from '@nextui-org/react';

import { GlobalSearchLinks } from '../../config/links';

import { GlobalSearchLinkButton } from './link-button';

import { SearchInput } from '@/src/shared/ui/inputs/search';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

interface Props {
  onClose: () => void;
}
export const GlobalSearchModal = ({ onClose }: Props) => {
  return (
    <>
      <ModalHeader>
        <Text tag={'h2'}>Глобальный поиск</Text>
      </ModalHeader>
      <ModalBody className='pb-6 -mt-2'>
        <SearchInput isGlobal />
        <Flex col gap={2}>
          {GlobalSearchLinks.map((link) => (
            <GlobalSearchLinkButton key={link.href} {...link} onClose={onClose} />
          ))}
        </Flex>
      </ModalBody>
    </>
  );
};
