'use client';

import { Button } from '@nextui-org/button';
import { ChartBar } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const StatisticsButton = () => {
  const pathname = usePathname();

  return (
    <Button
      as={Link}
      className='font-medium flex-shrink-0 '
      color='success'
      href={`${pathname}/statistics`}
      startContent={<ChartBar size={20} weight='bold' />}
    >
      Статистика
    </Button>
  );
};
