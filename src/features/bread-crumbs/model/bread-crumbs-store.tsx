import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { BreadCrumbsOptions } from "../config/bread-crumbs-options";

type TDynamicNames = Exclude<keyof typeof BreadCrumbsOptions, "/">;

interface IBreadCrumbsStore {
  names: Record<TDynamicNames, Record<string, string>>;
  addName: (category: TDynamicNames, key: string, value: string) => void;
  reset: VoidFunction;
}

export const useBreadCrumbs = create<IBreadCrumbsStore>()(
  devtools(
    immer((set) => ({
      names: {
        companies: { test: "Тестовая категория" },
        brands: { test: "Тестовый брэнд" },
        products: { test: "Тестовый продукт" },
      },
      addName: (category, key, value) =>
        set((state) => {
          state.names[category][key] = value;
        }),
      reset: () =>
        set((state) => {
          state.names = {};
        }),
    }))
  )
);
