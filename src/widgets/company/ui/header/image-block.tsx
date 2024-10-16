'use client';

import { Button } from '@nextui-org/button';
import { ArrowSquareOut } from '@phosphor-icons/react';
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
      className='h-full py-4 rounded-3xl border-1 border-divider'
      href={url}
      variant='light'
    >
      <Flex center>
        <SquareImage alt={title} className='rounded-full' height={60} src={url} />
        <Text size={24}>{title}</Text>
      </Flex>
      <ArrowSquareOut className='mr-4' opacity={0.5} size={24} weight='bold' />
    </Button>
  );
};
