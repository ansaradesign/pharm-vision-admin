'use client';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { TitleContainer } from '@/src/shared/ui/title-container';
import { ProductHeader } from '@/src/widgets/product';

interface Props {
  id: number;
}
export const ProductPage = ({ id }: Props) => {
  return (
    <Flex col gap={0}>
      <ProductHeader />
      <TitleContainer title='Спецпредложения'>
        <Flex className='grid grid-cols-3'>
          <div className='bg-default w-full h-60 rounded-3xl' />
          <div className='bg-default w-full h-60 rounded-3xl' />
          <div className='bg-default w-full h-60 rounded-3xl' />
          <div className='bg-default w-full h-60 rounded-3xl' />
          <div className='bg-default w-full h-60 rounded-3xl' />
        </Flex>
      </TitleContainer>
    </Flex>
  );
};
