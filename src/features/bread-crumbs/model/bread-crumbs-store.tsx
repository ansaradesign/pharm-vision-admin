import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { BreadCrumbsOptions } from '../config/bread-crumbs-options';

import { TBreadCrumbsDynamic } from './bread-crumbs-dynamic.type';

type TNames = Record<TBreadCrumbsDynamic | string, Record<string, string>>;

interface IBreadCrumbsStore {
  names: TNames;
  addName: (category: TBreadCrumbsDynamic, key: string, value: string) => void;
}

const categories = Object.keys(BreadCrumbsOptions)
  .map((category) => category.slice(1))
  .filter((category) => category);

const initialNames: TNames = {};

categories.forEach((category) => {
  initialNames[category] = {};
});

const isBrowser = typeof window !== 'undefined';

const localBreadcrumbs = isBrowser ? localStorage.getItem('breadcrumbs') : null;

export const useBreadCrumbs = create<IBreadCrumbsStore>()(
  devtools(
    immer((set) => ({
      names: localBreadcrumbs ? JSON.parse(localBreadcrumbs) : initialNames,
      addName: (category, key, value) =>
        set((state) => {
          state.names[category][key] = value;
          if (isBrowser) {
            localStorage.setItem('breadcrumbs', JSON.stringify(state.names));
          }
        }),
    })),
  ),
);
