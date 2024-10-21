import Image from 'next/image';
import { memo } from 'react';
import { m } from 'framer-motion';

import { DeleteButton } from './delete-button';

import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  link: string;
  index: number;
  setImageLinks: (links: string[]) => void;
  imageLinks: string[];
};

export const ImageByLink = memo(({ link, index, setImageLinks, imageLinks }: Props) => {
  const handleDeleteImage = () => {
    setTimeout(() => {
      const newImageLinks = [...imageLinks];

      newImageLinks.splice(index, 1);
      setImageLinks(newImageLinks);
    }, 0);
  };

  return (
    <m.div layout className='relative gap-4 flex items-center flex-col'>
      <Flex center col className='justify-start text-start flex-shrink ' gap={6}>
        <div className='flex items-center w-full aspect-square rounded-xl bg-default overflow-clip relative justify-center flex-shrink-0 shadow-base'>
          <Image
            fill
            unoptimized
            alt={link}
            className='snap-start flex-shrink-0 object-cover h-full z-10 cursor-pointer'
            draggable={false}
            src={link}
          />
          <DeleteButton handleDeleteFile={handleDeleteImage} />
        </div>
      </Flex>
    </m.div>
  );
});
