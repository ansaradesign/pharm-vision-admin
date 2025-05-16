import { Button } from '@nextui-org/button';
import { PiCaretRight } from 'react-icons/pi';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href: string;
}

export const LinkButton = ({ href, children }: Props) => {
  return (
    <Button
      as={Link}
      className='w-full text-start h-16 bg-background border-1 border-divider px-5'
      endContent={<PiCaretRight opacity={0.5} size={26} />}
      href={href}
    >
      {children}
    </Button>
  );
};
