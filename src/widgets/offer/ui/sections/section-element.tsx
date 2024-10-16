import { Button } from '@nextui-org/button';
import Link from 'next/link';

import { IOfferSectionElementProps } from '../../model/offer-section-element.type';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { SquareImage } from '@/src/shared/ui/square-image';

export const OfferSectionElement = ({
  title,
  description,
  icon,
  href,
}: IOfferSectionElementProps) => {
  return (
    <Button
      as={Link}
      className='justify-start h-fit p-4 rounded-3xl'
      href={href}
      startContent={
        <SquareImage alt='element icon' className='rounded-full' height={60} src={icon} />
      }
    >
      <Flex col className='ml-2' gap={1}>
        <Text className='leading-6' size={20}>
          {title}
        </Text>
        <Text className='leading-4' opacity={0.5}>
          {description}
        </Text>
      </Flex>
    </Button>
  );
};
