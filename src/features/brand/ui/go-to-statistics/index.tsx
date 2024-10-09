'use client';

import { Button } from '@nextui-org/button';
import { ChartBar } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const GoToStatistics = () => {
  const pathname = usePathname();

  return (
    <Button
      as={Link}
      className='font-medium w-fit px-6 flex items-center'
      color='success'
      href={`${pathname}/statistics`}
      startContent={<ChartBar size={20} weight='bold' />}
    >
      Статистика
    </Button>
  );
};
