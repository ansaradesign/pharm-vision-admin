'use client';

import Image from 'next/image';

import UserBtn from './user-circle.svg';

export const ProfileButton = () => {
  return (
    <button>
      <Image alt='Profile' height={50} quality={100} src={UserBtn} width={50} />
    </button>
  );
};
