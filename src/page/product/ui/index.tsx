'use client';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { ProductHeader, ProductSection } from '@/src/widgets/product';

interface Props {
  id: number;
}
export const ProductPage = ({ id }: Props) => {
  return (
    <Flex col gap={0}>
      <ProductHeader />
      <ProductSection />
    </Flex>
  );
};
