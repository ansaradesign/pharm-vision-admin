import { Button } from '@nextui-org/button';
import { PiCaretRight } from 'react-icons/pi';
import Link from 'next/link';

import { IGlobalSearchLink } from '../../model/global-search-link.type';

interface Props extends IGlobalSearchLink {
  onClose: () => void;
}

export const GlobalSearchLinkButton = ({ title, href, onClose }: Props) => {
  return (
    <Button
      as={Link}
      className='justify-between font-medium border-1 border-divider'
      endContent={<PiCaretRight opacity={0.5} size={20} />}
      href={href}
      variant='light'
      onClick={onClose}
    >
      {title}
    </Button>
  );
};
