import { GlobalSearchLinks } from '../../config/links';

import { GlobalSearchLinkButton } from './link-button';

import { ModalLayout } from '@/src/features/modal/';
import { SearchInput } from '@/src/shared/ui/inputs/search';
import { Flex } from '@/src/shared/ui/primitives/flex';

export const GlobalSearchModal = () => {
  return (
    <ModalLayout title='Глобальный поиск'>
      <SearchInput isGlobal />
      <Flex col className='mt-3' gap={2}>
        {GlobalSearchLinks.map((link) => (
          <GlobalSearchLinkButton key={link.href} {...link} />
        ))}
      </Flex>
    </ModalLayout>
  );
};
