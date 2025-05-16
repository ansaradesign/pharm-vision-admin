'use client';
import { Button } from '@nextui-org/button';
import { PiCaretLeftLight } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button
      isIconOnly
      className='!w-6 h-6 min-w-6'
      radius='full'
      startContent={<PiCaretLeftLight opacity={0.5} size={14} />}
      onClick={handleBack}
    />
  );
};
