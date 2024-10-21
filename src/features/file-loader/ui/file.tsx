import Image from 'next/image';
import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { File } from '@phosphor-icons/react';

import { DeleteButton } from './delete-button';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

interface Props {
  file: File;
  index: number;
  setFileList: (value: File[]) => void;
  fileList: File[];
}

export const FileCard = ({ file, index, setFileList, fileList }: Props) => {
  const [imgUrl, setImgUrl] = useState<string>(URL.createObjectURL(file));

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);

    setImgUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  const handleDeleteFile = () => {
    setTimeout(() => {
      const updatedFileList = [...fileList];

      updatedFileList.splice(index, 1);
      setFileList(updatedFileList);
    }, 0);
  };

  return (
    <m.div layout className='relative gap-4 flex items-center flex-col'>
      <Flex center col className='justify-start text-start flex-shrink' gap={6}>
        <div className='flex items-center w-full aspect-square rounded-xl bg-default overflow-clip relative justify-center flex-shrink-0 shadow-base'>
          {file.type.split('/')[0] === 'image' ? (
            <Image
              fill
              unoptimized
              alt={file.name}
              className='snap-start flex-shrink-0 object-cover h-full z-10 cursor-pointer'
              src={imgUrl || ''}
            />
          ) : (
            <File opacity={0.5} size={30} weight='bold' />
          )}
          <DeleteButton handleDeleteFile={handleDeleteFile} />
        </div>

        <Text
          className='flex-shrink break-words line-clamp-2 -mt-3 text-center max-w-full px-1'
          opacity={0.5}
          size={14}
        >
          {file.name}
        </Text>
      </Flex>
    </m.div>
  );
};
