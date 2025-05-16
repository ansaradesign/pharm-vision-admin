'use client';

import { Button } from '@nextui-org/button';
import { PiArrowSquareOut } from 'react-icons/pi';
import Link from 'next/link';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { SquareImage } from '@/src/shared/ui/square-image';
import { Text } from '@/src/shared/ui/primitives/text';

interface Props {
  title: string;
  url: string;
}

export const ImageBlock = ({ title, url }: Props) => {
  return (
    <Button
      as={Link}
      className='h-full p-3 rounded-3xl border-1 border-divider'
      href={url}
      variant='light'
    >
      <Flex center>
        <SquareImage alt={title} className='rounded-full' height={50} src={url} />
        <Text size={20}>{title}</Text>
      </Flex>
      <PiArrowSquareOut className='mr-4' opacity={0.5} size={24} />
    </Button>
  );
};
