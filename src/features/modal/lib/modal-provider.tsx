'use client';

import { ReactNode } from 'react';

import { Modal } from '../ui';

type Props = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: Props) => {
  return (
    <>
      <Modal />
      {children}
    </>
  );
};
