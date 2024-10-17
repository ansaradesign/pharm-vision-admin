import { ReactNode } from 'react';
import clsx from 'clsx';

import { ModalScrollableArea } from './scrollable-area';
import { ModalLayoutFooter } from './footer';
import { ModalLayoutHeader } from './header';

export type ModalLayoutProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export const ModalLayout = ({ title, description, children, footer }: ModalLayoutProps) => {
  const layoutClass = clsx('p-4', {
    'pt-14': !title,
  });

  return (
    <div className={layoutClass}>
      <ModalScrollableArea>
        {title && <ModalLayoutHeader description={description} title={title} />}
        {children}
      </ModalScrollableArea>
      {footer && <ModalLayoutFooter footer={footer} />}
    </div>
  );
};
