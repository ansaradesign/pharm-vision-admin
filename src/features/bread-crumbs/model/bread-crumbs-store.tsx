import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { TBreadCrumbsDynamic } from "./bread-crumbs-dynamic.type";

interface IBreadCrumbsStore {
  names: Record<TBreadCrumbsDynamic | string, Record<string, string>>;
  addName: (category: TBreadCrumbsDynamic, key: string, value: string) => void;
  reset: VoidFunction;
}

const localBreadcrumbs = localStorage.getItem("breadcrumbs");

const initialNames = localBreadcrumbs
  ? JSON.parse(localBreadcrumbs)
  : {
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
      reset: () =>
        set((state) => {
          state.names = {};
          localStorage.setItem("breadcrumbs", "{}");
        }),
    })),
  ),
);
