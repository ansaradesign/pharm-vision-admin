'use client';

import UserBtn from './user-circle.svg';

export const ProfileButton = () => {
  return (
    <button>
      <img alt='profile img' src={UserBtn} />
    </button>
  );
};
