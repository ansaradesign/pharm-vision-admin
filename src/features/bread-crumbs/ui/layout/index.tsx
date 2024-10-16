'use client';

import { PropsWithChildren, useEffect } from 'react';

import { useBreadCrumbs } from '../../model/bread-crumbs-store';
import { TBreadCrumbsDynamic } from '../../model/bread-crumbs-dynamic.type';

interface Props extends PropsWithChildren {
  title: string;
  category: TBreadCrumbsDynamic;
  id: string | number;
}

export const BreadCrumbsLayout = ({ title, category, id, children }: Props) => {
  const { addName } = useBreadCrumbs();

  useEffect(() => {
    addName(category, id.toString(), title);
  }, []);

  return <>{children}</>;
};
