import Image from 'next/image';

import { ImageBlock } from './image-block';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { EditButton } from '@/src/shared/ui/buttons/edit-button';
import { ICompany } from '@/src/entities/company';

export const CompanyHeader = ({ banner, name, color, logo, favicon }: ICompany) => {
  return (
    <Flex className='pb-4'>
      <Flex className='aspect-[3/2] rounded-xl overflow-hidden' width={'54%'}>
        <Image alt='banner' height={1000} src={banner} width={1000} />
      </Flex>
      <Flex col className='mt-4'>
        <Flex center>
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
  );
};
