"use client";

import { PropsWithChildren } from "react";

import { useBreadCrumbs } from "@/src/features/bread-crumbs/";

interface Props extends PropsWithChildren {
  queryKey: (string | number)[];
  category: string;
}

export const BreadCrumbsLayout = ({ queryKey, children, category }: Props) => {
  const { addName } = useBreadCrumbs();

  addName(category, queryKey[1] as string, `имя id - ${queryKey[1]}`);

  return <>{children}</>;
};
