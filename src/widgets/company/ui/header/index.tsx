import Image from 'next/image';

import { ImageBlock } from './image-block';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { EditButton } from '@/src/shared/ui/buttons/edit-button';
import { ICompany } from '@/src/entities/company';
import { BreadCrumbsLayout } from '@/src/features/bread-crumbs';

export const CompanyHeader = ({ banner, name, color, logo, favicon, promotionId }: ICompany) => {
  return (
    <BreadCrumbsLayout category='companies' id={promotionId} title={name}>
      <Flex className='pb-4'>
        <div className='rounded-xl overflow-hidden aspect-3/2 flex-shrink-0 '>
          <Image
            alt='banner'
            className='object-cover !h-full'
            height={292}
            src={banner}
            width={438}
          />
        </div>
        <Flex col className='h-fit'>
          <Flex center className='mt-4'>
            <div className='h-6 w-6 rounded-md' style={{ backgroundColor: '#72E992' }} />
            <Text size={30} weight={700}>
              {name}
            </Text>
          </Flex>
          <Flex col>
            <ImageBlock title='Логотип' url={logo} />
            <ImageBlock title='Фавикон' url={favicon} />
          </Flex>
          <EditButton color='default' size='lg' />
        </Flex>
      </Flex>
    </BreadCrumbsLayout>
  );
};
