import Link from 'next/link';

import { HeaderVariants } from '../config/header-variants';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { ProfileButton } from '@/src/entities/profile';
import { Text } from '@/src/shared/ui/primitives/text';
import { ReceiptChip } from '@/src/entities/receipts';
import { GlobalSearch } from '@/src/features/global-search/';
import { BackButton } from '@/src/shared/ui/buttons/back-button';
import { CustomBreadCrumbs } from '@/src/features/bread-crumbs';

interface Props {
  pathname: string;
}

export const Header = ({ pathname }: Props) => {
  const headerVariant = HeaderVariants[pathname];

  if (headerVariant === 'none') {
    return null;
  }

  return (
    <Flex col className='bg-background' gap={0}>
      <Flex center className='py-3 px-8 border-b-1 border-divider'>
        <Flex className='border-r-1 border-divider pr-6' width={''}>
          <Text size={20} weight={700}>
            Logo
          </Text>
        </Flex>
        <Flex center className='text=[14px] ml-2' gap={8} width={''}>
          <Link className={`${pathname === '/' ? '' : 'opacity-50'}`} href={'/'}>
            Главная
          </Link>
          <Flex center>
            <Link
              className={`text-nowrap ${pathname === '/receipts' ? '' : 'opacity-50'}`}
              href={'/receipts'}
            >
              Проверка чеков
            </Link>
            <ReceiptChip amount={423} />
          </Flex>
        </Flex>
        <Flex center className='justify-end'>
          <GlobalSearch />
          <ProfileButton />
        </Flex>
      </Flex>
      {headerVariant === 'low' ? null : (
        <Flex center className='py-2 px-8 border-b-1 border-divider'>
          <Flex className='border-r-1 border-divider pr-6' width={''}>
            <BackButton />
          </Flex>
          <CustomBreadCrumbs />
        </Flex>
      )}
    </Flex>
  );
};
