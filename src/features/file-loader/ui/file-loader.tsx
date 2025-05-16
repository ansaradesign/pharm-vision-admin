import { ChangeEventHandler, useRef } from 'react';
import { Button } from '@nextui-org/button';
import { LuPlus } from 'react-icons/lu';

import { IFileLoader } from '../model/file-loader-type';

export const FileLoader = ({
  setFileList,
  fileList,
  isSingle,
  buttonTitle,
  multiple,
  accept,
  imageLinks,
}: IFileLoader) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpenInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;

    if (files) {
      const newFilesArray = Object.values(files);

      setFileList([...fileList, ...newFilesArray]);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <Button
        className='font-medium w-full'
        isDisabled={isSingle && (fileList.length > 0 || (imageLinks && imageLinks.length > 0))}
        startContent={<LuPlus size={18} />}
        onPress={handleOpenInput}
      >
        {buttonTitle || 'Добавить'}
      </Button>

      <input
        ref={fileInputRef}
        accept={accept}
        className='hidden'
        multiple={multiple}
        type='file'
        onChange={handleInputChange}
      />
    </>
  );
};
