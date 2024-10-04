import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { TBreadCrumbsDynamic } from "./bread-crumbs-dynamic.type";

type TNames = Record<TBreadCrumbsDynamic | string, Record<string, string>>;

interface IBreadCrumbsStore {
  names: TNames;
  addName: (category: TBreadCrumbsDynamic, key: string, value: string) => void;
  reset: VoidFunction;
  setNames: (obj: TNames) => void;
}

const initialNames = {
  companies: { test: "Тестовая категория" },
  brands: { test: "Тестовый брэнд" },
  products: { test: "Тестовый продукт" },
};

export const useBreadCrumbs = create<IBreadCrumbsStore>()(
  devtools(
    immer((set) => ({
      names: initialNames,
      addName: (category, key, value) =>
        set((state) => {
          state.names[category][key] = value;
          localStorage.setItem("breadcrumbs", JSON.stringify(state.names));
        }),
      setNames: (names) =>
        set((state) => {
          state.names = names;
        }),
      reset: () =>
        set((state) => {
          state.names = {};
          localStorage.setItem("breadcrumbs", "{}");
        }),
    })),
  ),
);
